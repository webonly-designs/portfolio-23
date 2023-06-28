import React from 'react'
import Project from './Project'
import Link from 'next/link'

function Projects({projects}) {
  return (
    <div className='max-w-7xl mx-auto px-5 pb-20 md:pb-24'>
        <div className='flex flex-col items-center justify-center max-w-3xl mx-auto space-y-4 text-center'>
            <h2 
                className='text-3xl md:text-4xl leading-[3rem] lg:leading-[4rem] tracking-wide text-slate-950 font-bold
                    text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500'
            >
                    Projects
            </h2>
            <p className='tracking-wide leading-7 text-gray-600'>
                Spearheaded a range of diverse tech projects, overcoming complex challenges and bringing forth transformative solutions that elevate user experiences.
            </p>
        </div> 
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pt-12'>
            {projects.map(project => (
                <Link key={project._id} href="/">
                    <Project project={project}/>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Projects