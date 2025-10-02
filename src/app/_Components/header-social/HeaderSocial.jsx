import React from "react";
import SocialMedia from "../social-media/social-media";
import { FaHandshake, FaPhone, FaMapMarker } from "react-icons/fa";

export default function HeaderSocial() {
  return (
    <header className=" flex flex-col  ">
      <div className="bg-gray-900 py-4  ">
        <div className="container mx-auto flex justify-between items-center">
          <p className="font-bold text-white text-lg flex items-center gap-2">
            {" "}
            <FaHandshake className=" text-yellow-500 w-7 h-7" /> Hello, Welcome
            to Sogk Construction website
          </p>
          {/* social media links */}
          <div className="space-x-4 justify-content-center align-baseline gap-3 flex ">
            <SocialMedia />
            <div className=" text-white px-4 py-2    border-l-2 ">
              <a className=" text-white px-4 py-2 rounded-md hover:text-yellow-600  md:text-lg  ">
                Free Consultation
              </a>
            </div>
          </div>
        </div>
        {/* lower part of the header */}
      </div>
      <div className="container mx-auto flex  pt-5   justify-between ">
        {/* Logo */}

        <div>
          <img
            src="/globe.svg"
            alt="logo"
            width={100}
            height={100}
            className=""
          />
        </div>

        {/* contact details */}
        <div className="flex items-center gap-5">
          {/* phone number */}
          <div className="flex items-center gap-2 group ">
            <div className=" border-yellow-500 border-2 rounded-full p-4 group-hover:bg-yellow-500 transition-all duration-300">
              <FaPhone className=" text-yellow-500 w-12 h-12  group-hover:text-black transition-all duration-300  " />
            </div>
            <div>
              <p className="font-bold text-black text-lg ">sogk@gmail.com</p>
              <p className="font-bold text-black text-lg md:text-2xl cursor-pointer group-hover:text-yellow-500 transition-all duration-300">
                +123 456 7890
              </p>
            </div>
          </div>

          {/*adress  */}
          <div className="flex items-center gap-2 group ">
            <div className="flex items-center gap-2 ">
              <div className="border-yellow-500 border-2 rounded-full p-4 group-hover:bg-yellow-500 transition-all duration-300">
                <FaMapMarker className=" text-yellow-500 w-12 h-12 group-hover:text-black transition-all duration-300" />
              </div>
              <div>
                <p className="font-bold text-black text-lg">
                  123 Main St, Anytown, USA
                </p>
                <p className="font-bold text-black text-lg md:text-2xl cursor-pointer group-hover:text-yellow-500 transition-all duration-300">
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
