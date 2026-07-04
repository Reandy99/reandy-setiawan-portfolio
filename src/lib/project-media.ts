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

export function getProjectThumbnailSrc(project: Project) {
  if (project.thumbnail.startsWith("http://") || project.thumbnail.startsWith("https://")) {
    return project.thumbnail;
  }

  if (!project.videoUrl) {
    return project.thumbnail;
  }

  const videoId = getYouTubeVideoId(project.videoUrl);
  if (!videoId) {
    return project.thumbnail;
  }

  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
