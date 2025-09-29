"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const ref1 = React.useRef(null);
  const inView1 = useInView(ref1, { once: true, amount: 0.5 });

  return (
    <div
      id="hero_section"
      className="bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-end
                 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 md:py-24
                 text-white overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={fadeInLeft}
        >
          <h1 className={`${anta.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight sm:leading-snug md:leading-normal`}>
            COGNITIVE INTELLIGENCE FOR YOUR BUSINESS
          </h1>
        </motion.div>
        <div className="flex items-center justify-center flex-col mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <span className="text-xs sm:text-sm font-bold">
            Scroll to explore
          </span>
          <ArrowDown className="mt-2 sm:mt-4 text-white animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;