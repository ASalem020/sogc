"use client";
import { useEffect } from "react";

export default function ErrorSuppressor() {
  useEffect(() => {
    // Only suppress in production
    if (process.env.NODE_ENV === "production") {
      // Suppress console errors
      const originalError = console.error;
      const originalWarn = console.warn;
      const originalLog = console.log;

      console.error = function () {};
      console.warn = function () {};
      console.log = function () {};

      // Suppress unhandled promise rejections
      window.addEventListener("unhandledrejection", function (event) {
        event.preventDefault();
      });

      // Suppress general errors
      window.addEventListener("error", function (event) {
        event.preventDefault();
        return false;
      });

      // Cleanup on unmount
      return () => {
        console.error = originalError;
        console.warn = originalWarn;
        console.log = originalLog;
      };
    }
  }, []);

  return null;
}

