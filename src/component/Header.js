// import React, { useState } from 'react'
// import { Bars3Icon } from '@heroicons/react/24/solid'
// import { Menu, X } from 'lucide-react';

// function Header() {

//     const [toggleMenu,setToggleMenu] = useState(false)

//   return (
//     <div className='bg-header'>
//         <header className='flex justify-between w-full px-5 py-5 md:shadow-md shadow-md ' id='Header' >
//             <a href='#' className='font-bold text-white text-3xl ' >P<span className='bg-secondary'>o</span>rtf<span className='bg-secondary'>o</span>li<span className='bg-secondary'>o</span></a>
//           <nav className='hidden md:block '>
//             <ul className='flex text-black  '>
//               <li><a href='/' className='font-semibold tracking-wide nav text-white'>Home</a></li>
//               <li><a href='#About' className='font-semibold tracking-wide nav text-white'>About</a></li>
//               <li><a href='#Education' className='font-semibold tracking-wide nav text-white'>Educations</a></li>
//               <li><a href='#Projects' className='font-semibold tracking-wide nav text-white'>Projects</a></li>
//               <li><a href='#tools' className='font-semibold tracking-wide nav text-white'>Tools</a></li>
//               <li><a href='#Contact' className='font-semibold tracking-wide nav text-white'>Contact</a></li>
//             </ul>
//           </nav>

//         {/* {toggleMenu && <nav className='block md:hidden mobile-nav z-50'>
//             <ul onClick={() => setToggleMenu(!toggleMenu)} className='flex flex-col rounded-md bg-primary py-4'>
//               <li><a href='/' className='text-white'>Home</a></li>
//               <li><a href='#About' className='text-white'>About</a></li>
//               <li><a href='#Education' className='text-white'>Educations</a></li>
//               <li><a href='#tools' className='text-white'>Tools & Technologies</a></li>
//               <li><a href='#Projects' className='text-white'>Projects</a></li>
//               <li><a href='#Contact' className='text-white'>Contact</a></li>
//             </ul>
//           </nav>
//         }
//         */}
//           {/* <button onClick={() => setToggleMenu(!toggleMenu)}  className='block md:hidden text-white'>
//             <Bars3Icon className='md:text-white h-7 '/>
//           </button> */}

//           <button 
//           className="md:hidden text-white"
//           onClick={() => setToggleMenu(!toggleMenu)}
//         >
//           {toggleMenu ? <X size={24} /> : <Menu size={24} />}
//         </button>
          
//           {toggleMenu && (
//         <nav className="md:hidden bg-black border-t border-gray-800 mt-4 py-4">
//           <div className="flex flex-col space-y-4 px-6">
//             <button  className="text-white hover:text-orange-500 transition-colors text-left">
//               Home
//             </button>
//             <button  className="text-white hover:text-orange-500 transition-colors text-left">
//               About
//             </button>
//             <button  className="text-white hover:text-orange-500 transition-colors text-left">
//               Skills
//             </button>
//             <button  className="text-white hover:text-orange-500 transition-colors text-left">
//               Projects
//             </button>
//             <button  className="text-white hover:text-orange-500 transition-colors text-left">
//               Contact
//             </button>
//           </div>
//         </nav>
//       )}
//         </header>
//     </div>
//   )
// }

// export default Header

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50 px-6 py-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          P<span className="text-orange-500">o</span>rtf<span className="text-orange-500">o</span>li<span className="text-orange-500">o</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <ul className='flex text-black  '>
              <li><a href='/' className='font-semibold tracking-wide nav text-white'>Home</a></li>
              <li><a href='#About' className='font-semibold tracking-wide nav text-white'>About</a></li>
              <li><a href='#Education' className='font-semibold tracking-wide nav text-white'>Educations</a></li>
              <li><a href='#tools' className='font-semibold tracking-wide nav text-white'>Skills</a></li>
              <li><a href='#Projects' className='font-semibold tracking-wide nav text-white'>Projects</a></li>
              <li><a href='#Contact' className='font-semibold tracking-wide nav text-white'>Contact</a></li>
            </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black border-t border-gray-800 mt-4 py-4">
          <ul className="flex flex-col space-y-4 px-6">
              <li><a href='/' className='font-semibold tracking-wide  text-white'>Home</a></li>
              <li><a href='#About' className='font-semibold tracking-wide text-white'>About</a></li>
              <li><a href='#Education' className='font-semibold tracking-wide  text-white'>Educations</a></li>
              <li><a href='#tools' className='font-semibold tracking-wide  text-white'>Skills</a></li>
              <li><a href='#Projects' className='font-semibold tracking-wide nav text-white'>Projects</a></li>
              <li><a href='#Contact' className='font-semibold tracking-wide  text-white'>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;


