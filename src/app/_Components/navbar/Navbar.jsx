"use client"
import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const path = usePathname()
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = window.innerHeight * 0.30; // 30% من الشاشة

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
              <nav
      className={`absolute my-15 text-white   left-0 right-0 bg-black z-50 transition-transform duration-500 p-4 container mx-auto  justify-between rounded-[150px] ${
        isSticky ? " fixed top-0 shadow-md !my-0 " : "  "
      } ${show ? "translate-y-3" : "-translate-y-full"} ${
        isSticky ? "" : ""
      }`}
    >

           <div className='container mx-auto flex justify-between'>

            
            <div className="space-x-6 text-2xl py-3">
              <Link className={`${path == '/' ? 'bg-yellow-500 text-black p-4 rounded-4xl  hover:!text-white ' : 'text-white'} hover:text-yellow-500 transition-all duration-300`} href="/">Home</Link>
              <Link className={`${path.includes('/about') ? ' bg-yellow-500 text-black p-4 rounded-4xl   hover:!text-white' : 'text-white'} hover:text-yellow-500 transition-all duration-300`} href="/about">About</Link>
              <Link className={`${path.includes('/services') ? 'bg-yellow-500 text-black p-4 rounded-4xl hover:!text-white' : 'text-white'} hover:text-yellow-500 transition-all duration-300`} href="/services">Services</Link>
              <Link className={`${path.includes('/contact') ? 'bg-yellow-500 text-black p-4 rounded-4xl  hover:!text-white' : 'text-white'} hover:text-yellow-500 transition-all duration-300`} href="/contact">Contact</Link>
            </div>
            <div>
            {/* cart icon */}
            <div className='flex items-center  gap-5'>
              <FaShoppingCart className="w-8 h-8" />
              <button className='rounded-4xl text-2xl p-4 bg-yellow-500 text-black hover:bg-amber-50 transition-all duration-300 cursor-pointer '>Start New Project</button>
            </div>
            </div>
           </div>
          </nav>
        </header>
  )
}
