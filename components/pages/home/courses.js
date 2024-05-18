import { incompleeta } from "@/app/fonts-loader";

export default function HomeCourses() {
  return (
    <section
      id="home-courses"
      className="page-section text-stone-50 pt-16 pb-10"
    >
      <h2
        className={
          incompleeta.className +
          " section-heading mb-3 md:mb-7 text-gradient-1 text-center lg:text-left"
        }
      >
        My Courses
      </h2>
      <div className="home-courses-section-divider"></div>
    </section>
  );
}
