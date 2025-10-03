"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
const MatDesignSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div
      id="mat_design_section"
      className="relative bg-[url(/images/mat-design.jpg)] bg-center bg-cover bg-no-repeat bg-fixed  text-justify flex flex-col items-center justify-center py-16 md:py-[4rem] overflow-hidden"
    >
      <div className="w-full max-w-[82rem] px-6 mx-auto" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3
            className={`text-left ${anta.className} text-white tracking-widest
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[4.2rem] 
              mb-6 md:mb-8 lg:mb-10 `}
            variants={itemVariants}
          >
            Q0’s Intelligent Material Design
          </motion.h3>
          <motion.p
            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left"
            variants={itemVariants}
          >
            We have developed a groundbreaking AI platform that designs novel, high-performance materials from the ground up. Imagine an AI artist that can create a perfect, intricate
            design starting from a blank canvas. Our software does this for chemistry. It begins with a set of target properties—like high conductivity or extreme durability—and
            intelligently generates a complete, physically-viable crystal structure that meets those exact specifications.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};
export default MatDesignSection;