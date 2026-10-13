import { videos } from "@/content/week-01/videos";
import { videoReview } from "@/content/textbook/video-review";

export function BookVideo({id}: {id:string}) {
  const video = videos[id];
  const review = videoReview[id];
  if (!video || !review) return null;
  return <details className="book-video">
    <summary><span className="eyebrow">Optional visual explanation</span><strong>{video.title}</strong><span>{video.channel} · open video</span></summary>
    <div className="video-inner">
      <p><strong>Watch for:</strong> {review.watchFor}</p>
      <p className={id === "V01" ? "video-correction" : "video-context"}><strong>{id === "V01" ? "Corrections to the narration:" : "Context:"}</strong> {review.limitation}</p>
      <div className="video-aspect"><iframe src={"https://www.youtube.com/embed/" + video.youtubeId + "?rel=0&playsinline=1"} title={video.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
      <p className="video-context">If the player is unavailable, <a href={"https://www.youtube.com/watch?v=" + video.youtubeId} target="_blank" rel="noreferrer">watch on YouTube</a>. The written chapter contains everything needed for its review.</p>
    </div>
  </details>;
}
