import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Build YouTube embed URL for autoplay, mute, loop (same as homepage hero). */
export function getYouTubeEmbedUrl(url: string): string | null {
  let videoId: string | null = null;
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  if (match && match[1]) {
    videoId = match[1];
  } else {
    const idMatch = url.match(/^[a-zA-Z0-9_-]{11}$/);
    if (idMatch) {
      videoId = idMatch[0];
    }
  }

  if (videoId) {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      loop: "1",
      playlist: videoId,
      controls: "0",
      modestbranding: "1",
      playsinline: "1",
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }
  return null;
}
