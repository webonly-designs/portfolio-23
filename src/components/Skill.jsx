import React from 'react'

function Skill({logo, name}) {
  return (
    <div 
        className='flex flex-col items-center justify-center p-5 space-y-3 bg-white/25 
        rounded-lg border border-gray-300 hover:bg-white/15 hover:border-gray-500 hover:scale-105
        transition duration-500 fade-out'
        >
        {logo}
        <p className='text-xl font-medium text-slate-950'>{name}</p>
    </div>
  )
}

export default Skill