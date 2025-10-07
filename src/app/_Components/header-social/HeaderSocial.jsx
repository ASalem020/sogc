import React from "react";
import SocialMedia from "../social-media/social-media";
import { FaHandshake, FaPhone, FaMapMarker } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa6";




export default function HeaderSocial() {
  return (
    <header className="hidden  md:flex flex-col  ">
        {/* upper part of the header */}
      <div className="bg-black/90 py-0 md:py-4  ">
        <div className="container mx-auto flex justify-between items-center">
          <p className="font-bold text-white text-sm lg:text-lg flex items-center gap-2">
            {" "}
            <FaHandshake className=" text-yellow-500 w-7 h-7" /> Hello, Welcome
            to sogc Construction website
          </p>
          {/* social media links */}
          <div className="md:space-x-4  justify-center align-baseline md:gap-3 flex ">
            <SocialMedia />
            <div className=" text-white px-4 py-2   md:block    border-l-2 ">
              <a className=" text-white px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-500  hover:text-black transition-all duration-300  md:text-sm lg:text-lg   ">
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
        {/* lower part of the header */}
      <div className="container mx-auto grid grid-cols-3 px-5  pt-5   justify-between ">

        {/* Logo */}
        <div className="col-span-1 flex justify-start items-center">
          <img
            src="/logo2.webp"
            alt="logo"
            width={200}
            height={100}
            className=""
          />
        </div>




        {/* contact details */}
        <div className="flex items-center justify-end gap-5 col-span-2">
          {/* phone number */}
          <div className="flex items-center gap-2 group ">
            <div className=" border-yellow-500 border-2 rounded-full p-4 group-hover:bg-yellow-500 transition-all duration-300">
              <FaPhoneVolume className=" text-yellow-500 t  w-10 h-10 lg:w-12 lg:h-12  group-hover:text-black transition-all duration-300  " />
            </div>
            <div>
              <p className="font-bold text-black text-lg ">sogc@gmail.com</p>
              <p className="font-bold text-black text-lg lg:text-2xl cursor-pointer group-hover:text-yellow-500 transition-all duration-300">
                +123 456 7890
              </p>
            </div>
          </div>

          {/*adress  */}
          <div className="flex items-center gap-2 group ">
            <div className="flex items-center gap-2 ">
              <div className="border-yellow-500 border-2 rounded-full p-4 group-hover:bg-yellow-500 transition-all duration-300">
                <GrMapLocation className=" text-yellow-500 w-10 h-10 lg:w-12 lg:h-12 group-hover:text-black transition-all duration-300" />
              </div>
              <div>
                
                <p className="font-bold text-black text-lg lg:text-2xl cursor-pointer group-hover:text-yellow-500 transition-all duration-300">
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
