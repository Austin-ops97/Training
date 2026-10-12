import type { VideoSpec } from "@/lib/types";

/** In-page YouTube player for one listed segment. start and end are seconds. */
export function youtubeEmbedSrc(
  video: Pick<VideoSpec, "youtubeId" | "startSeconds" | "endSeconds">,
): string {
  const params = new URLSearchParams({
    start: String(video.startSeconds),
    end: String(video.endSeconds),
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  return `https://www.youtube.com/embed/${video.youtubeId}?${params.toString()}`;
}
