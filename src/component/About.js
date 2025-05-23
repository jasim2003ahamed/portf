import React, { useEffect } from 'react'
import Abot from '../assests/about.gif'
import AOS from 'aos'
import 'aos/dist/aos.css'




function About() {


    useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

    const config = {
      line1:'Hi, My name is Jasim Ahamed, I am Frontend Developer. I built beautiful Websites with React.js and Tailwind CSS.',
      line2:'I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, Css3 and many more.',
      line3:'In backend I know Node.js, Express.js, MongoDB, Mongoose.'
    }


  return (
    <section  className='flex flex-col md:flex-row px-8 py-16 md:justify-between  border-2 shadow-sm border-collapse w-full ' id='About'>
        <div data-aos='fade-left' className= 'flex justify-center py-5 w-1/2 md:w-1/3'>
            <img src={Abot} className='rounded-lg' ></img>
        </div>
        <div data-aos='fade-right' className='md:w-1/2 md:py-4' >
            <div className='flex flex-col '>
                <h1 className='text-4xl font-medium mb-10 '>About <span className="text-orange-500">Me</span></h1>
                <p className='text-zinc-600 font-semibold pb-5 '>{config.line1}</p>
                <p className='text-zinc-600  font-semibold pb-5 '>{config.line2}</p>
                <p className='text-zinc-600  font-semibold pb-5 '>{config.line3}</p>

                <button className='border-2 rounded-xl w-32 h-10 bg-primary text-white '>More about</button>
         </div>
        </div>

  
    </section>
  )
}

export default About