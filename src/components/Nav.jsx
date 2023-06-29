'use client'

import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import {FaBars, FaWindowClose} from "react-icons/fa"

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='max-w-7xl mx-auto p-5 flex justify-between items-center relative'>
        <Logo />
        <div className='hidden lg:flex items-center space-x-12'>
            <Link href="/" className='nav_link'>
                Home
            </Link>
            <Link href="/about" className='nav_link'>
                About
            </Link>
            <Link href="/projects" className='nav_link'>
                Projects
            </Link>
            <Link href="/contact" className='btn_primary transition-all duration-500 fade-out'>
                Contact
            </Link>
        </div>
        <div className='lg:hidden'>
            <FaBars className='w-6 h-6 cursor-pointer text-gray-600 hover:text-gray-950' onClick={() => setIsMenuOpen(true)} />
            {isMenuOpen && (
                <div className='absolute top-0 left-0 w-full z-10 bg-white shadow-sm'>
                    <div className='p-5 flex flex-col space-y-5'>
                        <div className='flex items-center justify-between'>
                            <Logo />
                            <FaWindowClose className='w-6 h-6 cursor-pointer text-gray-600 hover:text-gray-950' onClick={() => setIsMenuOpen(false)} />
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <Link href="/" className='nav_link' onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                            <Link href="/about" className='nav_link' onClick={() => setIsMenuOpen(false)}>
                                About
                            </Link>
                            <Link href="/projects" className='nav_link' onClick={() => setIsMenuOpen(false)}>
                                Projects
                            </Link>
                            <Link href="/contact" className='btn_primary transition-all duration-500 fade-out text-center' onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Nav