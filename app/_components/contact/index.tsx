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
      className="relative bg-[#0E0E0E] pt-5 pb-28 text-center text-white overflow-hidden"
    >
      <div
        ref={containerRef}
        className="w-full max-w-[78rem] px-6 mx-auto "
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1 className={`${anta.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight`} variants={itemVariants}>
            Ready To Transform Your Enterprise 
            and Your Material Discovery?
          </motion.h1>
          <motion.p className="font-light text-lg md:text-xl lg:text-2xl pt-6 md:pt-9" variants={itemVariants}>
            Join the Cognitive Graph Journey. <br/> Discover how QUNEU can accelerate your innovation cycles and unlock new possibilities.
          </motion.p>
          <motion.div variants={itemVariants}>
            <button type="button"
              className={`${anta.className} bg-cyan-500 text-white cursor-pointer hover:text-cyan-500 hover:bg-[#FFF] transition-colors
            text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-xl 
            px-7 lg:px-10 xl:px-12 
            py-3 lg:py-4 xl:py-6 
            mt-11 md:mt-16 lg:mt-20 `}
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