"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
import ProjectCard from '../ProjectCard/ProjectCard'
export default function ProjectsCarousel() {
  return (
    // 33% of the carousel width.
    <div className='w-full '>

<Carousel 
      opts={{
        autoplay:true,
        
        loop:true
        
    }}
    plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
          stopOnFocus: true,
          stopOnTouch: true,
          stopOnScroll: true,
          stopOnClick: true,
          stopOnKeyPress: true,
          
        }),
      ]}
   
>
  <CarouselContent>
    <CarouselItem className="md:basis-1/4 basis-1/2 group">
    <ProjectCard />
    </CarouselItem>
    <CarouselItem className="md:basis-1/4 basis-1/2 group"><ProjectCard /></CarouselItem>
      <CarouselItem className="md:basis-1/4 basis-1/2 group"><ProjectCard /></CarouselItem>
    <CarouselItem className="md:basis-1/4 basis-1/2 group"><ProjectCard /></CarouselItem>
    <CarouselItem className="md:basis-1/4 basis-1/2 group"><ProjectCard /></CarouselItem>
    <CarouselItem className="md:basis-1/4 basis-1/2 group"><ProjectCard /></CarouselItem>
    <CarouselItem className="md:basis-1/4 basis-1/2 group"><ProjectCard /></CarouselItem>
    <CarouselItem className="md:basis-1/4 basis-1/2 group"><ProjectCard /></CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
</Carousel>
    </div>
  )
}
