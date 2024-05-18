import { incompleeta } from "@/app/fonts-loader";
import ProjectCarousel from "../../ui/projectCarousel";

export default function HomeProjects() {
  return (
    <section
      id="home-projects"
      className="page-section text-stone-50 pt-16 pb-10"
    >
      <div className="text-center mb-5">
        <h2
          className={
            incompleeta.className + " section-heading mb-2 text-gradient-2"
          }
        >
          My Works
        </h2>
      </div>
      <ProjectCarousel />
      <div className="home-projects-section-divider"></div>
    </section>
  );
}
