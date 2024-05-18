import Hero from "@/components/pages/home/hero";
import HomeClients from "@/components/pages/home/clients";
import HomeProjects from "@/components/pages/home/projects";
import HomeCourses from "@/components/pages/home/courses";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeClients />
      <HomeProjects />
      <HomeCourses />
    </main>
  );
}
