import React from 'react'
import { SocialIcon } from 'react-social-icons'

function page() {
  return (
    <div className='max-w-7xl mx-auto px-5 pt-12 pb-20 md:py-24'>
        <div className='flex flex-col items-center justify-center max-w-3xl mx-auto space-y-4 text-center rounded-lg border 
            border-gray-300 py-24 px-8 bg-red-100/25 hover:bg-red-100/15 hover:border-gray-500 transition-all duration-500 fade-out'
         >
            <h2 
                className='text-3xl md:text-4xl leading-[3rem] lg:leading-[4rem] tracking-wide text-slate-950 font-bold
                    text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500'
            >
                    Get in touch
            </h2>
            <p className='tracking-wide leading-7 text-gray-600'> 
                Let's bring your tech vision to life - reach out today!"
            </p>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <a href='tel:2048698510' className='tracking-wide text-slate-950 font-semibold underline'>(204) 869-8510</a>
                <a href="mailto:agarwal.03.akshay@gmail.com" className='tracking-wide text-slate-950 font-semibold underline'>agarwal.03.akshay@gmail.com</a>
                <div className='flex items-center justify-center space-x-2'>
                    <SocialIcon url='https://github.com/webonly-designs' fgColor='white' bgColor='#020617'/>
                    <SocialIcon url='https://www.instagram.com/designs.webonly/' fgColor='white' bgColor='#020617'/>
                    <SocialIcon url='https://www.linkedin.com/in/akshay-agarwal-065274123/' fgColor='white' bgColor='#020617'/>
                </div>
            </div>
           
        </div> 
    </div>
  )
}

export default page