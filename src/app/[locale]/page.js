"use client"
// app/[locale]/page.js
import {
 
} from "@/components/ui/carousel"
import HeroCarousel from "../_Components/HeroCarousel/HeroCarousel"
import About from "./about/page"
import Projects from "./projects/page"
import Contact from "./contact/page"
import Services from "./services/page"
import StatusBar from "../_Components/StatusBar/StatusBar"

export default function HomePage() {
  return (
    <section className="">
    <HeroCarousel />
    <About />
    <StatusBar />
    <Services />
    <Projects />
    <Contact />
    </section>
  
)
}

