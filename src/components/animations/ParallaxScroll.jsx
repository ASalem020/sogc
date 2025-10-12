"use client";
import React, { useEffect, useRef, useState } from "react";

const ParallaxScroll = ({ 
  children, 
  speed = 0.5, 
  direction = "up",
  className = "",
  offset = 0
}) => {
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        
        setScrollY(parallax);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return `translateY(${scrollY + offset}px)`;
      case "down":
        return `translateY(-${scrollY + offset}px)`;
      case "left":
        return `translateX(${scrollY + offset}px)`;
      case "right":
        return `translateX(-${scrollY + offset}px)`;
      default:
        return `translateY(${scrollY + offset}px)`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: getTransformValue(),
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxScroll;
