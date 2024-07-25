import React, { useEffect, useState } from 'react';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Détecte le mode sombre par défaut du système
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    const initialMode = savedMode !== null ? JSON.parse(savedMode) : prefersDarkMode;

    setIsDarkMode(initialMode);
    if (initialMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <header className='w-full flex justify-between p-4 gap-8 items-center border-b border-b-blue-300 dark:border-b-slate-500 bg-white dark:bg-slate-800'>
      <h1 className='text-3xl text-blue-500 dark:text-slate-50 font-bold'>{document.title}</h1>
      <ul className='flex gap-4 flex-grow'>
        <li className='active text-black dark:text-slate-50'>Todo</li>
        <li className='active text-black dark:text-slate-50'>Wip</li>
        <li className='active text-black dark:text-slate-50'>Test</li>
        <li className='active text-black dark:text-slate-50'>Done</li>
      </ul>
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isDarkMode ? 'transform translate-x-full' : ''}`}></div>
        </div>
      </label>
    </header>
  );
}

export default Header;
