import ProjectDescription from '@/components/ProjectDescription'
import { getProject } from '@/sanity/sanity-utils'
import React from 'react'

async function Project({params}) {
    const project = await getProject(params.slug)
    console.log(project)
  return (
    <div>
        <ProjectDescription project={project} />
    </div>
  )
}

export default Project

export const dynamic = 'force-dynamic'