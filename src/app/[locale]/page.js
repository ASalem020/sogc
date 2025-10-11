"use client";
import React from "react";
import HeroCarousel from "../_Components/HeroCarousel/HeroCarousel";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Services from "./services/page";
import StatusBar from "../_Components/StatusBar/StatusBar";

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <section>
      <HeroCarousel />
      <About />
      <StatusBar />
      <Services />
      <Projects />
      <Contact />
    </section>
  );
}
