export default function VideoStream() {
  return (
    <div className="p-5">
      <iframe
        width="800"
        height="600"
        src="https://www.youtube.com/embed/Buz7VjhUMwk?si=F4UQVbnjzLiiqSFq"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
