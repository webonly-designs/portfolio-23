import About from '@/components/About'
import Contact from '@/components/Contact'
import Highlight from '@/components/Highlight'
import Skills from '@/components/Skills'
import React from 'react'

function page() {
  return (
    <div>
        <About />
        <Highlight />
        <Skills />
        <Contact />
    </div>
  )
}

export default page