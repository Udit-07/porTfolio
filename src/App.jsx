import GlassCards from "./components/aboutme";
import Floating from "./components/Floating";
import Header from "./components/Header"
import { HeroSection } from "./components/HeroSection"

import ParticlesComponent from "./components/particles";
import Skills from "./components/Skills";


import './index.css'; 
console.log("🧠 App component is running");

export default function App() {
  return (

    <div>
      <Floating/>
      <ParticlesComponent/>
      <Header/>
      <HeroSection/>
      <GlassCards/>
      <Skills/>
    </div>
  )
}