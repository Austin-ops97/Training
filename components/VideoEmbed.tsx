import type { VideoSpec } from "@/lib/types";
import { youtubeEmbedSrc } from "@/lib/embed";

export function VideoEmbed({ video }: { video: VideoSpec }) {
  const src = youtubeEmbedSrc(video);
  return (
    <figure className="video-frame">
      <div className="video-aspect">
        <iframe
          src={src}
          title={`${video.code}: ${video.title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <figcaption className="video-caption">
        <strong>{video.code}</strong> {video.title} — {video.channel}. Listed duration {video.listedDuration}.{" "}
        {video.required ? "Required." : "Not required: transcript was not retrieved."} {video.watchNote}
      </figcaption>
    </figure>
  );
}
