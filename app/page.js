import BriefBlog from '@/components/home/BriefBlog'
import BriefClients from '@/components/home/BriefClients'
import BriefContact from '@/components/home/BriefContact'
import BriefCourses from '@/components/home/BriefCourses'
import BriefIntro from '@/components/home/BriefIntro'
import BriefProjects from '@/components/home/BriefProjects'
import BriefServices from '@/components/home/BriefServices'
import BriefSkills from '@/components/home/BriefSkills'
import Hero from '@/components/home/Hero'

export default function Home() {
  return (
    <main>
      <Hero/>
      <BriefIntro/>
      <BriefClients/>
      <BriefProjects/>
      <BriefCourses/>
      <BriefServices/>
      <BriefSkills/>
      <BriefBlog/>
      <BriefContact/>
    </main>
  )
}
