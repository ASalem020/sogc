"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Show loading screen for 5 seconds
    const showTimer = setTimeout(() => {
        
      setIsFading(true);
    }, 2500); // Start fading 500ms before hiding

    // Hide loading screen after fade animation
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div dir="ltr"
      className={`fixed inset-0 z-[9999] max-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100" 
      }`}
      style={{
        pointerEvents: isFading ? "none" : "auto",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo container with animation */}
        <div
          className={`transform transition-all duration-1000 ${
            isFading
              ? "scale-75 opacity-0"
              : "scale-100 opacity-100"
          }`}
        >
          <div className="relative">
            {/* Logo with glow effect */}
            <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full animate-pulse"></div>
            <div className="relative">
              <Image
                src="/png 2.png"
                alt="SOGC Logo"
                width={200}
                height={200}
                className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl"
                style={{
                  animation: "float 3s ease-in-out infinite",
                }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div
          className={`mt-8 text-center transition-opacity duration-1000 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            SOGC Construction
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Building Egypt&apos;s Future
          </p>
        </div>

        {/* Loading spinner */}
        {/* <div
          className={`mt-8 transition-opacity duration-1000 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
          </div>
        </div> */}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-10 left-0 right-0 px-10">
        <div
          className={`h-1 bg-white/40 rounded-full overflow-hidden transition-opacity duration-1000 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className="h-full bg-gradient-to-r from-blue-900 to-orange-800 rounded-full"
            style={{
              width: isFading ? "100%" : "0%",
              animation: "progress 3s linear forwards",
            }}
          ></div>
        </div>
      </div>

    </div>
  );
}

