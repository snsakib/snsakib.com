"use client";
import { incompleeta } from "@/app/fonts-loader";
import CourseCarousel from "../../ui/courseCarousel";

export default function HomeCourses() {
  return (
    <section
      id="home-courses"
      className="page-section text-stone-50 py-6 md:py-10"
    >
      <div>
        <h2
          className={
            incompleeta.className +
            " section-heading mb-5 text-gradient-1 text-center"
          }
        >
          My Courses
        </h2>
      </div>
      <CourseCarousel />
    </section>
  );
}
