import React, { useEffect } from 'react'
import TodoImg from '../assests/todo.jpeg'
import Guess from '../assests/guess.jpg'
import EcomImg from '../assests/ecom.jpg'
import BlogImg from '../assests/blog.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'



function Projects() {

  useEffect(() => {
  AOS.init({duration: 1000})
}, [])

      // const config = {
      //   projects : [
      //     {
      //       image:BlogImg,
      //       description:'A Blog App using the MERN stack (MongoDB, Express.js, React.js, Node.js) is a full-stack web application where users can create, read, update, and delete blog posts.',
      //       link:'https://blog-app-frontend-nmtc.onrender.com/',
      //       code:'https://github.com/jasim2003ahamed/Blog-app'
      //     },
      //     {
      //       image:EcomImg,
      //       description:'A simple and responsive eCommerce web application built using React.js and Tailwind CSS. Users can browse products (like phones and laptops), add them to a shopping cart',
      //       link:'https://jasim2003ahamed.github.io/E-comm/',
      //       code:'https://github.com/jasim2003ahamed/E-comm'
      //     },
      //     {
      //       image:TodoImg,
      //       description:'Developed a responsive to-do list web application using ReactJS for front-end functionality and Tailwind CSS for styling',
      //       link:'https://jasim2003ahamed.github.io/todo-list/',
      //       code:'https://github.com/jasim2003ahamed/todo-list'
      //     },
      //     {
      //       image:Guess,
      //       description:'Guess the Number Game - React.js Random Number Generation: The app generates a random number between 1 and 10 when the game starts.User Input: Users can input their guesses.',
      //       link:'https://jasim2003ahamed.github.io/Reactjs/',
      //       code:'https://github.com/jasim2003ahamed/Reactjs'
      //     },
      //   ]
      // }


  return (
    <section className='py-16 border-b-2  border-collapse w-full ' id='Projects'>
        <div className='flex flex-col md:px-16 px-8 '>
            <h1 className='text-4xl font-medium  mb-10 '>Projects</h1>
            <p className='text-zinc-600 font-semibold'>These are some of my best Projects, I have built these with React and MERN, <a target='_blank' href='https://github.com/jasim2003ahamed' className='bg-four'>Check them Out.</a></p>
        </div>

        <div className='w-full px-5  py-12   '>
            <div  className='gap-7 flex flex-col md:flex-row  px-10'>

              {/* {config.projects.map((project) => (
                <div className='relative shadow-lg '>
                    <img src={project.image} className='h-[200px] w-[500px] rounded-md ' />
                  <div className='project-desc'>
                    <p className='text-center text-white py-5'>{project.description}</p>
                  </div>

                <div className='flex justify-center gap-5'>
                      <div className='py-5  flex justify-center'>
                        <a target='_blank' href={project.link} >
                          <button className='border-2 rounded-3xl w-24 h-10 bg-primary text-white '>View</button>
                        </a>
                      </div>
                      <div className='py-5 flex justify-center'>
                        <a target='_blank' href={project.code} >
                          <button className='border-2 rounded-3xl w-24 h-10 bg-primary text-white '>Code</button>
                        </a>
                      </div>
                  </div>

                </div>
              ))} */}

              <div  className='relative shadow-lg'data-aos='fade-left' >
                    <img src={BlogImg} className='h-[200px] w-[500px] rounded-md ' />
                  <div className='project-desc' >
                    <p className='text-center text-white py-5'>A Blog App using the MERN stack (MongoDB, Express.js, React.js, Node.js) is a full-stack web application where users can create, read, update, and delete blog posts.</p>
                  </div>

                <div className='flex justify-center gap-5'>
                      <div className='py-5  flex justify-center'>
                        <a target='_blank' href='https://blog-app-frontend-nmtc.onrender.com/'>
                          <button className='border-2 rounded-3xl w-24 h-10 bg-primary text-white '>View</button>
                        </a>
                      </div>
                      <div className='py-5 flex justify-center'>
                        <a target='_blank' href='https://github.com/jasim2003ahamed/Blog-app' >
                          <button className='border-2 rounded-3xl w-24 h-10 bg-primary text-white '>Code</button>
                        </a>
                      </div>
                  </div>

                </div>

                <div  className='relative shadow-lg'data-aos='fade-right' >
                    <img src={EcomImg} className='h-[200px] w-[500px] rounded-md ' />
                  <div className='project-desc' >
                    <p className='text-center text-white py-5'>A simple and responsive eCommerce web application built using React.js and Tailwind CSS. Users can browse products (like phones and laptops), add them to a shopping cart.</p>
                  </div>

                <div className='flex justify-center gap-5'>
                      <div className='py-5  flex justify-center'>
                        <a target='_blank' href='https://jasim2003ahamed.github.io/E-comm/'>
                          <button className='border-2 rounded-3xl w-24 h-10 bg-primary text-white '>View</button>
                        </a>
                      </div>
                      <div className='py-5 flex justify-center'>
                        <a target='_blank' href='https://github.com/jasim2003ahamed/E-comm'>
                          <button className='border-2 rounded-3xl w-24 h-10 bg-primary text-white '>Code</button>
                        </a>
                      </div>
                  </div>

                </div>

                <div  className='relative shadow-lg'data-aos='fade-left' >
                    <img src={TodoImg} className='h-[200px] w-[500px] rounded-md ' />
                  <div className='project-desc' >
                    <p className='text-center text-white py-5'>Developed a responsive to-do list web application using ReactJS for front-end functionality and Tailwind CSS for styling.</p>
                  </div>

                <div className='flex justify-center gap-5'>
                      <div className='py-5  flex justify-center'>
                        <a target='_blank' href='https://jasim2003ahamed.github.io/todo-list/' >
                          <button className='border-2 rounded-3xl w-24 h-10 bg-primary text-white '>View</button>
                        </a>
                      </div>
                      <div className='py-5 flex justify-center'>
                        <a target='_blank' href='https://github.com/jasim2003ahamed/todo-list' >
                          <button className='border-2 rounded-3xl w-24 h-10 bg-primary text-white '>Code</button>
                        </a>
                      </div>
                  </div>

                </div>

                <div  className='relative shadow-lg'data-aos='fade-right' >
                    <img src={Guess} className='h-[200px] w-[500px] rounded-md ' />
                  <div className='project-desc' >
                    <p className='text-center text-white py-5'>Guess the Number Game - React.js Random Number Generation: The app generates a random number between 1 and 10 when the game starts.User Input: Users can input their guesses.</p>
                  </div>

                <div className='flex justify-center gap-5'>
                      <div className='py-5  flex justify-center'>
                        <a target='_blank' href='https://jasim2003ahamed.github.io/Reactjs/'>
                          <button className='border-2 rounded-3xl w-24 h-10 bg-primary text-white '>View</button>
                        </a>
                      </div>
                      <div className='py-5 flex justify-center'>
                        <a target='_blank' href='https://github.com/jasim2003ahamed/Reactjs'>
                          <button className='border-2 rounded-3xl w-24 h-10 bg-primary text-white '>Code</button>
                        </a>
                      </div>
                  </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default Projects