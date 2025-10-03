import { incompleeta } from "@/app/fonts-loader";
import ProjectCarousel from "../../ui/projectCarousel";

export default function HomeProjects() {
  return (
    <section
      id="home-projects"
      className="page-section text-stone-50 py-6 md:py-10"
    >
      <div className="text-center">
        <h2
          className={
            incompleeta.className + " section-heading text-gradient-2 mb-5"
          }
        >
          My Works
        </h2>
      </div>
      <ProjectCarousel />
    </section>
  );
}
