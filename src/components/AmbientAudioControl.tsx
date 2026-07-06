"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import {
  AmbientAudioEngine,
  isAmbientDisabledByUser,
} from "@/lib/ambient-audio";
import { cn } from "@/lib/utils";

const BAR_HEIGHTS = [0.35, 0.65, 0.5, 0.8, 0.45, 0.7] as const;
const INTERACTION_EVENTS = [
  "pointerdown",
  "keydown",
  "wheel",
  "touchstart",
  "scroll",
] as const;

export function AmbientAudioControl() {
  const engineRef = useRef<AmbientAudioEngine | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    engineRef.current = new AmbientAudioEngine();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    setIsReady(true);

    const shouldAutoStart = () => {
      return !isAmbientDisabledByUser() && !mediaQuery.matches;
    };

    const tryStart = async () => {
      const engine = engineRef.current;
      if (!engine || !shouldAutoStart() || engine.isPlaying) {
        return false;
      }

      const didPlay = await engine.play();
      if (didPlay) {
        setIsPlaying(true);
      }

      return didPlay;
    };

    const startOnInteraction = () => {
      void tryStart();
    };

    const listeners: Array<{
      eventName: (typeof INTERACTION_EVENTS)[number];
      handler: () => void;
    }> = [];

    if (shouldAutoStart()) {
      void tryStart();

      for (const eventName of INTERACTION_EVENTS) {
        window.addEventListener(eventName, startOnInteraction, { passive: true });
        listeners.push({ eventName, handler: startOnInteraction });
      }
    }

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);

      for (const { eventName, handler } of listeners) {
        window.removeEventListener(eventName, handler);
      }

      engineRef.current?.dispose();
      engineRef.current = null;
    };
  }, []);

  const handleToggle = async () => {
    const engine = engineRef.current;
    if (!engine) {
      return;
    }

    if (isPlaying) {
      await engine.stop();
      setIsPlaying(false);
      return;
    }

    const didPlay = await engine.play();
    setIsPlaying(didPlay);
  };

  if (!isReady) {
    return null;
  }

  return (
    <div className="ambient-audio-control" aria-live="polite">
      <button
        type="button"
        className={cn(
          "ambient-audio-button",
          isPlaying && "ambient-audio-button--active",
        )}
        onClick={() => {
          void handleToggle();
        }}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
      >
        <span className="ambient-audio-bars" aria-hidden>
          {BAR_HEIGHTS.map((height, index) => (
            <span
              key={index}
              className={cn(
                "ambient-audio-bar",
                isPlaying && !prefersReducedMotion && "ambient-audio-bar--active",
              )}
              style={{ "--bar-scale": height } as CSSProperties}
            />
          ))}
        </span>
        <span className="ambient-audio-label">
          {isPlaying ? "MUTE" : "PLAY"}
        </span>
      </button>
    </div>
  );
}
