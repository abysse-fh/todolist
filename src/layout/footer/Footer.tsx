import React from 'react'

function Footer() {
  return (
    <footer className='flex items-center justify-center h-20 text-blue-700 w-full bg-blue-300 border-t border-t-slate-300'>
      <p className='font-bold text-lg'>{document.title}</p>
    </footer>
  )
}

export default Footer