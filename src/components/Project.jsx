import Image from 'next/image'
import React from 'react'
import Tech from './Tech'
import { FaArrowRight } from 'react-icons/fa'

function Project({project}) {
    console.log(project)
  return (
    <div 
        className='border border-gray-300 hover:border-gray-500 hover:bg-white/15 rounded-lg bg-white/25 transition duration-500 fade-out h-full'
    >
        <div className='w-full h-80 relative'>
            <Image src={project.image} fill className='object-cover rounded-t-lg' />
        </div>
        <div className='flex flex-col space-y-3 px-3 py-5 relative'>
            <h3 className='font-medium tracking-wide text-lg line-clamp-1 text-slate-950'>{project.title}</h3>
            <div className='flex items-center flex-wrap gap-2'>
                {project.categories.map(category => (
                    <Tech category={category} />
                ))}
            </div>
            <div className='flex items-center gap-2 font-medium text-slate-600 hover:text-slate-950'>
                View full project
                <FaArrowRight className='w-4 h-4'/>
            </div>
        </div>
    </div>
  )
}

export default Project