import React from "react";

export default function About() {
  return (
    <div className="my-10 md:mt-30 md:mx-10 grid grid-cols-1  md:grid-cols-3 md:min-h-screen min-h-[50vh]">
      <div className="md:py-20 md:px-10 py-10 px-5 md:col-span-2">
        <div className="relative flex flex-col md:gap-5 gap-2">
          <h1
            className='md:text-4xl text-lg text-center md:text-left font-bold  
        before:content-[" "] before:absolute before:-left-15  px-10 before:top-5  md:before:w-20 before:w-0 before:h-1 before:bg-yellow-500 after:content-["BUILDING"] after:absolute md:after:left-6 after:left-5 md:after:-top-13 after:-top-18 md:after:text-[5rem] after:text-[3rem] after:text-yellow-300/25  after:italic   '
          >
            Building it better in{" "}
            <span className="text-yellow-500 "> Concrete</span>
          </h1>
          <p className="text-lg text-center md:text-left">
            The Department of Buildings promotes the safety building codes that
            are designed to protect the lives and property of all New Yorkers.{" "}
          </p>
        </div>
        {/* services  */}
        <div className=" md:mt-10 mt-20 text-center md:text-left md:grid md:grid-cols-2 flex flex-col gap-20 md:gap-0 md:gap-y-10 ">
          <div className="flex flex-col md:gap-5 gap-2">
            <div className="flex flex-col md:gap-5 gap-2 mt-2 relative ">
              <h3
                className='text-xl font-bold before:content-["✨"] before:absolute md:before:left-5  px-10  before:left-1/2  before:-translate-x-1/2  before:-translate-y-1/2 before:-top-3 md:before:top-3
              after:content-["01"] after:absolute md:after:left-12  md:after:-top-4 after:text-[5rem] after:text-yellow-300/25
              after:left-1/2  after:-translate-x-1/2  after:-translate-y-1/2 after:-top-12 
              '
              >
                Design & Building
              </h3>
              <p className="text-lg font-light text-gray-500">
                Services currently available at the Department’s Development HUB
                have been enhanced.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:gap-5 gap-2">
            <div className="flex flex-col md:gap-5 gap-2 mt-2 relative ">
              <h3
                className='text-xl font-bold before:content-["✨"] before:absolute md:before:left-5  px-10  before:left-1/2  before:-translate-x-1/2  before:-translate-y-1/2 before:-top-3 md:before:top-3
              after:content-["02"] after:absolute md:after:left-12  md:after:-top-4 after:text-[5rem] after:text-yellow-300/25
              after:left-1/2  after:-translate-x-1/2  after:-translate-y-1/2 after:-top-12 
              '
              >
                Tiling Painting
              </h3>
              <p className="text-lg font-light text-gray-500">
                Will allow the applicant to access reviewer comments and
                objections online.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:gap-5 gap-2">
            <div className="flex flex-col gap-5 relative ">
              <h3
                className='text-xl font-bold before:content-["✨"] before:absolute md:before:left-5  px-10  before:left-1/2  before:-translate-x-1/2  before:-translate-y-1/2 before:-top-3 md:before:top-3
              after:content-["03"] after:absolute md:after:left-12  md:after:-top-4 after:text-[5rem] after:text-yellow-300/25
              after:left-1/2  after:-translate-x-1/2  after:-translate-y-1/2 after:-top-12 
              '
              >
                Remodeling
              </h3>
              <p className="text-lg font-light text-gray-500">
                Applicants and Owners can review plans and objections alongside
                their plan examiner virtually.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:gap-5 gap-2">
            <div className="flex flex-col gap-5 relative  ">
              <h3
                className='text-xl font-bold before:content-["✨"] before:absolute  md:before:left-5 px-10  before:left-1/2  before:-translate-x-1/2  before:-translate-y-1/2 before:-top-3 md:before:top-3
              after:content-["04"] after:absolute md:after:left-12  md:after:-top-4 after:text-[5rem] after:text-yellow-300/25
              after:left-1/2  after:-translate-x-1/2  after:-translate-y-1/2 after:-top-12 
              
              '
              >
                Safe Construction
              </h3>
              <p className="md:text-lg text-sm font-light text-gray-500">
                Applicants and Owners can review plans and objections alongside
                their plan examiner virtually.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-20 md:p-0 flex justify-center items-center md:col-span-1">
        <img src="/logo2.webp" alt="about" />
      </div>
    </div>
  );
}
