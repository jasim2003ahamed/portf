import React from 'react'
import Coding from '../assests/coding.png'
import { FaFacebookF, FaGithub ,FaLinkedinIn,FaInstagram } from "react-icons/fa";

function Hero() {

        const config = {
          subtitle:"Frontend Developer"
        }





  return (
    <section className='flex flex-col md:flex-row justify-center px-5 py-28 md:py-32 border-b-2 shadow-sm border-collapse w-full' id='Home'>

      <div className='md:w-1/2 '>
            <h1  className='py-8 text-5xl justify-center font-hero-font bg-secondary'>Hi, <br/>Im Jasim Ahamed
                <p className='text-2xl text-zinc-600'>{config.subtitle}</p>
            </h1>

            <div className='flex py-4'>
              <a href='#' className='pr-3 text-zinc-600 hover:text-black'><FaFacebookF size={40}/></a>
              <a target='_blank' href='https://github.com/' className='pr-3 text-zinc-600 hover:text-black'>< FaGithub  size={40}/></a>
              <a target='_blank' href='https://www.linkedin.com/in/ahamed-z-918996260' className='pr-3 text-zinc-600 hover:text-black'><FaLinkedinIn  size={40}/></a>
              <a href='' className='pr-3 text-zinc-600 hover:text-black'><FaInstagram  size={40}/></a>
            </div>

            <div className='py-4'>

              <a href='#Resume'>
                <button  className='border-2 rounded-2xl w-28 h-10 bg-primary bg-third hireme text-white'>Hire me</button>  
              </a>  
            </div>
            
      </div>

      <img src={Coding} className='hidden md:block md:w-1/3'></img>
    </section>
  )
}

export default Hero