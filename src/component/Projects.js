import React from 'react'
import TodoImg from '../assests/todo.jpeg'
import Guess from '../assests/guess.jpg'
import EcomImg from '../assests/ecom.jpg'




function Projects() {

      const config = {
        projects : [
          {
            image:TodoImg,
            description:'Hello',
            link:''
          },
          {
            image:Guess,
            description:'Guess the Number Game - React.js Random Number Generation: The app generates a random number between 1 and 10 when the game starts.User Input: Users can input their guesses.',
            link:'https://jasim2003ahamed.github.io/Reactjs/'
          },
          {
            image:EcomImg,
            description:'Hello',
            link:''
          },
        ]
      }



  return (
    <section className='py-16 border-b-2  border-collapse w-full ' id='Projects'>
        <div className='flex flex-col md:px-16 px-8 '>
            <h1 className='text-4xl font-medium  mb-10 '>Projects</h1>
            <p className='text-zinc-600 font-semibold'>These are some of my best Projects, I have built these with React and MERN, <span className='bg-four'>Check them Out.</span></p>
        </div>

        <div className='w-full px-5 py-12   '>
            <div className='gap-7 flex flex-col md:flex-row  px-10'>

              {config.projects.map((project) => (
                <div className='relative shadow-lg'>
                    <img src={project.image} className='h-[200px] w-[500px] rounded-md ' />
                  <div className='project-desc'>
                    <p className='text-center text-white py-5'>{project.description}</p>
                  </div>

                  <div className='py-5 flex justify-center'>
                    <a target='_blank' href={project.link}>
                      <button className='border-2 rounded-3xl w-24 h-10 bg-primary text-white '>View</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Projects