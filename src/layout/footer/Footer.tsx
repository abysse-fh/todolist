import React from 'react'

function Footer() {
  return (
    <footer className='flex items-center justify-center p-4 text-blue-700 dark:text-slate-50 w-full bg-blue-300 dark:bg-slate-800 border-t border-t-slate-300'>
      <p className='font-bold text-lg'>{document.title}</p>
    </footer>
  )
}

export default Footer