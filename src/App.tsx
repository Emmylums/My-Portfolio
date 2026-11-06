import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { setupSmoothScroll } from "./utils/scroll";

export default function App() {
  useEffect(() => setupSmoothScroll(), []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-canvas text-ink font-sans transition-colors">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Projects />
          <Process />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}