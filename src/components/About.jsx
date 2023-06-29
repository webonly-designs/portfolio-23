import React from 'react'
import Link from 'next/link'

function About() {
  return (
    <div className='max-w-7xl mx-auto px-5 pt-8 pb-20 md:pb-24'>
        <div className='flex flex-col items-center justify-center max-w-4xl mx-auto space-y-8 text-center'>
            <h2 
                className='text-3xl md:text-4xl leading-[3rem] lg:leading-[4rem] tracking-wide text-slate-950 font-bold
                    text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500'
            >
                    About
            </h2>
            <p className='tracking-wide leading-7 text-gray-600'>
                Hello! I am a passionate Computer Science graduate from the University of Manitoba. 
                Intrigued by the intricacies of software development, I have developed proficiency in Next.js, 
                React, Tailwind CSS, and Java, honing my skills through rigorous academic training and hands-on experiences.<br/><br/>

                The highlight of my portfolio is Dhalem, a real-time real estate web app, illustrating my 
                capabilities in server-side rendering, dynamic routing, and real-time data fetching using Rapid API. 
                The integration of Tailwind CSS and Figma design in my projects mirrors my attention to detail and aesthetics.<br/><br/>

                Beyond my mastery of modern JavaScript frameworks, my fluency in Java allows me to delve 
                deep into Object-Oriented Programming. Together with my strong understanding of data structures and algorithms, I can 
                efficiently tackle complex computational challenges.<br/><br/>

                My journey also includes substantial freelancing experience, where I designed 
                and developed around 10 websites for small businesses, using WordPress and Next.js. This experience 
                enriched my project management skills and enabled me to tailor solutions according to client needs.<br/><br/>

                I am presently exploring the nuances of React Native for cross-platform app development, 
                aiming to augment my React skills further. This is a testament to my commitment 
                towards continuous learning and technological advancement.<br/><br/>

                In this portfolio, you will find a blend of my technical prowess, dedication to excellence, a 
                knack for innovative problem-solving, and a spirit of collaboration. <br/>Excited to know more? Feel 
                free to explore or connect with me!
            </p>
            <div className='flex items-center space-x-4'> 
                <Link href='/contact' className='btn_primary transition-all duration-500 fade-out'>
                    Get in touch
                </Link>
                <Link href='/contact' className='btn_secondary transition-all duration-500 fade-out'>
                    View projects
                </Link>
            </div>
        </div>  
    </div>
  )
}

export default About