import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Highlight from '@/components/Highlight'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { getFeaturedProjects } from '@/sanity/sanity-utils'

export default async function Home() {
  const projects = await getFeaturedProjects()
  return (
   <div>
     <Hero />
     <Highlight />
     <Skills />
     <Projects projects={projects} /> 
     <Contact />
   </div>
  )
}

export const dynamic = 'force-dynamic'
