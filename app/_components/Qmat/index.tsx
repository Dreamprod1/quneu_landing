"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
const QMATSection = () => {
    const fadeInLeft = { hidden: { opacity: 0, x: -200 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
    const fadeInRight = { hidden: { opacity: 0, x: 200 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
    const ref1 = React.useRef(null);
    const inView1 = useInView(ref1, { once: false, amount: 0.5 });
  return (
    <div className="relative bg-[url('/images/qmat-bg.png')] bg-no-repeat bg-cover pt-12 md:pt-16 pb-14 text-white">
      <div className="container mx-auto px-4 sm:px-6">
         <motion.div ref={ref1} initial="hidden" animate={inView1 ? "visible":"hidden"} variants={fadeInLeft}>
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <h2 className={`${anta.className} text-5xl md:text-7xl lg:text-9xl font-bold mb-2 tracking-tight`}>QMAT</h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-stroke-light"> UNLOCKING REVOLUTIONARY MATERIALS WITH QUANTUM-INSPIRED AI </h3>
            </div>
         </motion.div>
         <motion.div ref={ref1} initial="hidden" animate={inView1 ? "visible":"hidden"} variants={fadeInRight}>
            <p className="text-lg md:text-xl lg:text-2xl  mb-10">
              Partnering with us gives you access to a generative AI tool that creates novel materials on-demand based on specified design requirements, rather than screening existing candidates and constraints.<br />
              <span className="font-semibold">With QMAT, you can:</span>
            </p>
         </motion.div>
        <div className="mt-16 md:mt-32 relative flex flex-col md:flex-row flex-wrap gap-5">
          <div className="relative mb-10 w-full md:w-[28%]">
            <div className="relative flex justify-center mb-5">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
              <div className="absolute h-1 top-[51px] -right-[20px] w-[43%] bg-[#fcfeb2] hidden md:block"></div>
            </div>
            <div className="rounded-lg border border-[#FCFEB2] bg-[#1F1F1F] px-8 md:px-12 py-8 min-h-44">
              <h4 className="text-xl font-bold mb-2 text-cyan-600">Accelerate R&D:</h4>
              <p className="text-base text-gray-100">Drastically cut down discovery time from years to weeks.</p>
            </div>
          </div>
          <div className="relative w-1 top-[51px] bg-[#fcfeb2] hidden md:block"/>
          <div className="relative mb-10 w-full md:w-[32%]">
            <div className="relative flex justify-center mb-5">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="3.61869" y1="33.9139" x2="82.6187" y2="78.9138" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
              <div className="absolute h-1 top-[51px] -left-[20px] w-[44%] bg-[#fcfeb2] hidden md:block"></div>
              <div className="absolute h-1 top-[51px] -right-[20px] w-[44%] bg-[#fcfeb2] hidden md:block"></div>
            </div>
            <div className="rounded-lg border border-[#FCFEB2] bg-[#1F1F1F] px-8 md:px-12 py-8 min-h-44">
              <h4 className="text-xl font-bold mb-2 text-cyan-600">Innovate Beyond Limits:</h4>
              <p className="text-base text-gray-100">Design custom materials with precisely targeted properties that don't exist today.</p>
            </div>
          </div>
          <div className="relative w-1 top-[51px] bg-[#fcfeb2] hidden md:block"/>
          <div className="relative mb-10 w-full md:w-[33%]">
            <div className="relative flex justify-center mb-5">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="3.61869" y1="33.9139" x2="82.6187" y2="78.9138" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="51.2345" y1="0.803935" x2="61.7951" y2="67.2986" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
              <div className="absolute h-1 top-[51px] -left-[20px] w-[44%] bg-[#fcfeb2] hidden md:block"></div>
            </div>
            <div className="rounded-lg border border-[#FCFEB2] bg-[#1F1F1F] px-8 md:px-12 py-8 min-h-44">
              <h4 className="text-xl font-bold mb-2 text-cyan-600">Reduce Costs:</h4>
              <p className="text-base text-gray-100">Minimize expensive and time-consuming laboratory experiments by focusing only on the most promising candidates.</p>
            </div>
          </div>
          </div>
        <div className="-mt-1 relative flex flex-col md:flex-row flex-wrap gap-15">
          <div className="relative mb-10 w-full md:w-[33%]">
            <div className="relative  flex justify-center mb-5">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="3.61869" y1="33.9139" x2="82.6187" y2="78.9138" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="51.2355" y1="0.809929" x2="65.2355" y2="91.8099" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="4.15987" y1="65.0744" x2="69.1599" y2="6.07443" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
              <div className="absolute h-1 top-[51px] -right-[30px] w-[47%] bg-[#fcfeb2] hidden md:block"></div>
            </div>
            <div className="rounded-lg border border-[#FCFEB2] bg-[#1F1F1F] px-8 md:px-12 py-8 min-h-44" >
              <h4 className="text-lg font-bold mb-2 text-cyan-600">Lead Your Industry:</h4>
              <p className="text-base text-gray-100">Create next-generation products built from materials no one else has.</p>
            </div>
          </div>
          <div className="relative mb-10 w-full md:w-[55%]">
            <div className="relative  flex justify-center mb-5">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46.75" fill="#1F1F1F" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="3.61869" y1="33.9139" x2="82.6187" y2="78.9138" stroke="#FCFEB2" strokeWidth="2.5" />
                <path d="M28.5 91L94 56.5" stroke="#FCFEB2" strokeWidth="2" />
                <line x1="51.2355" y1="0.809929" x2="65.2355" y2="91.8099" stroke="#FCFEB2" strokeWidth="2.5" />
                <line x1="4.15987" y1="65.0744" x2="69.1599" y2="6.07443" stroke="#FCFEB2" strokeWidth="2.5" />
              </svg>
              <div className="absolute h-1 top-[51px] -left-[30px] w-[48%] bg-[#fcfeb2] hidden md:block"></div>
            </div>
            <div className="rounded-lg border border-[#FCFEB2] bg-[#1F1F1F] px-8 md:px-12 py-8 min-h-44" >
              <h4 className="text-lg font-bold mb-2 text-cyan-600">Have access to immediate commercial use:</h4>
              <p className="text-base text-gray-100">Tested, proven, and deployment-ready today.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QMATSection;
