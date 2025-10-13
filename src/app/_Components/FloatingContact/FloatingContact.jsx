"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const isArabic = locale === "ar";
  const t = useTranslations("footer");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Contact actions
  const contactActions = [
    {
      id: 1,
      icon: <FaPhone className="text-white text-xl" />,
      label: isArabic ? "اتصل بنا" : "Call Us",
      href: "tel:+201234567890",
      bgColor: "bg-green-500 hover:bg-green-600",
    },
    {
      id: 2,
      icon: <FaWhatsapp className="text-white text-xl" />,
      label: isArabic ? "واتساب" : "WhatsApp",
      href: "https://wa.me/201234567890?text=Hello%20SOGC",
      bgColor: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
      id: 3,
      icon: <FaEnvelope className="text-white text-xl" />,
      label: isArabic ? "راسلنا" : "Email Us",
      href: "mailto:info@sogc-construction.com",
      bgColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: 4,
      icon: <FaMapMarkerAlt className="text-white text-xl" />,
      label: isArabic ? "موقعنا" : "Location",
      href: "https://maps.google.com/?q=Suez,Egypt",
      bgColor: "bg-orange-500 hover:bg-orange-600",
    },
  ];

  // Button positions when expanded (circular layout)
  const getButtonPosition = (index) => {
    const radius = 120; // Distance from main button -- change this to change the distance from the main button
    const startAngle = isArabic ? 0 : 0; // Start from left for Arabic, right for English -- change this to change the start angle
    const angleStep = 30; // Degrees between buttons -- change this to change the degrees between buttons
    const angle = startAngle + (index * angleStep);
    const radian = (angle * Math.PI) / 180;
    
    return {
      x: Math.cos(radian) * radius * (isArabic ? 1 : -1),
      y: -Math.sin(radian) * radius,
    };
  };

  return (
    <div
      className={`fixed bottom-6 z-50 ${
        isArabic ? "left-6" : "right-6"
      }`}
    >
      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <>
            {contactActions.map((action, index) => {
              const position = getButtonPosition(index);
              return (
                <motion.div
                  key={action.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: position.x,
                    y: position.y,
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.05,
                  }}
                  className="absolute bottom-0"
                  style={{
                    [isArabic ? "left" : "right"]: 0,
                  }}
                >
                  <a
                    href={action.href}
                    target={action.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg ${action.bgColor} transition-all duration-300 hover:scale-110 group relative`}
                    title={action.label}
                  >
                    {action.icon}
                    
                    {/* Tooltip */}
                    <span
                      className={`absolute ${
                        isArabic ? "left-16" : "right-16"
                      } top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg`}
                    >
                      {action.label}
                    </span>
                  </a>
                </motion.div>
              );
            })}
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        className={`relative w-16 h-16 bg-gradient-to-br from-gray-800 to-black text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-10 ${
          isOpen ? "scale-110" : "hover:scale-105"
        }`}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close menu" : "Open contact menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="text-2xl" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center"
            >
              <FaPhone className="text-2xl" />
              <span className="text-[8px] font-bold mt-1">
                {isArabic ? "اتصل" : "CALL"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse animation when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-gray-800 animate-ping opacity-20"></span>
        )}
      </motion.button>

      {/* Background overlay when open (optional) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 -z-10"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

