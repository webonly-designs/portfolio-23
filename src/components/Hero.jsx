import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <div className='max-w-7xl mx-auto px-5 pt-12 pb-20 md:py-24'>
        <div className='flex flex-col items-center justify-center text-center space-y-8 max-w-3xl mx-auto'>
            <div className='w-36 h-36 md:w-48 md:h-48 rounded-full bg-gray-950/5 relative flex-center'>
                <Image src="/portfolioImage.png" fill className="object-contain"/>
            </div>
            <h1 className='text-3xl lg:text-5xl leading-[3rem] lg:leading-[4rem] tracking-wide text-slate-950 font-bold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500'>Hello, I'm Akshay,</span> Software Developer based in Canada 🇨🇦
            </h1>
            <p className='tracking-wide leading-7 text-gray-600'>
                I am a software developer with a Computer Science degree from the University of Manitoba. 
                Specializing in ReactJs, NextJs, and Tailwind CSS, I am now exploring 
                React Native for cross-platform app development.
            </p>
            <div className='flex items-center space-x-4'> 
                <Link href='/contact' className='btn_primary transition-all duration-500 fade-out'>
                    Get in touch
                </Link>
                <Link href='/projects' className='btn_secondary transition-all duration-500 fade-out'>
                    View projects
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero