"use client";
import React, { useRef, useEffect, useState } from "react";
import AuroraBackground from "./ui/aurora-background";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Added a state to detect screen size for responsive motion ranges
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY]);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Logic: Reduce the intensity of the movement on mobile (isMobile ? small_range : large_range)
  const rotateX = useTransform(smoothY, [-400, 400], [10, -10]);
  const rotateY = useTransform(smoothX, [-400, 400], [-10, 10]);
  
  // Adjusted these ranges to be much tighter on mobile to prevent the "drifting" issue
  const finovaX = useTransform(smoothX, [-400, 400], isMobile ? [-10, 10] : [-30, 30]);
  const manipalX = useTransform(smoothX, [-400, 400], isMobile ? [10, -10] : [30, -30]);

  // Function to handle smooth scroll
  const scrollToDomains = () => {
    const domainSection = document.getElementById("domains");
    if (domainSection) {
      domainSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full bg-black overflow-hidden">
      <AuroraBackground>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="hero-eyebrow inline-flex items-center gap-3 text-[9px] md:text-[13.5px] tracking-[0.3em] text-white/30 uppercase mb-6 md:mb-8">
            Finance · Technology · Innovation
          </div>

          {/* Perspective wrapper helps keep the 3D effect grounded */}
          <div style={{ perspective: "1000px" }} className="w-full flex justify-center">
            <motion.h1 
              style={{ rotateX, rotateY, fontFamily: "'Syne', sans-serif" }}
              className="font-extrabold text-white uppercase leading-[0.8] md:leading-[0.85] tracking-[-0.04em] text-[52px] sm:text-[90px] md:text-[150px] lg:text-[170px]"
            >
              <motion.span 
                style={{ x: finovaX }} 
                className="inline-block"
              >
                Finova
              </motion.span>
              <br />
              <motion.span 
                style={{ x: manipalX }} 
                className="inline-block"
              >
                Manipal
              </motion.span>
            </motion.h1>
          </div>

          <p className="mt-6 md:mt-8 text-white/40 font-light tracking-wide max-w-[280px] sm:max-w-md text-xs md:text-base">
            Bridging the gap between quantitative finance and engineering excellence.
          </p>

          <button 
            onClick={scrollToDomains}
            className="relative z-20 mt-10 md:mt-12 px-8 md:px-10 py-3 md:py-4 rounded-full border border-white/10 bg-white/5 text-white/60 text-[9px] md:text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
          >
            Explore Domains
          </button>
        </div>
      </AuroraBackground>
    </section>
  );
}