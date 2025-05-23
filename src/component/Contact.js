import React, { useEffect } from 'react'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { IoMdArrowDropupCircle } from "react-icons/io";


function Contact() {

  return (
         <section  className='py-20 md:py-6 bg-foot ' id='Contact' >

                    <div className='flex justify-center py-5'>
                      <p className='text-white text-4xl font-semibold'>P<span className='bg-secondary'>o</span>rtf<span className='bg-secondary'>o</span>li<span className='bg-secondary'>o</span></p>
                    </div>

                    <div className='flex justify-center py-5'>
                      <a href='#' className='pr-4 text-slate-300 hover:text-black'><FaWhatsapp size={40}/></a>
                      <a target='_blank' href='https://github.com/' className='pr-4 text-slate-300 hover:text-black'>< FiGithub  size={40}/></a>
                      <a target='_blank' href='https://www.linkedin.com/in/ahamed-z-918996260' className='pr-4 text-slate-300 hover:text-black'><FiLinkedin  size={40}/></a>
                      <a href='' className='pr-4 text-slate-300 hover:text-black'><FaInstagram  size={40}/></a>
                    </div>


                <div className='flex justify-center py-5 '>
                  <p className='text-slate-300'>&copy; 2025 All Rights Reserved. Made By <br /><p className='flex justify-center'>Jasim Ahamed. </p> </p> 
                </div>


                <div className='flex justify-center'>
                  <p className='text-slate-300'>Privacy Policy Terms and Conditions<br/><p className='flex justify-center'></p> </p> 
                </div>

                <div className='flex justify-end  '>

                  <a  href='#Header'>
                    <button className='pr-4 '><IoMdArrowDropupCircle size={40}/></button>
                  </a>
                </div>

        </section>
  )
}

export default Contact