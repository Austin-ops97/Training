import { textbookVideos as videos } from "@/content/textbook/videos";
import { videoReview } from "@/content/textbook/video-review";

export function BookVideo({id}: {id:string}) {
  const video = videos[id];
  const review = videoReview[id];
  if (!video || !review) return null;
  return <details className="book-video" open={["T01","T02","T03"].includes(id)}>
    <summary><span className="eyebrow">Optional visual explanation</span><strong>{video.title}</strong><span>{video.channel} · open video</span></summary>
    <div className="video-inner">
      <p><strong>Watch for:</strong> {review.watchFor}</p>
      <p className={(id === "V01" || id === "T01") ? "video-correction" : "video-context"}><strong>{(id === "V01" || id === "T01") ? "Corrections to the narration:" : "Context:"}</strong> {review.limitation}</p>
      <div className="video-aspect"><iframe src={"https://www.youtube-nocookie.com/embed/" + video.youtubeId + "?rel=0&playsinline=1"} title={video.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
      {review.check?<div className="video-check"><p><strong>Explain after watching:</strong> {review.check.question}</p><details><summary>Compare your explanation</summary><p>{review.check.guidance}</p></details></div>:null}
      {review.sourceUrl?<p className="video-context"><a href={review.sourceUrl} target="_blank" rel="noreferrer">Read the publisher’s companion lesson</a></p>:null}
      <p className="video-context">If the player is unavailable, <a href={"https://www.youtube.com/watch?v=" + video.youtubeId} target="_blank" rel="noreferrer">watch on YouTube</a>. The written chapter contains everything needed for its review.</p>
    </div>
  </details>;
}
