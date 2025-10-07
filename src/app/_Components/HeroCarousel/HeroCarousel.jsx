"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
  import Image from "next/image"
  export default function HeroCarousel() {
    const heroCarousel = [
      {
        id: 1,
        title: "Welcome to Our Platform",
        description: "Discover modern solutions that make your workflow easier and more effective.",
        src: "/herocar1.jpg",
        alt: "hero",
      },
      {
        id: 2,
        title: "Build With Confidence",
        description: "We help you create scalable and reliable solutions with cutting-edge technologies.",
        src: "/herocar2.jpg",
        alt: "hero",
      },
      {
        id: 3,
        title: "Join Our Journey",
        description: "Be part of a community that values innovation, collaboration, and growth.",
        src: "/herocar3.webp",
        alt: "hero",
      },
    ]
    return (
      <div className="w-full  ">
        <Carousel 
            opts={{
                autoplay:true,
                loop:true
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
    
         className=" overflow-hidden min-h-[50vh] md:min-h-screen  ">
          <CarouselContent>
            {/* First Slide */}
            {heroCarousel.map((item)=>(
            <CarouselItem key={item.id}>
              <div className="relative md:min-h-screen min-h-[50vh]  bg-cover bg-center">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
                  <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                  <p className="max-w-lg text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            
            </CarouselItem>
            ))}
            
          </CarouselContent>
  
          {/* Navigation Buttons */}
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    )
  }
  