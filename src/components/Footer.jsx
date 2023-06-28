import React from 'react'
import Logo from './Logo'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className='max-w-7xl mx-auto p-5 flex flex-col items-center justify-center md:flex-row md:justify-between gap-4'>
        <div className='flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between'>
            <Logo/>
            <p className='md:border-l md:border-gray-300 md:pl-2 text-gray-600'>© 2023 Akshay Agarwal Portfolio</p>
        </div>
        <div className='flex items-center justify-center space-x-2'>
            <SocialIcon url='https://github.com/webonly-designs' fgColor='white' bgColor='#020617'/>
            <SocialIcon url='https://www.instagram.com/designs.webonly/' fgColor='white' bgColor='#020617'/>
            <SocialIcon url='https://www.linkedin.com/in/akshay-agarwal-065274123/' fgColor='white' bgColor='#020617'/>
        </div>
    </div>
  )
}

export default Footer