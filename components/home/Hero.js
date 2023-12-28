export default function Hero() {
  return (
    <section id="home-hero" className="border flex flex-col">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold">S N Sakib</h1>
        <h2 className="text-xl font-semibold py-4">Web2.0 & Web3.0 Developer</h2>
      </div>
      <div className="w-full py-4">
        <video controls>
          <source src="path-to-your-video.webm" type="video/webm" />
          <source src="path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
