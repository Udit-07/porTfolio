import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
// ✅ React Icons
import { FaHome, FaTools, FaCode, FaEnvelope, FaUser } from "react-icons/fa";

// Utility function
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// FloatingNav Component
const FloatingNav = ({ navItems = [], className }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const element = document.querySelector(item.link);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.link,
            top: rect.top,
            bottom: rect.bottom,
            height: rect.height
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section that's most in view
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      
      let currentSection = "";
      let minDistance = Infinity;

      sections.forEach(section => {
        const sectionCenter = section.top + section.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        
        // Section is considered active if it's in viewport and closest to center
        if (section.top < viewportHeight && section.bottom > 0 && distance < minDistance) {
          minDistance = distance;
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [navItems]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 12,
        delay: 0.3,
      }}
      className={cn(
        "hidden lg:flex", 
        "fixed bottom-4 inset-x-0 mx-auto w-fit",
        "flex justify-center items-center",
        "border border-transparent dark:border-white/20 rounded-full",
        "bg-white dark:bg-stone-950 bg-opacity-90 backdrop-blur-md",
        "shadow-md z-[5000] px-6 py-4 space-x-6",
        className
      )}
    >
      {/* ✅ Plain name (not a link) */}
      <div className="mr-4">
        <span className="text-xl font-bold text-purple-700 dark:text-purple-300 hover:scale-105 transition-transform duration-300">
          USS
        </span>
      </div>

      {/* Nav Items */}
      {navItems.map((navItem, idx) => {
        const isActive = activeSection === navItem.link;
        
        return (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center justify-center gap-1 text-sm transition-all duration-300 group",
              isActive 
                ? "text-purple-600 dark:text-purple-300" 
                : "text-neutral-600 dark:text-neutral-50 dark:hover:text-purple-300 hover:text-purple-600",
              idx !== navItems.length - 1
                ? "border-r border-neutral-300 dark:border-neutral-700 pr-3"
                : "pr-0"
            )}
          >
            <navItem.icon className={cn(
              "text-base transition-all duration-300",
              isActive && "scale-110"
            )} />
            <span className={cn(
              "transition-all duration-300",
              isActive && "font-medium"
            )}>{navItem.name}</span>

            {/* Purple underline */}
            <div
              className={cn(
                "absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-transform duration-300 origin-center",
                isActive 
                  ? "scale-x-100" 
                  : "scale-x-0 group-hover:scale-x-100"
              )}
            />
          </a>
        );
      })}
    </motion.div>
  );
};

const Floating = () => {
  const navItems = [
    { name: "Home", link: "#hero", icon: FaHome },
    { name: "About Me", link: "#aboutme", icon: FaUser },
    { name: "Technologies", link: "#skills", icon: FaTools },
    { name: "Projects", link: "#projects", icon: FaCode },
    { name: "Contact", link: "#contact", icon: FaEnvelope },
  ];

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="w-full hidden lg:block">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Floating;