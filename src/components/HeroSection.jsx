import { motion, spring } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiTwitter, FiX } from "react-icons/fi";
import Typewritter from "typewriter-effect";
import Spline from "@splinetool/react-spline";

export const HeroSection = () => {
    return (

        <section
            id="hero"
            className="h-screen  flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
            < div >
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 20,
                        delay: 1.3,
                        duration: 0.5,
                    }}

                    className="text-5xl md:text-7xl lg:text-8xl font-bold z=10 mb-6">
                    I'am a<br /> <span className="text-purple-300 "><Typewritter
                        options={{
                            strings: ["developer", "programmer"],
                            autoStart: true,
                            loop: true,
                            cursor: "_"
                        }}>

                    </Typewritter></span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 20,
                        delay: 1.3,
                        duration: 0.5,
                    }}
                    className="text-xl lg:text-1xl lg:text-2xl max-w-2xl">
                   A professional web developer skilled in building fast, responsive, and scalable applications using technologies like React.js, Tailwind CSS, Node.js, Firebase, and MongoDB. Experienced in crafting intuitive UIs, managing back-end logic, and delivering full-stack solutions with clean, maintainable code.
                </motion.p>

                <div className="flex items-center space-x-4 mt-6">
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0,
                            scale: 1,
                            boxShadow: "0 0 0px transparent, 0 0 0px transparent",
                            transition: { duration: 0 }
                        }}
                        transition={{
                            delay: 1.6,
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        whileHover={{
                            scale: 1.25,
                            boxShadow: "0 0 25px #a855f7, 0 0 50px #a855f7",
                            transition: { duration: 0 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full bg-[#111] text-white cursor-pointer block"
                        style={{ willChange: 'transform, box-shadow' }}
                    >
                        <FiGithub className="w-6 h-6" />
                    </motion.a>

                    <motion.a
                        href="#"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0,
                            scale: 1,
                            boxShadow: "0 0 0px transparent, 0 0 0px transparent",
                            transition: { duration: 0 }
                        }}
                        transition={{
                            delay: 1.8,
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        whileHover={{
                            scale: 1.25,
                            boxShadow: "0 0 25px #a855f7, 0 0 50px #a855f7",
                            transition: { duration: 0 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full bg-[#111] text-white cursor-pointer block"
                        style={{ willChange: 'transform, box-shadow' }}
                    >
                        <FiLinkedin className="w-6 h-6" />
                    </motion.a>

                    <motion.a
                        href="#"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0,
                            scale: 1,
                            boxShadow: "0 0 0px transparent, 0 0 0px transparent",
                            transition: { duration: 0 }
                        }}
                        transition={{
                            delay: 2.0,
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        whileHover={{
                            scale: 1.25,
                            boxShadow: "0 0 25px #a855f7, 0 0 50px #a855f7",
                            transition: { duration: 0 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full bg-[#111] text-white cursor-pointer block"
                        style={{ willChange: 'transform, box-shadow' }}
                    >
                        <FiTwitter className="w-6 h-6" />
                    </motion.a>
                </div>
            </div>
            <Spline className="w-full max-w-[400px] sm:max-w-[450px]  lg:max-w-full
             mx-auto lg:mx-0 
             relative lg:absolute lg:right-[-30%] lg:top-0 md:top-[-20%]"
                scene="https://prod.spline.design/nEVFx5uTypSLQfzc/scene.splinecode" />

        </section>
    )
}