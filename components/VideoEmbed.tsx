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
        <strong>{video.code}</strong> {video.title} — {video.channel}
        {video.required ? "" : ". Optional clip."}
      </figcaption>
      {video.code === "V01" ? <p className="video-caption"><strong>Narration corrections:</strong> 60 Hz means 60 complete cycles per second, with two direction changes per sinusoidal cycle. Energy can be stored in batteries and other systems; ordinary wires are not bulk energy storage.</p> : null}
    </figure>
  );
}
