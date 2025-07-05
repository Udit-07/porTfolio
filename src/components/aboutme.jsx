"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Typewriter } from "react-simple-typewriter";
import Spline from "@splinetool/react-spline";

const Aboutme = () => {
  const centerCardRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  const centerCardInView = useInView(centerCardRef, { threshold: 0.3 });
  const leftCardInView = useInView(leftCardRef, { threshold: 0.3 });
  const rightCardInView = useInView(rightCardRef, { threshold: 0.3 });

  const centerCardControls = useAnimation();
  const leftCardControls = useAnimation();
  const rightCardControls = useAnimation();

  const [leftAnimDone, setLeftAnimDone] = useState(false);
  const [rightAnimDone, setRightAnimDone] = useState(false);

  useEffect(() => {
    if (centerCardInView) {
      centerCardControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    } else {
      centerCardControls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 0.3 },
      });
    }
  }, [centerCardInView]);

  useEffect(() => {
    if (leftCardInView) {
      leftCardControls
        .start({
          x: 0,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.6 },
        })
        .then(() => setLeftAnimDone(true));
    } else {
      leftCardControls.start({
        x: -200,
        opacity: 0,
        transition: { duration: 0.3 },
      });
      setLeftAnimDone(false);
    }
  }, [leftCardInView]);

  useEffect(() => {
    if (rightCardInView) {
      rightCardControls
        .start({
          x: 0,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.6 },
        })
        .then(() => setRightAnimDone(true));
    } else {
      rightCardControls.start({
        x: 200,
        opacity: 0,
        transition: { duration: 0.3 },
      });
      setRightAnimDone(false);
    }
  }, [rightCardInView]);

  return (
    <div
      id="aboutme"
      className="min-h-screen overflow-auto bg-gradient-to-br from-gray-800 via-gray-900 to-black flex flex-col items-center justify-start px-6 pt-12 pb-12"
    >
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        .no-float:hover {
          animation: none !important;
        }
      `}</style>

      {/* Heading */}
      <div className="text-center text-white mb-10 relative z-50">
        <h1 className="text-4xl font-bold mb-2 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          About Me
        </h1>
      </div>

      {/* Center Card */}
      <motion.div
  ref={centerCardRef}
  className={`bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl w-full max-w-[1000px] h-auto flex flex-col md:flex-col lg:flex-row items-center justify-between text-white text-xl font-medium mb-10 z-10 p-6 hover:bg-white/20 hover:border-purple-400 hover:shadow-purple-500/30 transition-all duration-300 ${
    centerCardInView ? "floating no-float" : ""
  }`}
  animate={centerCardControls}
  initial={{ opacity: 0, y: 50 }}
  whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
>
  {/* Spline on Top in md, Right in lg */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={centerCardInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ delay: 0.3, duration: 0.5 }}
    className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0"
  >
    <Spline
      className="w-60 h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
      scene="https://prod.spline.design/nEVFx5uTypSLQfzc/scene.splinecode"
    />
  </motion.div>

  {/* Text Section */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={centerCardInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.5, duration: 0.6 }}
    className="w-full lg:w-1/2 space-y-2 text-center lg:text-left"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-purple-300">
      <Typewriter
        words={["Hi, I'm Udit"]}
        loop={1500}
        cursor
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h2>
    <p className="text-white/80 leading-relaxed">
      I’m a full-stack developer who enjoys building modern UIs and impactful
      products. I love solving problems and continuously improving my skills.
    </p>
  </motion.div>
</motion.div>
      {/* Bottom Cards */}
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-[1000px] -mt-7">
        {/* Left Card */}
        <motion.div
          ref={leftCardRef}
          className={`bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg flex-1 min-h-[260px] flex flex-col justify-center px-6 py-6 text-white hover:bg-white/20 hover:border-purple-400 hover:shadow-purple-500/30 transition-all duration-300 ${
            leftCardInView ? "floating no-float" : ""
          }`}
          animate={leftCardControls}
          initial={{ x: -200, opacity: 0 }}
          whileHover={leftAnimDone ? { scale: 1.04 } : undefined}
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={leftAnimDone ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-2"
          >
            🎓 Education
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={leftAnimDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            B.Tech in Computer Science, Graphic Era Hill University
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={leftAnimDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-white/70 text-sm"
          >
            Specialized in Full Stack Development
          </motion.p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          ref={rightCardRef}
          className={`bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg flex-1 min-h-[260px] flex flex-col items-center justify-center px-6 py-6 text-white hover:bg-white/20 hover:border-purple-400 hover:shadow-purple-500/30 transition-all duration-300 ${
            rightCardInView ? "floating no-float" : ""
          }`}
          animate={rightCardControls}
          initial={{ x: 200, opacity: 0 }}
          whileHover={rightAnimDone ? { scale: 1.04 } : undefined}
        >
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={rightAnimDone ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-4"
          >
            🧠 Problem Solving Stats
          </motion.h3>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center">
            {[{ name: "LeetCode", value: 75, color: "#a855f7" },
              { name: "GFG", value: 60, color: "#facc15" },
              { name: "HackerRank", value: 85, color: "#22d3ee" }].map((site, i) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, y: 10 }}
                animate={rightAnimDone ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * i, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-2">
                  <CircularProgressbar
                    value={site.value}
                    text={`${site.value}%`}
                    styles={buildStyles({
                      pathColor: site.color,
                      textColor: "#ffffff",
                      trailColor: "#4b5563",
                      textSize: "20px",
                    })}
                  />
                </div>
                <p className="text-sm">{site.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutme;
