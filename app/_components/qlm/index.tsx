"use client";
import { anta } from "@/lib/fonts";
import { Mic } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const QLMSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const headingVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const lineVariants = {
    initial: { scaleX: 0, scaleY: 0 },
    animate: { scaleX: 1, scaleY: 1, transition: { duration: 0.8, delay: 0.4 } },
  };
  const boxVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
  };
  const buttonVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
  };
  return (
    <div
      ref={containerRef} id="qlm_section"
      className="relative bg-[#0E0E0E] h-full px-8 pt-5 pb-24 md:pb-36 text-white overflow-hidden"
    >
      <div className="relative container mx-auto lg:px-10 flex items-center">
        <motion.h2
          className={`${anta.className} text-gray-100 
          text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl`}
          variants={headingVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          QLM
        </motion.h2>
        <motion.div
          className="relative right-3 top-[50%] h-[2.5px] grow-1 bg-white  origin-left 
          hidden lg:block"
          variants={lineVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        />
        <motion.div
          className='absolute right-1 top-[49%] h-[133px] w-[110px] border-r-3 border-t-3 rounded-tr-xl 
          hidden lg:block'
          variants={lineVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        />
      </div>
      <motion.div
        className="h-[2px] bg-white my-2 md:my-4 origin-left"
        variants={lineVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      ></motion.div>
      <div className="relative container mx-auto lg:px-10 mt-12">
        <motion.div
          className="flex flex-col border rounded-2xl p-6 md:p-9 gap-4 md:gap-6"
          variants={boxVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <h3 className={`${anta.className} 
          text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl`}>
            04 GROWTH & HYPOTHESIS CREATION
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">
            QLM analyzes your business questions by processing all available data
            and generating unlimited hypotheses about potential causes and
            solutions. It systematically tests each possibility against the
            evidence, eliminating those that don’t match in collaboration with
            the humans, until it identifies the root cause and recommends
            specific actions. This automated diagnosis takes minutes instead of
            the weeks typically required for manual investigation.
          </p>
        </motion.div>
        <motion.div
          className='absolute right-1 top-0 h-[87%] w-[2px] bg-white origin-top 
          hidden lg:block'
          variants={lineVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        />
        <motion.div
          className='absolute right-1 top-[85%] h-[20px] w-[100px] border-r-3 border-b-3 rounded-br-xl 
          hidden lg:block'
          variants={lineVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        />
        <div className="flex justify-end">
          <motion.button
            type="button"
            className={`${anta.className} text-black bg-white border-2 rounded-2xl px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-5 mt-8  cursor-pointer flex items-center justify-center space-x-2`}
            variants={buttonVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <span className="text-lg sm:text-xl md:text-3xl">+ CHAT WITH YOUR GRAPH</span>
            <Mic className="ml-2" size={24} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default QLMSection;