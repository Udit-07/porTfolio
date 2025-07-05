import { motion, spring } from "framer-motion";
import { a } from "framer-motion/client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="absolute w-full z-50 transition-all-duration-300 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center">
          <div className=" h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text bg-purple-600 font-bold text-xl mr-3">
            U
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparrent ">
            Udit Singh Samant
          </span>
        </motion.div>
        {/*nav bar*/}
        <nav className="lg:flex hidden space-x-8">
          {[
            { name: "HOME", link: "#hero" },
            { name: "ABOUT", link: "#aboutme" },
            { name: "TECH-STACK", link: "#skills" },
            { name: "PROJECTS", link: "#projects" },
            { name: "CONTACT", link: "#contact" },
          ].map((item, index) => (
            <motion.a
              key={item.name}
              href={item.link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              className="group relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>


        {/*<div className="md:hidden flex items-center">
          <motion.button 
          whileTap={{scale:0.7}}
          onClick={toggleMenu}
          className="text-gray-300">
            { isOpen ? <FiX className="h-6 w-6"/> : <FiMenu className="h-6 w-6"/>}
          </motion.button>
        </div>*/}
      </div>

      {/* mobile navigation */}
      { /*<motion.div
      initial={{opacity:0, height:0}}
      animate={{
        opacity: isOpen ? 1 : 0,
        height:  isOpen ? "auto" :0,
      }}
      transition={{
        duration: 0.5}}
      className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5">
        <nav className="flex flex-col space-y-3">
           {["HOME", "ABOUT", "TECH-STACK", "PROJECTS", "CONTACT"].map ((item) =>(
            <a 
            onClick={toggleMenu}
            key={item}
            className="text-gray-300 font-medium py-2"
            href="#">
              {item}
            </a>
           ))}
        </nav>
      </motion.div>*/}
    </header>
  )
}
export default Header