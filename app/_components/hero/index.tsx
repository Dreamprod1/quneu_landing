"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
import { ArrowDown } from "lucide-react";
const HeroSection = () => {
  const fadeInLeft = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const ref1 = React.useRef(null);
  const inView1 = useInView(ref1, { once: false, amount: 0.5 });
  return (
    <div className="bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat  h-screen flex flex-col items-center justify-end px-8 sm:px-12 md:px-16 lg:px-24 py-20 text-6xl text-white">
      <div className="container mx-auto">
        <motion.div ref={ref1} initial="hidden" animate={inView1 ? "visible":"hidden"} variants={fadeInLeft}>
          <h1 className={`${anta.className} text-5xl md:text-6xl lg:text-8xl`}>COGNITIVE INTELLIGENCE FOR YOUR BUSINESS</h1>
        </motion.div>
        <div className="flex items-center justify-center flex-col mt-12 md:mt-16 lg:mt-24">
          <span className="text-xs font-bold">Scroll to explore</span>
          <ArrowDown className="ml-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
