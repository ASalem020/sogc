import { Skeleton } from "@/components/ui/skeleton";

// Hero Carousel Skeleton
export function HeroCarouselSkeleton() {
  return (
    <div className="w-full min-h-[50vh] md:min-h-screen relative overflow-hidden bg-gray-200">
      <Skeleton className="w-full h-full" />
    </div>
  );
}

// About Section Skeleton
export function AboutSkeleton() {
  return (
    <div className="bg-gray-100 overflow-hidden relative py-10 md:mx-10">
      <div className="py-10 md:mx-10 flex flex-col md:grid md:grid-cols-3 md:min-h-screen min-h-[50vh] z-10 relative">
        {/* Title Section */}
        <div className="w-full col-span-3 flex flex-col px-3 gap-2 items-center justify-center mb-8">
          <Skeleton className="h-10 w-64 mb-4" />
          <Skeleton className="h-6 w-96 mb-2" />
          <Skeleton className="h-6 w-80" />
        </div>

        {/* Accordion Section */}
        <div className="md:px-10 col-span-1 px-5 md:col-span-2 md:flex md:flex-col md:justify-center">
          <div className="flex flex-col gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="px-5 md:py-0 md:p-0 flex justify-center items-start md:items-center col-span-1 md:col-span-1">
          <Skeleton className="w-full max-h-[400px] md:max-h-[500px] h-[200px] md:h-[400px] rounded-lg" />
        </div>
      </div>
    </div>
  );
}

// Services Section Skeleton
export function ServicesSkeleton() {
  return (
    <div className="mt-10 md:mt-30 md:mx-10 md:min-h-screen min-h-[50vh]">
      <div className="md:py-10 md:px-10 px-5">
        {/* Header */}
        <div className="flex flex-col md:gap-5 gap-2 items-center mb-10">
          <Skeleton className="h-10 w-64 mb-4" />
          <Skeleton className="h-6 w-96 mb-4" />
          <Skeleton className="h-12 w-48 rounded-full" />
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col gap-5 my-5 relative">
              <Skeleton className="rounded-lg h-[12rem] md:h-[15rem] lg:h-[18rem] w-full" />
              <div className="absolute shadow-lg md:p-5 lg:min-h-[145px] flex flex-col gap-2 items-center bg-white/80 p-1.5 rounded-lg left-5 right-5 lg:top-45 top-35">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Projects Section Skeleton
export function ProjectsSkeleton() {
  return (
    <section className="pt-10 pb-4 bg-gray-100">
      <div className="md:mx-10 md:py-20 md:px-10 flex flex-col gap-12">
        {/* Title Section */}
        <div className="relative flex flex-col items-center">
          <Skeleton className="h-10 w-64 mb-4" />
          <Skeleton className="h-6 w-96" />
        </div>

        {/* Projects Carousel */}
        <div className="w-full">
          <div className="flex gap-4 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <Skeleton
                key={i}
                className="min-w-[300px] md:min-w-[400px] h-[250px] md:h-[350px] rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section Skeleton
export function ContactSkeleton() {
  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        {/* Header */}
        <div className="relative flex flex-col items-center mb-12">
          <Skeleton className="h-10 w-64 mb-4" />
          <Skeleton className="h-6 w-96" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-10">
          {/* Left Side - Form */}
          <div className="bg-white border border-black/40 p-8 rounded-2xl shadow-md">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-12 w-full rounded-lg" />
                </div>
                <div>
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-12 w-full rounded-lg" />
                </div>
              </div>
              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-12 w-full rounded-lg" />
                <div className="flex flex-wrap gap-2 mt-3">
                  <Skeleton className="h-8 w-24 rounded-full" />
                  <Skeleton className="h-8 w-24 rounded-full" />
                  <Skeleton className="h-8 w-24 rounded-full" />
                </div>
              </div>
              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-32 w-full rounded-lg" />
              </div>
              <Skeleton className="h-12 w-full rounded-lg mt-4" />
            </div>
          </div>

          {/* Right Side - Info Card */}
          <div className="hidden md:block relative bg-gray-200 rounded-2xl overflow-hidden border border-black/40 h-full min-h-[400px]">
            <div className="absolute inset-0 bg-white/70"></div>
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <div>
                <Skeleton className="h-8 w-40 mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-3/4 mb-8" />
                <div className="space-y-4">
                  <Skeleton className="h-16 w-full rounded-xl" />
                  <Skeleton className="h-16 w-full rounded-xl" />
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Status Bar Skeleton
export function StatusBarSkeleton() {
  return (
    <section className="bg-gray-50 py-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 shadow-lg items-center text-center px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex flex-col items-center w-full md:p-6">
          <Skeleton className="h-12 w-20 mb-3" />
          <Skeleton className="h-6 w-24" />
        </div>
      ))}
    </section>
  );
}

