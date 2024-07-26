import React from 'react'

function Footer() {
  return (
    <footer className='flex items-center justify-center p-4 text-slate-700 dark:text-slate-50 w-full dark:bg-slate-800 border-t'>
      <p className='font-bold text-lg'>{document.title}</p>
    </footer>
  )
}

export default Footer