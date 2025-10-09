import React from "react";
import SocialMedia from "../social-media/social-media";
import { FaHandshake, FaPhone, FaMapMarker } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa6";
import Image from "next/image";




export default function HeaderSocial() {
  return (
    <header className="hidden  md:flex flex-col  ">
        {/* upper part of the header */}
      <div className="bg-black/90 py-0 md:py-4  ">
        <div className="container mx-auto flex justify-between items-center">
          <p className="font-bold text-white text-sm lg:text-lg flex items-center gap-2">
            {" "}
            <FaHandshake className=" text-white w-7 h-7" /> Hello, Welcome
            to sogc Construction website
          </p>
          {/* social media links */}
          <div className="md:space-x-4  justify-center align-baseline md:gap-3 flex ">
            <SocialMedia />
            <div className=" text-white px-4 py-2   md:block    border-l-2 ">
              <a className=" text-white px-4 py-2 rounded-md cursor-pointer hover:bg-white  hover:text-black transition-all duration-300  md:text-sm lg:text-lg   ">
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
        {/* lower part of the header */}
      <div className="container mx-auto grid grid-cols-3 xl:grid-cols-5 px-5  pt-5   justify-between ">
        {/* Logo */}
        <div className="col-span-1 xl:col-span-2 flex justify-start items-center   ">
         <Image
            src="/png 1.png"
            alt="logo"
            width={500}
            height={500}
            className=" w-15 h-15 ms-4 lg:w-20 lg:h-20 my-5 hover:-translate-y-1.5 duration-500 transition-all  "
          />
        </div>
        {/* contact details */}
        <div className="flex items-center justify-end gap-2 col-span-2 xl:col-span-3 ">
          {/* phone number */}
          <div className="flex items-center justify-end gap-1 lg:gap-2 group w-full hover:-translate-y-1 duration-500 transition-all   ">
            <div className=" border-black border-2 rounded-full p-4 group-hover:bg-black transition-all duration-300">
              <FaPhoneVolume className=" text-black  md:w-6 md:h-6 lg:w-10 lg:h-10   group-hover:text-white transition-all duration-300  " />
            </div>
            <div>
            <p className="relative inline-block font-bold text-black text-[0.788rem] lg:text-[0.930rem]  line-clamp-1  transition-all duration-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">info@sogc-construction.com</p>
<br />
  <p className="relative inline-block font-bold text-black text-[0.8rem] lg:text-[0.930rem]  line-clamp-1  transition-all duration-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
    +123 456 7890
  </p>
            </div>
          </div>

          {/*adress  */}
          <div className="flex items-center justify-end gap-1 lg:gap-2 w-full  group hover:-translate-y-1 duration-500 transition-all   ">
            <div className="flex items-center gap-2 ">
              <div className="border-black border-2 rounded-full p-4 group-hover:bg-black transition-all duration-300">
                <GrMapLocation className=" text-black w-6 h-6 lg:w-10 lg:h-10  group-hover:text-white transition-all duration-300" />
              </div>
              <div>
                
              <p
  className="relative inline-block font-bold text-black text-[0.8rem] lg:text-[0.960rem] transition-all duration-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                after:bg-black after:transition-all after:duration-300 group-hover:after:w-full"
>
  123 Main St, Anytown, USA
</p>


              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
