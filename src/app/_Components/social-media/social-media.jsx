"use client"

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function SocialMedia() {
  const socials = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: FaFacebookF,
      color: "hover:text-white",
      bg: "hover:!bg-blue-500",  
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: FaInstagram,
      color: "hover:text-white",
      bg: "hover:!bg-gradient-to-r from-purple-800 via-pink-500 via-red-500 to-yellow-700",  
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: FaLinkedinIn,
      color: "hover:text-white",
      bg: "hover:!bg-blue-700",  
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: FaTwitter,
      color: "hover:text-white",
      bg: " hover:!bg-sky-500",  
    },
  ]

  return (
    <div className={`flex gap-2 md:gap-6 justify-center items-center  `}>
      {socials.map((social) => {
        const Icon = social.icon
        return (
            
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`transition-all hover:scale-110 duration-300  rounded-2xl p-2 text-gray-500 ${social.color} ${social.bg} `}
          >
            <Icon className="w-6 h-6" />
          </a>
        )
      })}
    </div>
  )
}
