import React from 'react'
import { getProjects } from '@/sanity/sanity-utils'
import Projects from '@/components/Projects'

async function page() {
    const projects = await getProjects()
  return (
    <div>
        <Projects projects={projects} />
    </div>
  )
}

export default page

export const dynamic = 'force-dynamic'