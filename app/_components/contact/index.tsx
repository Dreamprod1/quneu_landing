"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";

//---
const ContactSection = () => {
  // Define animation variants
  const fadeInLeft = { hidden: { opacity: 0, x: -200 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeInRight = { hidden: { opacity: 0, x: 200 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };

  // Create a separate ref and inView state for each element you want to animate
  const refTitle = React.useRef(null);
  const inViewTitle = useInView(refTitle, { once: false, amount: 0.5 });
  
  const refParagraph = React.useRef(null);
  const inViewParagraph = useInView(refParagraph, { once: false, amount: 0.5 });

  const refButton = React.useRef(null);
  const inViewButton = useInView(refButton, { once: false, amount: 0.5 });

  return (
    <div className="relative bg-[#0E0E0E] h-full px-8 sm:px-12 md:px-16 lg:px-24 pt-11 pb-20 md:pb-28">
      <div className="container mx-auto">
        <motion.div ref={refTitle} initial="hidden" animate={inViewTitle ? "visible" : "hidden"} variants={fadeInLeft}>
          <h1 className={`${anta.className} text-center justify-start text-white text-4xl md:text-5xl lg:text-7xl`}>Ready To Transform Your Enterprise and Your Material Discovery?</h1>
        </motion.div>
        
        <motion.div ref={refParagraph} initial="hidden" animate={inViewParagraph ? "visible" : "hidden"} variants={fadeInRight}>
          <p className="font-light text-center justify-start text-white text-xl md:text-2xl lg:text-3xl pt-6 md:pt-9">
            Join the Cognitive Graph Journey. <br /> Discover how QUNEU can accelerate your innovation cycles and unlock new possibilities.
          </p>
        </motion.div>
        
        <motion.div ref={refButton} initial="hidden" animate={inViewButton ? "visible" : "hidden"} variants={fadeInLeft}>
          <div className="flex justify-center">
            <button type="button" className={`${anta.className} bg-cyan-500 text-white text-3xl md:text-4xl lg:text-5xl rounded-xl px-10 md:px-12 lg:px-16 py-6 md:py-8 mt-16 md:mt-20 lg:mt-24 cursor-pointer hover:text-cyan-500 hover:bg-[#FFF]`}>
              Schedule a demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default ContactSection;