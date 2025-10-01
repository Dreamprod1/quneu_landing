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
      className="relative bg-[url('/images/qmat-bg.png')] bg-no-repeat bg-cover px-8 pt-12 md:pt-16 pb-14 text-white overflow-hidden"
    >
      <div className="container mx-auto">
        <div>
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <motion.h2
              className={`${anta.className} font-bold mb-2 tracking-tight
              text-5xl md:text-7xl lg:text-9xl 2xl:text-[180px]`}
              variants={titleVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              QMAT
            </motion.h2>
            <motion.h3
              className="mb-4 text-stroke-light 
              text-2xl md:text-3xl lg:text-4xl xl:text-5xl "
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
            className="mb-10 
            text-lg md:text-xl lg:text-2xl xl:text-3xl "
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            Partnering with us gives you access to a generative AI tool that creates novel materials on-demand based on specified design requirements, rather than screening existing candidates and constraints.
            <br />
            <span className="font-semibold">With QMAT, you can:</span>
          </motion.p>
        </div>
        <motion.div
          className="mt-16 md:mt-20 lg:mt-28 relative flex flex-col md:flex-row flex-wrap gap-2 md:gap-3 lg:gap-4 xl:gap-5"
          variants={cardContainerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.div className="relative mb-10 w-full lg:w-[26%] xl:w-[27%] 2xl:w-[28%]" variants={cardItemVariants}>
            <div className="absolute h-1 top-[51px] -right-[20px] w-[43%] bg-[#fcfeb2] hidden lg:block"></div>
            <div className="relative flex justify-center mb-5">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
              
            </div>
            <div className="rounded-lg border border-[#FCFEB2] bg-[#1F1F1F] px-6 lg:px-9 xl:px-12 py-4 lg:py-6 xl:py-8 lg:min-h-44">
              <h4 className="text-xl font-bold mb-2 text-cyan-600">Accelerate R&D:</h4>
              <p className="text-base text-gray-100">Drastically cut down discovery time from years to weeks.</p>
            </div>
          </motion.div>
          <div className="relative w-1 top-[51px] bg-[#fcfeb2] hidden lg:block" />
          <motion.div className="relative mb-10 w-full lg:w-[30%] xl:w-[31%] 2xl:w-[32%]" variants={cardItemVariants}>
            <div className="absolute h-1 top-[51px] -left-[20px] w-[44%] bg-[#fcfeb2] hidden lg:block"></div>
              <div className="absolute h-1 top-[51px] -right-[20px] w-[44%] bg-[#fcfeb2] hidden lg:block"></div>
            <div className="relative flex justify-center mb-5">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="3.61869" y1="33.9139" x2="82.6187" y2="78.9138" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
              
            </div>
            <div className="rounded-lg border border-[#FCFEB2] bg-[#1F1F1F] px-6 lg:px-9 xl:px-12 py-4 lg:py-6 xl:py-8 lg:min-h-44">
              <h4 className="text-xl font-bold mb-2 text-cyan-600">Innovate Beyond Limits:</h4>
              <p className="text-base text-gray-100">Design custom materials with precisely targeted properties that don't exist today.</p>
            </div>
          </motion.div>
          <div className="relative w-1 top-[51px] bg-[#fcfeb2] hidden lg:block" />
          <motion.div className="relative mb-10 w-full lg:w-[31%] xl:w-[32%] 2xl:w-[33%]" variants={cardItemVariants}>
            <div className="absolute h-1 top-[51px] -left-[20px] w-[44%] bg-[#fcfeb2] hidden lg:block"></div>
            <div className="relative flex justify-center mb-5">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="3.61869" y1="33.9139" x2="82.6187" y2="78.9138" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="51.2345" y1="0.803935" x2="61.7951" y2="67.2986" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
              
            </div>
            <div className="rounded-lg border border-[#FCFEB2] bg-[#1F1F1F] px-6 lg:px-9 xl:px-12 py-4 lg:py-6 xl:py-8 lg:min-h-44">
              <h4 className="text-xl font-bold mb-2 text-cyan-600">Reduce Costs:</h4>
              <p className="text-base text-gray-100">Minimize expensive and time-consuming laboratory experiments by focusing only on the most promising candidates.</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="-mt-1 relative flex flex-col md:flex-row flex-wrap gap-4 md:gap-9 lg:gap-12 xl:gap-16"
          variants={cardContainerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.div className="relative mb-10 w-full lg:w-[31%] xl:w-[32%] 2xl:w-[33%]" variants={cardItemVariants}>
            <div className="absolute h-1 top-[51px] -right-[30px] w-[47%] bg-[#fcfeb2] hidden lg:block"></div>
            <div className="relative flex justify-center mb-5">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="3.61869" y1="33.9139" x2="82.6187" y2="78.9138" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="51.2355" y1="0.809929" x2="65.2355" y2="91.8099" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="4.15987" y1="65.0744" x2="69.1599" y2="6.07443" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
              
            </div>
            <div className="rounded-lg border border-[#FCFEB2] bg-[#1F1F1F] px-6 lg:px-9 xl:px-12 py-4 lg:py-6 xl:py-8 lg:min-h-44">
              <h4 className="text-lg font-bold mb-2 text-cyan-600">Lead Your Industry:</h4>
              <p className="text-base text-gray-100">Create next-generation products built from materials no one else has.</p>
            </div>
          </motion.div>
          <motion.div className="relative mb-10 w-full lg:w-[53%] xl:w-[54%] 2xl:w-[55%]" variants={cardItemVariants}>
            <div className="absolute h-1 top-[51px] -left-[30px] w-[48%] bg-[#fcfeb2] hidden lg:block"></div>
            <div className="relative flex justify-center mb-5">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="3.61869" y1="33.9139" x2="82.6187" y2="78.9138" stroke="#FCFEB2" strokeWidth="2.5" />
                <path d="M28.5 91L94 56.5" stroke="#FCFEB2" strokeWidth="2" />
                <line x1="51.2355" y1="0.809929" x2="65.2355" y2="91.8099" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="4.15987" y1="65.0744" x2="69.1599" y2="6.07443" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
            </div>
            <div className="rounded-lg border border-[#FCFEB2] bg-[#1F1F1F] px-6 lg:px-9 xl:px-12 py-4 lg:py-6 xl:py-8 lg:min-h-44">
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