import React from 'react'
import { TbBrandJavascript, TbBrandPython, TbBrandReact, TbBrandNextjs, TbLetterS, TbBrandMysql, TbBrandMongodb} from 'react-icons/tb'
import { FaJava, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import Skill from './Skill'


function Skills() {
  return (
    <div className='max-w-7xl mx-auto px-5 pb-20 md:pb-24'>
        <div className='flex flex-col items-center justify-center max-w-3xl mx-auto space-y-4 text-center'>
            <h2 
                className='text-3xl md:text-4xl leading-[3rem] lg:leading-[4rem] tracking-wide text-slate-950 font-bold
                    text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500'
            >
                    Skills
            </h2>
            <p className='tracking-wide leading-7 text-gray-600'>
                Versatile Proficiencies. Empowered to conquer varied tech challenges, bringing transformative solutions to life.
            </p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 pt-8'>
                <Skill logo={<TbBrandJavascript className='w-16 h-16 text-slate-950' />} name="JavaScript"/>
                <Skill logo={<FaJava className='w-16 h-16 text-slate-950'/>} name="Java"/>
                <Skill logo={<TbBrandPython className='w-16 h-16 text-slate-950'/>} name="Python"/>
                <Skill logo={<FaHtml5 className='w-16 h-16 text-slate-950'/>} name="Html5"/>
                <Skill logo={<FaCss3Alt className='w-16 h-16 text-slate-950' />} name="Css3"/>
                <Skill logo={<TbBrandReact className='w-16 h-16 text-slate-950'/>} name="ReactJs"/>
                <Skill logo={<TbBrandNextjs className='w-16 h-16 text-slate-950'/>} name="NextJs"/>
                <Skill logo={<SiTailwindcss className='w-16 h-16 text-slate-950'/>} name="TailwindCss"/>
                <Skill logo={<FaNodeJs className='w-16 h-16 text-slate-950' />} name="NodeJs"/>
                <Skill logo={<TbLetterS className='w-16 h-16 text-slate-950'/>} name="Sanity CMS"/>
                <Skill logo={<TbBrandMysql className='w-16 h-16 text-slate-950'/>} name="My SQL"/>
                <Skill logo={<TbBrandMongodb className='w-16 h-16 text-slate-950'/>} name="MongoDb"/>
            </div>
        </div>
    </div>
  )
}

export default Skills