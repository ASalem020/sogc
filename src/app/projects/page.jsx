import React from 'react'
import ProjectsCarousel from '../_Components/ProjectsCarousel/ProjectsCarousel'

export default function Projects() {
  return (
    <section className=' pt-10 pb-4  md:min-h-screen bg-yellow-500'>
        <div className='md:mx-10 md:py-20 md:px-10' >

      <div className='relative flex flex-col md:gap-5 '>
  
  <h1 className='md:text-4xl text-center md:text-left text-lg font-bold  
  before:content-[" "] before:absolute md:before:-left-15 before:left-3 px-10 md:before:top-5 before:top-[14px]  md:before:w-20 before:w-0 md:before:h-1 before:bg-black after:content-["PROJECTS"] after:italic after:absolute after:left-30 md:after:-top-13 after:-top-8 md:after:text-[5rem] after:text-[2rem] after:text-black/25     '>Latest Projects
  </h1>
  <p className='text-lg text-center md:text-left text-white'>
  Check out our latest construction projects around the world

  </p>


</div>
{/* carousel */}

    <ProjectsCarousel/>

        </div>
    </section>
  )
}
