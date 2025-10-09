import Image from "next/image";
import React from "react";
import FAQAccordion from "../_Components/FAQAccordion/FAQAccordion";

export default function About() {
  const services = [
    {
      id: 1,
      title: "Design & Building",
      description: "Services currently available at the Department’s Development HUB have been enhanced.",
      beforeIcon: "before:content-['🏢']",
      color: "text-black",
      after:"after:content-['01']"
    },
    {
      id: 2,
      title: "Tiling Painting",
      description: "Will allow the applicant to access reviewer comments and objections online.",
      beforeIcon: "before:content-['🏢']",
      color: "text-black",
      after:"after:content-['02']"
    },
    {
      id: 3,
      title: "Remodeling",
      description: "Applicants and Owners can review plans and objections alongside their plan examiner virtually.",
      beforeIcon: "before:content-['🏢']",
      color: "text-black",
      after:"after:content-['03']"
    },
    {
      id: 4,
      title: "Safe Construction",
      description: "Applicants and Owners can review plans and objections alongside their plan examiner virtually.",
      beforeIcon: "before:content-['🏢']",
      color: "text-black",
      after:"after:content-['04']"
    },
  ]
  
  return (
    <div className="bg-gray-100">

    <div className="my-10  md:mt-30 md:mx-10 grid grid-cols-1  md:grid-cols-3 md:min-h-screen min-h-[50vh]">
      {/* about content */}
      <div className="md:py-20 md:px-10 py-10 px-5 md:col-span-2">
        {/* title */}
        <div className="relative flex flex-col md:gap-5 gap-2">
          <h1
            className='md:text-4xl text-lg text-center md:text-left font-bold  
        before:content-[" "] before:absolute before:-left-15  px-10 before:top-5  md:before:w-20 before:w-0 before:h-1 before:bg-black after:content-["BUILDING"] after:absolute md:after:left-55 after:left-1/2  after:-translate-x-1/2 md:after:-top-16  after:-top-18 md:after:text-[5rem] after:text-[3rem] after:text-black/25  after:italic   '
          >
            Building it better in{" "}
            <span className="text-black "> Concrete</span>
          </h1>
          <p className="text-lg text-center md:text-left">
            The Department of Buildings promotes the safety building codes that
            are designed to protect the lives and property of all New Yorkers.{" "}
          </p>
        </div>
        {/* services  */}
        <div className=" md:mt-10 mt-20 text-center md:text-left md:grid md:grid-cols-2 flex flex-col gap-20 md:gap-0 md:gap-y-10 ">
          {services.map((service) => (
          <div key={service.id} className="flex flex-col md:gap-5 gap-2 md:my-3 ">
            <div className="flex flex-col md:gap-5 gap-2 mt-2 relative ">
              <h3
                className={`text-xl font-bold ${service.beforeIcon} before:absolute md:before:left-5  px-10  before:left-1/2  before:-translate-x-1/2  before:-translate-y-1/2 before:-top-3 md:before:top-3
              ${service.after} after:absolute md:after:left-12  md:after:-top-7 after:text-[5rem] md:after:text-[6rem] after:text-black/25
              after:left-1/2  after:-translate-x-1/2  after:-translate-y-1/2 after:-top-12 
              `}
              >
                {service.title}
              </h3>
              <p className="text-lg font-light text-gray-500">
                {service.description}
              </p>
            </div>
          </div>
          ))}
         
          
        </div>
      </div>
      {/* logo */}
      <div className="p-20 md:p-0 flex justify-center items-center md:col-span-1">
        <Image  src="/png 1.png" alt="about" width={1000} height={1000} className="w-full h-full md:w-[70%] md:h-[70%]" />
      </div>

    </div>
    <FAQAccordion />  
    
    </div>

  );
}
