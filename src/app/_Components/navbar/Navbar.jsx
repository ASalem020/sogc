"use client"
import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
// import { FaBars } from 'react-icons/fa6'

export default function Navbar() {
  const path = usePathname()
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // check if mobile screen 
      let scrollPoint = 0;
      if(window.innerWidth < 768){
        scrollPoint = window.innerHeight * 0.050; 
      }else{
        scrollPoint = window.innerHeight * 0.357; 
      }
     


      // تحديد إذا كان لازم يبقى Sticky
      
      setIsSticky(window.scrollY > scrollPoint);

      // إظهار/إخفاء حسب الاتجاه
      if (isSticky && window.scrollY > lastScrollY) {
        setShow(false); // Scrolling down → hide
      } else {
        setShow(true); // Scrolling up → show
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  return (
    <header >
      {/* navbar for desktop */}
              <nav
      className={`absolute  text-white hidden md:block -top-11  left-0 right-0 bg-black z-50 transition-transform duration-500 p-2  container mx-auto  justify-between rounded-[150px] ${
        isSticky ? " fixed top-0 shadow-md !my-0 " : "  "
      } ${show ? "translate-y-3" : "-translate-y-full"}`}
    >

           <div className='container mx-auto flex justify-between items-center'>

            
            <div className="space-x-6  text-[1.1rem] flex items-center gap-2  ">
              <img
              src="/logo2 black.webp"
              alt="logo"
              width={50}
              height={30}
              className={` ${isSticky ? "relative block scale-130  " : "absolute scale-0"} transition-all  duration-300`}
            />
             
              <Link className={`${path == '/' ? 'bg-yellow-500 text-black p-2  rounded-4xl  hover:!text-white ' : 'text-white'} hover:text-yellow-500 transition-all duration-300`} href="/">Home</Link>
              <Link className={`${path.includes('/about') ? ' bg-yellow-500 text-black p-2  rounded-4xl   hover:!text-white' : 'text-white'} hover:text-yellow-500 transition-all duration-300`} href="/about">About</Link>
              <Link className={`${path.includes('/services') ? 'bg-yellow-500 text-black p-2  rounded-4xl hover:!text-white' : 'text-white'} hover:text-yellow-500 transition-all duration-300`} href="/services">Services</Link>
              <Link className={`${path.includes('/contact') ? 'bg-yellow-500 text-black p-2  rounded-4xl  hover:!text-white' : 'text-white'} hover:text-yellow-500 transition-all duration-300`} href="/contact">Contact</Link>
            </div>
            <div>
            {/* cart icon */}
            <div className='flex items-center  gap-5'>
              <FaShoppingCart className="w-8 h-8 hover:text-yellow-500 transition-all duration-300 cursor-pointer " />
              <button className='rounded-4xl text-[1.4rem] p-2  bg-yellow-500 text-black hover:bg-amber-50 transition-all duration-300 cursor-pointer '>Start New Project</button>
            </div>
            </div>
           </div>
          </nav>
          
          {/* navbar for mobile */}
          <nav className='block md:hidden'>
            <div className={`
              fixed bottom-0 left-0 right-0 bg-black z-50 transition-transform duration-500 mb-1 p-5   justify-between rounded-t-lg ${
                isSticky ? " fixed bottom-0 shadow-md !my-0 " : "  "
              } ${show ? "translate-y-3" : "translate-y-full"} ${
                isSticky ? "" : ""
              }`}>
              <div className='flex justify-between items-center'>
              <Link className={`${path == '/' ? 'bg-yellow-500 text-black p-2  rounded-4xl  hover:!text-white ' : 'text-white'} hover:text-yellow-500 transition-all duration-300`} href="/">Home</Link>
              <Link className={`${path.includes('/about') ? ' bg-yellow-500 text-black p-2  rounded-4xl   hover:!text-white' : 'text-white'} hover:text-yellow-500 transition-all duration-300`} href="/about">About</Link>
              <Link className={`${path.includes('/services') ? 'bg-yellow-500 text-black p-2  rounded-4xl hover:!text-white' : 'text-white'} hover:text-yellow-500 transition-all duration-300`} href="/services">Services</Link>
              <Link className={`${path.includes('/contact') ? 'bg-yellow-500 text-black p-2  rounded-4xl  hover:!text-white' : 'text-white'} hover:text-yellow-500 transition-all duration-300`} href="/contact">Contact</Link>

              </div>
              {/* <FaBars className="w-8 h-8 text-white hover:text-yellow-500 transition-all duration-300 cursor-pointer " /> */}
            </div>
          </nav>
        </header>
  )
}
