"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
const BottomRightFix = () => {
  const elmRef = React.useRef(null);
  const isInView = useInView(elmRef, { once: true, amount: 0.5 });
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <motion.div ref={elmRef} animate={isInView ? "visible" : "hidden"} variants={itemVariants}>
      <button  type="button" 
        className={`${anta.className} hidden md:block fixed bottom-6 right-6 text-white cursor-pointer flex items-center justify-center bg-black rounded-full border border-white 
         text-base lg:text-lg xl:text-xl 2xl:text-2xl  
         w-36 xl:w-40 2xl:w-44 
         h-36 xl:h-40 2xl:h-44`}
      >
        SCHEDULE A DEMO
      </button>
    </motion.div>
  );
};
export default BottomRightFix;