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
  const projects = [
    {
      id: 1,
      title: "Villa Park",
      description: "A luxurious villa park in the heart of Dubai",
      category: "Category 1",
      likes: 100,
      views: 1000,
      image:'1.jpg'
    },  
    {
      id: 2,
      title: "Al Khobar",
      description: "A luxurious villa park in the heart of Dubai",
      category: "Category 2",
      likes: 200,
      views: 2000,
      image:'2.jpg'
    },
    {
      id: 3,
      title: "Dubai",
      description: "A luxurious villa park in the heart of Dubai",
      category: "Category 3",
      likes: 300,
      views: 3000,
      image:'3.jpeg'
    },
    {
      id: 4,
      title: "Riyadh",
      description: "A luxurious villa park in the heart of Dubai",
      category: "Category 4",
      likes: 400,
      views: 4000,
      image:'4.webp'
    },
    {
      id: 5,
      title: "Jeddah",
      description: "A luxurious villa park in the heart of Dubai",
      category: "Category 5",
      likes: 500,
      views: 5000,
      image:'5.jpg'
    },
    {
      id: 6,
      title: "Jeddah",
      description: "A luxurious villa park in the heart of Dubai",
      category: "Category 6",
      likes: 600,
      views: 6000,
      image:'6.jpg'
    },
  ]
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
    {projects.map((project)=>(
      <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1/2  "><ProjectCard key={project.id} project={project} /></CarouselItem>
    ))}
    
  </CarouselContent>
  <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
</Carousel>
    </div>
  )
}
