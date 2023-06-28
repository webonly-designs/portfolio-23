import React from 'react'
import Link from 'next/link'

function Contact() {
  return (
    <div className='max-w-7xl mx-auto px-5 pb-20 md:pb-24'>
         <div className='flex flex-col items-center justify-center max-w-3xl mx-auto space-y-4 text-center rounded-lg border 
            border-gray-300 py-24 px-8 bg-red-100/25 hover:bg-red-100/15 hover:border-gray-500 transition-all duration-500 fade-out'
         >
            <h2 
                className='text-3xl md:text-4xl leading-[3rem] lg:leading-[4rem] tracking-wide text-slate-950 font-bold
                    text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500'
            >
                    Contact
            </h2>
            <p className='tracking-wide leading-7 text-gray-600'> 
                Let's bring your tech vision to life - reach out today!"
            </p>
            <Link href='/contact' className='btn_primary transition-all duration-500 fade-out'>
                    Get in touch
            </Link>
        </div> 
    </div>
  )
}

export default Contact