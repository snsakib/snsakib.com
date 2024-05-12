import Carousel from "../../ui/carousel";

export default function HomeProjects() {
  return (
    <section
      id="home-projects"
      className="page-section text-stone-50 pt-28 pb-10"
    >
      <div className="text-center mb-10">
        <h2 className="section-heading mb-5 text-gradient-2">My Works</h2>
        <p className="text-md md:text-2xl">
          Here are some of my projects. I have been working
        </p>
      </div>
      <Carousel />
    </section>
  );
}
