import React from 'react'
import ProjectsCarousel from '../_Components/ProjectsCarousel/ProjectsCarousel'

export default function Projects() {
  return (
    <section className=' pt-10 pb-4   bg-gray-100'>
        <div className='md:mx-10 md:py-20 md:px-10 flex flex-col gap-12' >
      <div className='relative flex flex-col'>
  
  <h1 className='md:text-4xl text-center md:text-left text-lg font-bold md:px-10 md:p-0 p-10 pb-0 
  before:content-[" "] before:absolute md:before:-left-15 before:left-3  md:before:top-5 before:top-[14px]  md:before:w-20 before:w-0 md:before:h-1 before:bg-black 
  after:content-["PROJECTS"] after:italic after:absolute md:after:left-6 after:left-1/2  after:-translate-x-1/2 md:after:-translate-x-0  md:after:-top-14 after:-top-8 md:after:text-[5rem] after:text-[3rem] after:text-black/15     '>Latest Projects
  </h1>
  <p className='text-lg text-center md:text-left text-black  px-10'>
  Check out our latest construction projects around the world

  </p>


</div>


{/* carousel */}
    <ProjectsCarousel/>

        </div>
    </section>
  )
}
