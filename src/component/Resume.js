import React, { useEffect } from 'react'
import resume from '../assests/resume.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'



function Resume() {

    useEffect(() => {
    AOS.init({duration: 1000})
    }, [])


      const config = {
        link:'https://drive.google.com/file/d/1qqwrsTL2Cm8bF1nOuhVRf9PAr8eMHtpx/view?usp=drivesdk'
      }


  return ( 
    <section data-aos='fade-right' className='flex flex-col md:flex-row px-8 py-16 md:justify-between justify-center border-2  shadow-sm  w-full' id='Resume'>
          <div className='py-3 w-1/2 md:w-1/3 flex justify-end '>
              
              <img src={resume}  className='flex w-[300px]' ></img>
          </div>
          <div className=' flex  md:py-14'>
              <div className='flex flex-col '>
                  <h1 className='hidden md:block text-4xl font-medium mb-10'>Resume</h1>
                   <p className='bg-four font-semibold pb-5'>You can view my resume</p>

                   <a target='_blank' href={config.link} >
                     <button className='border-2 rounded-full w-28 h-10 bg-primary text-white '>Download</button>
                   </a>

              </div>
          </div>

          <div className='md:flex flex-col justify-center '>
            <div className='py-5'>
                <p className='font-thin tracking-wide'>Call</p> 
                <p className='font-semibold'>+91 76392 94694</p>
            </div>

            <div className='py-5 '>
                <p className='font-thin tracking-wide'>Email</p> 
                <a className='font-semibold' >jasim2003ahamed@gmail.com</a>
            </div>

          </div>

          
</section>
  )
}

export default Resume