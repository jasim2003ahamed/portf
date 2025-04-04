import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {

    const [toggleMenu,setToogkeMenu] = useState(false)

  return (
    <div >
        <header className='flex justify-between  w-full px-5 py-5 md:shadow-md shadow-md ' id='Header' >
            <a href='#' className='font-bold bg-four text-3xl ' >P<span className='bg-secondary'>o</span>rtf<span className='bg-secondary'>o</span>li<span className='bg-secondary'>o</span></a>
          <nav className='hidden md:block  '>
            <ul className='flex text-black  '>
              <li><a href='/' className='font-semibold tracking-wide nav'>Home</a></li>
              <li><a href='#About' className='font-semibold tracking-wide nav'>About</a></li>
              <li><a href='#Projects' className='font-semibold tracking-wide nav'>Projects</a></li>
              <li><a href='#Contact' className='font-semibold tracking-wide nav'>Contact</a></li>
            </ul>
          </nav>

        {toggleMenu && <nav className='block md:hidden mobile-nav  '>
            <ul onClick={() => setToogkeMenu(!toggleMenu)} className='flex flex-col rounded-md bg-primary py-4'>
              <li><a href='/' className='text-white'>Home</a></li>
              <li><a href='#About' className='text-white'>About</a></li>
              <li><a href='#Projects' className='text-white'>Projects</a></li>
              <li><a href='#Contact' className='text-white'>Contact</a></li>
            </ul>
          </nav>
        }

          <button onClick={() => setToogkeMenu(!toggleMenu)}  className='block md:hidden'>
            <Bars3Icon className='md:text-white h-7 '/>
          </button>
        </header>
    </div>
  )
}

export default Header