"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
import { ArrowDown } from "lucide-react";
const HeroSection = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const ref1 = React.useRef(null);
  const inView1 = useInView(ref1, { once: true, amount: 0.5 });
  return (
    <div id="hero_section" className="h-[95dvh] flex flex-col items-center justify-end  pt-2 pb-1 text-white overflow-hidden
    bg-[url('/images/hero.png')] bg-cover bg-top bg-no-repeat " >
      <div className="w-full max-w-[78rem] px-6 mx-auto text-center">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={fadeInLeft}
        >
          <h1 className={`${anta.className} text-left text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}>
            COGNITIVE INTELLIGENCE
            <br />
            FOR YOUR BUSINESS
          </h1>
        </motion.div>
        <div className="flex items-center justify-center flex-col mt-8 sm:mt-12 md:mt-11 lg:mt-16">
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