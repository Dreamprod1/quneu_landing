"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
const QMATSection = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const titleVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const textVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
  };
  const cardContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };
  const cardItemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <div
      ref={containerRef} id="qmat_section"
      className="relative bg-[url('/images/qmat-bg.png')] bg-no-repeat bg-cover pt-9 md:pt-11 pb-14 text-white overflow-hidden"
    >
      <div className="w-full max-w-[78rem] px-6 mx-auto">
        <div>
          <div className="flex flex-col sm:flex-row sm:gap-5 sm:items-center">
            <motion.h2
              className={`${anta.className} font-bold mb-2 tracking-widest
              text-3xl md:text-7xl lg:text-9xl`}
              variants={titleVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              QMAT
            </motion.h2>
            <motion.h3
              className="mb-4 text-stroke-light 
              text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold"
              variants={titleVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              UNLOCKING REVOLUTIONARY MATERIALS
              <br /> WITH QUANTUM-INSPIRED AI
            </motion.h3>
          </div>
        </div>
        <div>
          <motion.p
            className="mt-6 mb-10 
            text-base md:text-lg lg:text-xl xl:text-2xl"
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            Partnering with us gives you access to a generative AI tool that creates novel materials on-demand based on specified design requirements, rather than screening existing candidates and constraints.
            <br />
            <span className="font-semibold">With QMAT, you can:</span>
          </motion.p>
        </div>
        </div>
        <div className="w-full max-w-[82rem] px-6 mx-auto">
        <motion.div
          className="mt-16 md:mt-20 lg:mt-[6.5rem] relative flex flex-col md:flex-row flex-wrap gap-2 md:gap-3 lg:gap-4 xl:gap-5"
          variants={cardContainerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.div className="relative mb-10 w-full lg:w-[24%] xl:w-[25%]" variants={cardItemVariants}>
            <div className="absolute h-[2px] top-[51px] -right-[20px] w-[43%] bg-[#fcfeb2] hidden lg:block"></div>
            <div className="relative flex justify-center mb-2">
              <svg className="scale-[0.77]" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
            </div>
            <div className="rounded-xl border-2 border-[#FCFEB2] bg-[#1F1F1F] px-6 lg:px-7 xl:px-9 py-4 lg:py-4 xl:py-6 lg:min-h-[9.5rem]">
              <h4 className="text-xl font-bold mb-2 text-cyan-600">Accelerate R&D:</h4>
              <p className="text-base text-gray-100">Drastically cut down discovery time from years to weeks.</p>
            </div>
          </motion.div>
          <div className="relative w-[2px] top-[51px] bg-[#fcfeb2] hidden lg:block" />
          <motion.div className="relative mb-10 w-full lg:w-[28%] xl:w-[29%]" variants={cardItemVariants}>
            <div className="absolute h-[2px] top-[51px] -left-[20px] w-[44%] bg-[#fcfeb2] hidden lg:block"></div>
              <div className="absolute h-[2px] top-[51px] -right-[20px] w-[44%] bg-[#fcfeb2] hidden lg:block"></div>
            <div className="relative flex justify-center mb-2">
              <svg className="scale-[0.77]" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="3.61869" y1="33.9139" x2="82.6187" y2="78.9138" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
              
            </div>
            <div className="rounded-xl border-2 border-[#FCFEB2] bg-[#1F1F1F] px-6 lg:px-7 xl:px-9 py-4 lg:py-4 xl:py-6 lg:min-h-[9.5rem]">
              <h4 className="text-xl font-bold mb-2 text-cyan-600">Innovate Beyond Limits:</h4>
              <p className="text-base text-gray-100">Design custom materials with precisely targeted properties that don't exist today.</p>
            </div>
          </motion.div>
          <div className="relative w-[2px] top-[51px] bg-[#fcfeb2] hidden lg:block" />
          <motion.div className="relative mb-10 w-full lg:w-[36%] xl:w-[37%]" variants={cardItemVariants}>
            <div className="absolute h-[2px] top-[51px] -left-[20px] w-[44%] bg-[#fcfeb2] hidden lg:block"></div>
            <div className="relative flex justify-center mb-2">
              <svg className="scale-[0.77]" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="3.61869" y1="33.9139" x2="82.6187" y2="78.9138" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="51.2345" y1="0.803935" x2="61.7951" y2="67.2986" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
              
            </div>
            <div className="rounded-xl border-2 border-[#FCFEB2] bg-[#1F1F1F] px-6 lg:px-7 xl:px-9 py-4 lg:py-4 xl:py-6 lg:min-h-[9.5rem]">
              <h4 className="text-xl font-bold mb-2 text-cyan-600">Reduce Costs:</h4>
              <p className="text-base text-gray-100">Minimize expensive and time-consuming laboratory experiments by focusing only on the most promising candidates.</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="-mt-1 relative flex flex-col md:flex-row flex-wrap gap-4 md:gap-9 lg:gap-12 xl:gap-[5.4rem]"
          variants={cardContainerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.div className="relative mb-10 w-full lg:w-[28%] xl:w-[30%]" variants={cardItemVariants}>
            <div className="absolute h-[2px] top-[51px] -right-[58px] w-[56%] bg-[#fcfeb2] hidden lg:block"></div>
            <div className="relative flex justify-center mb-2">
              <svg className="scale-[0.77]" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="3.61869" y1="33.9139" x2="82.6187" y2="78.9138" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="51.2355" y1="0.809929" x2="65.2355" y2="91.8099" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="4.15987" y1="65.0744" x2="69.1599" y2="6.07443" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
              
            </div>
            <div className="rounded-xl border-2 border-[#FCFEB2] bg-[#1F1F1F] px-6 lg:px-7 xl:px-9 py-4 lg:py-4 xl:py-6 lg:min-h-[9.5rem]">
              <h4 className="text-lg font-bold mb-2 text-cyan-600">Lead Your Industry:</h4>
              <p className="text-base text-gray-100">Create next-generation products built from materials no one else has.</p>
            </div>
          </motion.div>
          <motion.div className="relative mb-10 w-full lg:w-[43%] xl:w-[45%]" variants={cardItemVariants}>
            <div className="absolute h-[2px] top-[51px] -left-[30px] w-[48%] bg-[#fcfeb2] hidden lg:block"></div>
            <div className="relative flex justify-center mb-2">
              <svg className="scale-[0.77]" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="3.61869" y1="33.9139" x2="82.6187" y2="78.9138" stroke="#FCFEB2" strokeWidth="2.5" />
                <path d="M28.5 91L94 56.5" stroke="#FCFEB2" strokeWidth="2" />
                <line x1="51.2355" y1="0.809929" x2="65.2355" y2="91.8099" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="4.15987" y1="65.0744" x2="69.1599" y2="6.07443" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
            </div>
            <div className="rounded-xl border-2 border-[#FCFEB2] bg-[#1F1F1F] px-6 lg:px-7 xl:px-9 py-4 lg:py-4 xl:py-6 lg:min-h-[9.5rem]">
              <h4 className="text-lg font-bold mb-2 text-cyan-600">Have access to immediate commercial use:</h4>
              <p className="text-base text-gray-100">Tested, proven, and deployment-ready today.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default QMATSection;