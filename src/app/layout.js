// app/layout.js
import './globals.css'
import Navbar from './_Components/navbar/Navbar'
import Footer from './_Components/Footer/Footer'
import { Home, User, Settings } from "lucide-react"
import HeaderSocial from './_Components/header-social/HeaderSocial'
import About from './about/page'
import Projects from './projects/page'
export const metadata = {
  title: "SOGC Construction & Consultants | Building Egypt’s Future",
  description:
    "SOGC Construction & Consultants is a leading Egyptian company specializing in construction, engineering, and project consulting. We deliver high-quality, innovative, and sustainable solutions for clients across Egypt.",
  keywords: [
    "SOGC",
    "SOGC Construction",
    "SOGC Consultants",
    "Construction Company Egypt",
    "Engineering Consultants Egypt",
    "SOGC Projects",
    "Building Contractors Egypt",
    "SOGC Construction & Consultants",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: "SOGC Construction & Consultants | Building Egypt’s Future",
    description:
      "Explore SOGC Construction & Consultants — your trusted partner for construction and consulting services across Egypt.",
    url: "https://www.sogc-construction.com",
    siteName: "SOGC Construction & Consultants",
    images: [
      {
        url: "https://www.sogc-construction.com/assets/og-image.jpg", // replace with your real image path
        width: 1200,
        height: 630,
        alt: "SOGC Construction & Consultants",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOGC Construction & Consultants | Building Egypt’s Future",
    description:
      "Delivering excellence in construction, engineering, and consulting across Egypt.",
    images: ["https://www.sogc-construction.com/assets/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.sogc-construction.com",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex overflow-x-hidden flex-col min-h-screen justify-between'>
        <HeaderSocial/>
    
        <main className="relative md:mt-7">
    <Navbar />
          {children}
          </main>
        
        {/* <Footer /> */}

        
      </body>
    </html>
  )
}
