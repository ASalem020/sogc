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
  import { useLocale, useTranslations } from "next-intl"
  
  export default function HeroCarousel() {
    const locale = useLocale();
    const t = useTranslations('hero');
    const heroCarousel = [
      {
        id: 1,
        src: "/herocar1.jpg",
        alt: "hero",
      },
      {
        id: 2,
        src: "/herocar2.jpg",
        alt: "hero",
      },
      {
        id: 3,
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
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('title')}</h2>
                  <p className="max-w-lg text-lg md:text-xl">
                    {t('subtitle')}
                  </p>
                  <button className="mt-6 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
                    {t('cta')}
                  </button>
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
  