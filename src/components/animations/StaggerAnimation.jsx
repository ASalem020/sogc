"use client";
import React, { useEffect, useRef, useState } from "react";

const StaggerAnimation = ({ 
  children, 
  staggerDelay = 0.1, 
  direction = "up", 
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = "",
  threshold = 0.1
}) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const childrenArray = Array.from(entry.target.children);
          childrenArray.forEach((child, index) => {
            setTimeout(() => {
              setVisibleItems(prev => new Set(prev).add(index));
            }, index * staggerDelay * 1000 + delay * 1000);
          });
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [staggerDelay, delay, threshold]);

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
        return "scale(0.8)";
      default:
        return `translateY(${distance}px)`;
    }
  };

  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          style={{
            opacity: visibleItems.has(index) ? 1 : 0,
            transform: visibleItems.has(index)
              ? (direction === "scale" ? "scale(1)" : "translateY(0) translateX(0)")
              : getTransformValue(),
            transition: `all ${duration}s ease-out`,
            willChange: "opacity, transform",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggerAnimation;
