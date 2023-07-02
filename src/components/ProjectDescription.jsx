import React from 'react'
import Image from 'next/image'
import Tech from './Tech'
import Link from 'next/link'

function ProjectDescription({ project }) {
  return (
    <div className='max-w-7xl mx-auto px-5 pt-8 pb-20 md:pb-24'>
        <div className='flex flex-col space-y-8'>
            <div className='relative w-full aspect-[4/3] md:h-[650px] bg-white/25 border border-gray-300 rounded-lg'>
                <Image src={project.image} alt={project.title} fill className="object-contain p-5"/>
            </div>
            <div className='md:space-y-4'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                    <h2 className='text-2xl md:text-3xl text-slate-950 font-bold'
                    >
                            {project.title} 
                    </h2>
                     
                    <div className='flex items-center gap-4'>
                        {project.gitLink && 
                            <Link href='/contact' className='btn_primary transition-all duration-500 fade-out text-center'>
                                GitHub Link
                            </Link>
                        }
                        {project.liveLink &&
                            <Link href='/contact' className='btn_secondary transition-all duration-500 fade-out text-center'>
                                View projects
                            </Link>
                        }
                    </div>
                    
                </div>
                <div className='flex items-center flex-wrap gap-2'> 
                    {project.categories.map(category => (
                        <Tech category={category} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDescription