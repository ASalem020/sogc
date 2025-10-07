"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export default function ProjectCard({project}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className="group"
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
        <div className="h-full bg-white relative border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div className='h-full relative w-full group-hover:!bg-black/50 transition-all duration-500'>
             <div className={`absolute top-0 left-0 w-full h-full z-10 transition-all duration-500 ${isActive ? 'bg-black/30' : 'group-hover:bg-black/30'}`}></div>
            <Image width={1000} height={1000} className={`h-[12rem] md:h-[15rem] xl:h-[18rem] transition-all duration-500 object-cover object-center ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} src={`/${project.image}`} alt="blog" />
            </div>
            <div className={`text-white z-50 absolute top-0 flex flex-col justify-center items-center bottom-0 left-0 right-0 transition-all duration-500 ${isActive ? 'scale-90 rounded-lg bg-black/25' : 'scale-0 group-hover:scale-90 group-hover:rounded-lg group-hover:bg-black/25'}`}>
                <h1 className="title-font md:text-2xl text-xl font-bold bg-yellow-500 text-black rounded-lg p-2 mb-3">{project.title}</h1>
                <p className="leading-relaxed mb-3 text-center md:text-2xl text-lg text-white">{project.description}</p>
            </div>
        </div>
    </div>
  )
}
