import type { Project } from "@/data/projects";

function getYouTubeVideoId(url: string) {
  const embedMatch = url.match(/youtube\.com\/embed\/([^?&/]+)/);
  if (embedMatch) {
    return embedMatch[1];
  }

  const watchMatch = url.match(/[?&]v=([^?&/]+)/);
  if (watchMatch) {
    return watchMatch[1];
  }

  const shortMatch = url.match(/youtu\.be\/([^?&/]+)/);
  if (shortMatch) {
    return shortMatch[1];
  }

  return undefined;
}

/** Prefer YouTube maxres (1280×720+) over hqdefault (480×360). */
function getYouTubeThumbnailSrc(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}

/** Legacy placeholders that should never override real YouTube thumbs. */
function isLegacyPlaceholderThumbnail(thumbnail: string) {
  return /^\/images\/projects\/project-\d{2}\.jpg$/.test(thumbnail);
}

export function getProjectThumbnailSrc(project: Project) {
  const { thumbnail, videoUrl } = project;

  if (thumbnail.startsWith("http://") || thumbnail.startsWith("https://")) {
    const videoIdFromThumb = getYouTubeVideoId(thumbnail);
    if (videoIdFromThumb && thumbnail.includes("hqdefault")) {
      return getYouTubeThumbnailSrc(videoIdFromThumb);
    }
    return thumbnail;
  }

  // Curated local thumbs (e.g. MS Glow poster) win; legacy project-01.jpg placeholders do not.
  if (
    thumbnail.startsWith("/") &&
    !isLegacyPlaceholderThumbnail(thumbnail) &&
    videoUrl
  ) {
    return thumbnail;
  }

  if (videoUrl) {
    const videoId = getYouTubeVideoId(videoUrl);
    if (videoId) {
      return getYouTubeThumbnailSrc(videoId);
    }
  }

  return thumbnail;
}
