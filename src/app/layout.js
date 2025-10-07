// app/layout.js
import './globals.css'
import Navbar from './_Components/navbar/Navbar'
import Footer from './_Components/Footer/Footer'
import { Home, User, Settings } from "lucide-react"
import HeaderSocial from './_Components/header-social/HeaderSocial'
import About from './about/page'
import Projects from './projects/page'
 export const metadata = {
  title: "My Client Website - Home",
  description: "Professional company website showcasing services, contact details, and portfolio.",
  keywords: "company website, services, contact, portfolio",
  openGraph: {
    title: "My Client Website",
    description: "Professional company website with modern design.",
    url: "https://myclientsite.com",
    siteName: "My Client Website",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "My Client Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
 }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex overflow-x-hidden flex-col min-h-screen justify-between'>
        <HeaderSocial/>
    
        <main className="relative md:mt-7">
    <Navbar />
          {children}
          </main>
        <About />
        <Projects />
        <Footer />

        
      </body>
    </html>
  )
}
