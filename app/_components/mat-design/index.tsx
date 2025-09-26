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
  const inView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div className="relative bg-[url(/images/mat-design.jpg)] h-full text-justify flex flex-col px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-20">
      <div className="container mx-auto gap-6 md:gap-8 lg:gap-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3
            className={`text-white text-5xl md:text-6xl lg:text-8xl mb-6 md:mb-8 lg:mb-10 ${anta.className}}`}
            variants={itemVariants}
          >
            Q0’s Intelligent Material Design
          </motion.h3>
          <motion.p
            className="text-white text-2xl md:text-3xl lg:text-4xl"
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