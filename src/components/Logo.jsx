import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Link href="/" className='flex items-center space-x-3'>
      <div className='w-14 h-14 rounded-full bg-gray-950/5 relative flex-center'>
        <Image src="/portfolioImage.png" fill className='object-contain'/>
      </div>
      <p className='text-2xl font-semibold text-gray-950 tracking-tighter'>Akshay Agarwal</p>
    </Link>
  )
}

export default Logo