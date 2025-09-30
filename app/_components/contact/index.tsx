"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
const ContactSection = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
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
  return (
    <div
      id="contact_section"
      className="relative bg-[#0E0E0E] px-8 flex items-center justify-center text-white overflow-hidden"
    >
      <div
        ref={containerRef}
        className="container mx-auto py-28 text-center"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1 className={`${anta.className} text-4xl md:text-5xl lg:text-7xl xl:text-[85px]`} variants={itemVariants}>
            Ready To Transform Your Enterprise <br />
            and Your Material Discovery?
          </motion.h1>
          <motion.p className="font-light text-xl md:text-2xl lg:text-3xl pt-6 md:pt-9" variants={itemVariants}>
            Join the Cognitive Graph Journey. <br /> Discover how QUNEU can accelerate your innovation cycles and unlock new possibilities.
          </motion.p>
          <motion.div variants={itemVariants}>
            <button type="button"
              className={`${anta.className} bg-cyan-500 text-white cursor-pointer hover:text-cyan-500 hover:bg-[#FFF] transition-colors
            text-3xl md:text-4xl lg:text-5xl rounded-xl 
            px-10  xl:px-16 
            py-6 md:py-8 
            mt-16 md:mt-20 lg:mt-24 `}
            >
              Schedule a demo
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default ContactSection;