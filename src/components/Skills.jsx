"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ Image imports
import spring from "../assets/skills/spring.png";
import reactImg from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";
import html from "../assets/skills/html.png";
import mysql from "../assets/skills/mysql.png";
import flutter from "../assets/skills/flutter.png";
import firebase from "../assets/skills/firebase.png";
import mongo from "../assets/skills/mongo.png";
import git from "../assets/skills/git.png";
import docker from "../assets/skills/docker.png";
import cpp from "../assets/skills/cpp.png";
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.png";

// ✅ Left-to-right slide in, then float animation variants
const skillIconVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  slideIn: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
  float: {
    y: [0, -45, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.5, // Delay before floating starts
    },
  },
};

// ✅ Skill card with left-to-right slide then floating animation
const SkillDataProvider = ({ src, width, height, index, label }) => {
  const { ref, inView } = useInView({ 
    triggerOnce: false, 
    threshold: 0.1 
  });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? ["slideIn", "float"] : "initial"}
      variants={skillIconVariant}
      transition={{
        delay: index * 0.15, // Staggered delay for each icon
      }}
      className="group relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex flex-col items-center justify-center transition duration-300 ease-in-out"
    >
      <img
        src={src}
        width={width}
        height={height}
        alt={label || "skill"}
        className="object-contain w-full h-full cursor-pointer group-hover:scale-110 transition-transform duration-300"
      />
      {/* Tooltip on hover */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1  text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
        {label}
      </div>
    </motion.div>
  );
};

// ✅ Heading / Title with smoother motion
const SkillText = () => (
  <div className="w-full px-4 h-auto flex flex-col items-center justify-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 300, damping: 140 }}
      className="text-xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold text-center mb-2"
    >
      Making apps with modern technologies
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 300, damping: 180 }}
      className="text-sm sm:text-lg text-gray-300 text-center mb-6"
    >
      Never miss a task, deadline or idea
    </motion.div>
  </div>
);

// ✅ Skill arrays
const fullStack = [
  { label: "Spring", Image: spring },
  { label: "React", Image: reactImg },
  { label: "Tailwind", Image: tailwind },
  { label: "HTML", Image: html },
  { label: "MySQL", Image: mysql },
];

const android = [
  { label: "Flutter", Image: flutter },
  { label: "Firebase", Image: firebase },
  { label: "MongoDB", Image: mongo },
];

const otherSkills = [
  { label: "Git", Image: git },
  { label: "Docker", Image: docker },
  { label: "C++", Image: cpp },
  { label: "Java", Image: java },
  { label: "Python", Image: python },
];

// ✅ Skill section
const Section = ({ title, skills }) => (
  <div className="w-full max-w-6xl px-4 mb-6 sm:mb-8">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 300, damping: 180 }}
      className="text-lg sm:text-xl text-white font-medium mb-7 text-center"
    >
      {title}
    </motion.h2>
    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((skill, idx) => (
        <SkillDataProvider
          key={`${title}-${idx}`}
          src={skill.Image}
          width={80}
          height={80}
          index={idx}
          label={skill.label}
        />
      ))}
    </div>
  </div>
);

// ✅ Main component
const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center justify-center gap-3 relative overflow-hidden pt-0 pb-4 sm:pt-4 sm:pb-10"
    >
      <SkillText />
      <Section title="Full Stack Skills" skills={fullStack} />
      <Section title="Android Skills" skills={android} />
      <Section title="Other Skills" skills={otherSkills} />
    </section>
  );
};

export default Skills;