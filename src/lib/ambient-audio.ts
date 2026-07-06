import { siteConfig } from "@/lib/utils";

const STORAGE_KEY = "rs-ambient-audio";
const FADE_SECONDS = 1.2;
const TARGET_VOLUME = 0.18;
const AUDIO_SRC = siteConfig.ambientAudioSrc;

export function isAmbientDisabledByUser(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    return window.localStorage.getItem(STORAGE_KEY) === "off";
  } catch {
    return false;
  }
}

export function readAmbientPreference(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    return window.localStorage.getItem(STORAGE_KEY) === "on";
  } catch {
    return false;
  }
}

export function writeAmbientPreference(enabled: boolean) {
  try {
    window.localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off");
  } catch {
    // Ignore storage failures (private mode, etc.)
  }
}

function clampVolume(value: number) {
  return Math.min(1, Math.max(0, value));
}

export class AmbientAudioEngine {
  private audio: HTMLAudioElement | null = null;
  private playing = false;
  private fadeToken = 0;
  private fadeFrameId: number | null = null;

  get isPlaying() {
    return this.playing;
  }

  private cancelFade() {
    if (this.fadeFrameId !== null) {
      cancelAnimationFrame(this.fadeFrameId);
      this.fadeFrameId = null;
    }
  }

  private startFade(
    audio: HTMLAudioElement,
    from: number,
    to: number,
    onComplete?: () => void,
  ) {
    this.cancelFade();

    const startVolume = clampVolume(from);
    const endVolume = clampVolume(to);
    const start = performance.now();
    const durationMs = FADE_SECONDS * 1000;

    audio.volume = startVolume;

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 2;
      audio.volume = clampVolume(startVolume + (endVolume - startVolume) * eased);

      if (progress < 1) {
        this.fadeFrameId = requestAnimationFrame(step);
        return;
      }

      audio.volume = endVolume;
      this.fadeFrameId = null;
      onComplete?.();
    };

    this.fadeFrameId = requestAnimationFrame(step);
  }

  private getAudio() {
    if (typeof window === "undefined") {
      return null;
    }

    if (!this.audio) {
      this.audio = new Audio(AUDIO_SRC);
      this.audio.loop = true;
      this.audio.preload = "auto";
      this.audio.volume = 0;
      this.audio.load();
    }

    return this.audio;
  }

  async play(): Promise<boolean> {
    const audio = this.getAudio();
    if (!audio) {
      return false;
    }

    const token = ++this.fadeToken;

    try {
      if (audio.paused) {
        await audio.play();
      }
    } catch {
      this.playing = false;
      return false;
    }

    if (token !== this.fadeToken) {
      return false;
    }

    this.startFade(audio, audio.volume, TARGET_VOLUME);
    this.playing = true;
    writeAmbientPreference(true);
    return true;
  }

  async stop(): Promise<void> {
    const audio = this.getAudio();
    if (!audio) {
      this.playing = false;
      writeAmbientPreference(false);
      return;
    }

    const token = ++this.fadeToken;
    const startVolume = clampVolume(audio.volume);

    this.startFade(audio, startVolume, 0, () => {
      if (token !== this.fadeToken) {
        return;
      }

      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0;
    });

    this.playing = false;
    writeAmbientPreference(false);
  }

  dispose() {
    this.fadeToken += 1;
    this.cancelFade();

    if (!this.audio) {
      return;
    }

    this.audio.pause();
    this.audio.src = "";
    this.audio = null;
    this.playing = false;
  }
}
