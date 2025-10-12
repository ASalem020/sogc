"use client";
import React, { useEffect, useRef, useState } from "react";

const FadeInAnimation = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.6, 
  distance = 30,
  className = "",
  threshold = 0.1,
  triggerOnce = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, triggerOnce]);

  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`;
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      case "scale":
        return "scale(0.9)";
      default:
        return `translateY(${distance}px)`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? (direction === "scale" ? "scale(1)" : "translateY(0) translateX(0)")
          : getTransformValue(),
        transition: `all ${duration}s ease-out ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default FadeInAnimation;
