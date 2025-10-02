import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
  export default function HeroCarousel() {
    return (
      <div className="w-full  ">
        <Carousel 
            opts={{
                autoplay:true,
                loop:true
            }}
    
         className="rounded-xl overflow-hidden ">
          <CarouselContent>
            {/* First Slide */}
            <CarouselItem>
              <div className="relative min-h-screen  bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
                  <h2 className="text-3xl font-bold mb-4">Welcome to Our Platform</h2>
                  <p className="max-w-lg text-lg">
                    Discover modern solutions that make your workflow easier and more effective.
                  </p>
                </div>
              </div>
            </CarouselItem>
  
            {/* Second Slide */}
            <CarouselItem>
              <div className="relative min-h-screen  bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-center text-center text-white p-6">
                  <h2 className="text-3xl font-bold mb-4">Build With Confidence</h2>
                  <p className="max-w-lg text-lg">
                    We help you create scalable and reliable solutions with cutting-edge technologies.
                  </p>
                </div>
              </div>
            </CarouselItem>
  
            {/* Third Slide */}
            <CarouselItem>
              <div className="relative min-h-screen  bg-cover bg-center">
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-6">
                  <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
                  <p className="max-w-lg text-lg">
                    Be part of a community that values innovation, collaboration, and growth.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
  
          {/* Navigation Buttons */}
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    )
  }
  