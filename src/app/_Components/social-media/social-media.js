"use client"

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function SocialMedia() {
  const socials = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: FaFacebook,
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: FaInstagram,
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: FaLinkedin,
      color: "hover:text-blue-700",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: FaTwitter,
      color: "hover:text-sky-500",
    },
  ]

  return (
    <div className={`flex gap-6 justify-center items-center  `}>
      {socials.map((social) => {
        const Icon = social.icon
        return (
            
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`transition-colors duration-300 hover:bg-white rounded-2xl p-2 text-gray-500 ${social.color} `}
          >
            <Icon className="w-6 h-6" />
          </a>
        )
      })}
    </div>
  )
}
