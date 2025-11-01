"use client";
import React, { lazy, Suspense } from "react";
import FadeInAnimation from "../../components/animations/FadeInAnimation";
import {
  HeroCarouselSkeleton,
  AboutSkeleton,
  ServicesSkeleton,
  ProjectsSkeleton,
  ContactSkeleton,
  StatusBarSkeleton,
} from "../_Components/Skeletons/PageSkeletons";

// Lazy load heavy components
const HeroCarousel = lazy(() => import("../_Components/HeroCarousel/HeroCarousel"));
const About = lazy(() => import("./about/page"));
const Projects = lazy(() => import("./projects/page"));
const Contact = lazy(() => import("./contact/page"));
const Services = lazy(() => import("./services/page"));
const StatusBar = lazy(() => import("../_Components/StatusBar/StatusBar"));

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <section>
      <Suspense fallback={<HeroCarouselSkeleton />}>
        <HeroCarousel />
      </Suspense>
      <Suspense fallback={<AboutSkeleton />}>
        <FadeInAnimation direction="up" delay={0.2} duration={0.8}>
          <About />
        </FadeInAnimation>
      </Suspense>
      {/* <Suspense fallback={<StatusBarSkeleton />}>
        <FadeInAnimation direction="up" delay={0.1} duration={0.6}>
          <StatusBar />
        </FadeInAnimation>
      </Suspense> */}
      <Suspense fallback={<ServicesSkeleton />}>
        <FadeInAnimation direction="up" delay={0.3} duration={0.8}>
          <Services />
        </FadeInAnimation>
      </Suspense>
      <Suspense fallback={<ProjectsSkeleton />}>
        <FadeInAnimation direction="up" delay={0.2} duration={0.8}>
          <Projects />
        </FadeInAnimation>
      </Suspense>
      <Suspense fallback={<ContactSkeleton />}>
        <FadeInAnimation direction="up" delay={0.4} duration={0.8}>
          <Contact />
        </FadeInAnimation>
      </Suspense>
    </section>
  );
}
