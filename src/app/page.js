// app/page.js
import {
 
} from "@/components/ui/carousel"
import HeroCarousel from "./_Components/HeroCarousel/HeroCarousel"
import About from "./about/page"
import Projects from "./projects/page"
import Contact from "./contact/page"
import Services from "./services/page"

export default function HomePage() {
  return (
    <section className="line-clamp-1">
    <HeroCarousel />
    <About />
    <Services />
    <Projects />
    <Contact />
    </section>
  
)
}
