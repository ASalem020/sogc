"use client";
import React from "react";
import HeroCarousel from "../_Components/HeroCarousel/HeroCarousel";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Services from "./services/page";
import StatusBar from "../_Components/StatusBar/StatusBar";
import FadeInAnimation from "../../components/animations/FadeInAnimation";

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <section>
      <HeroCarousel />
      <FadeInAnimation direction="up" delay={0.2} duration={0.8}>
        <About />
      </FadeInAnimation>
      <FadeInAnimation direction="up" delay={0.1} duration={0.6}>
        <StatusBar />
      </FadeInAnimation>
      <FadeInAnimation direction="up" delay={0.3} duration={0.8}>
        <Services />
      </FadeInAnimation>
      <FadeInAnimation direction="up" delay={0.2} duration={0.8}>
        <Projects />
      </FadeInAnimation>
      <FadeInAnimation direction="up" delay={0.4} duration={0.8}>
        <Contact />
      </FadeInAnimation>
    </section>
  );
}
