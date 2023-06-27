import React from 'react'

function Tech({category}) {
  return (
    <div 
        className='px-4 py-1 border border-white 
        bg-gradient-to-r from-red-400 to-red-500 tracking-wide 
        rounded-full text-sm text-white'
    >
        <p>{category.title}</p>
    </div>
  )
}

export default Tech