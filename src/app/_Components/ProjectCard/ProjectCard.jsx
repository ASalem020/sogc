import Image from 'next/image'
import React from 'react'

export default function ProjectCard({project}) {
  return (
    <div className=" group ">
        <div className="h-full  bg-white relative border-2 border-gray-200 border-opacity-60   rounded-lg overflow-hidden">
            <div className='h-full relative w-full group-hover:!bg-black/50 transition-all duration-500  '>
             <div className='absolute top-0 left-0 w-full h-full group-hover:bg-black/30 z-10'></div>
            <Image width={1000} height={1000} className="h-[12rem]  md:h-[15rem] xl:h-[18rem]  group-hover:scale-110 transition-all duration-500    object-cover object-center" src={`/${project.image}`} alt="blog" />
            </div>
            <div className=" text-white group-hover:rounded-lg group-hover:bg-black/25 z-50 absolute top-0 scale-0 flex flex-col justify-center  items-center bottom-0 left-0 right-0 group-hover:scale-90 transition-all duration-1500">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{project.category}</h2> */}
                <h1 className="title-font md:text-2xl text-xl font-bold bg-yellow-500 text-black rounded-lg p-2 mb-3">{project.title}</h1>
                <p className="leading-relaxed mb-3 text-center md:text-2xl text-lg text-white">{project.description}</p>
                {/* <div className="flex items-center flex-wrap">
                    
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>{project.likes}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>{project.views}
                    </span>
                </div> */}
            </div>
        </div>
    </div>
  )
}
