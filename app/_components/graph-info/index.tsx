"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
import Image from "next/image";
const GraphInfoSection = () => {
  const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeInScale = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.0 } } };
  const refTitle = React.useRef(null);
  const inViewTitle = useInView(refTitle, { once: true, amount: 0.5 });
  const refImage = React.useRef(null);
  const inViewImage = useInView(refImage, { once: true, amount: 0.5 });
  const refParagraph = React.useRef(null);
  const inViewParagraph = useInView(refParagraph, { once: true, amount: 0.5 });
  return (
    <div id="graph_info_section" className="relative bg-[#78BAC9]  text-black overflow-hidden
    pt-12 md:pt-14 lg:pt-16  
    pb-9 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-36 
    ">
      <div className="w-full max-w-[82rem] px-6 mx-auto">
        <div className="flex flex-col items-center
        md:flex-row  
        gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <motion.div ref={refTitle} initial="hidden" animate={inViewTitle ? "visible" : "hidden"} variants={fadeInLeft}>
            <div className="flex flex-col">
              <h3 className={`${anta.className} text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-widest`}>QGRAPH</h3>
              <p className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-stroke-dark">THE POWER OF QGRAPH</p>
            </div>
          </motion.div>
          <motion.div ref={refImage} initial="hidden" animate={inViewImage ? "visible" : "hidden"} variants={fadeInRight} className="mt-8 md:mt-0">
            <Image src="/images/QGRAPH-patters.png" alt="graph" width={779} height={308} />
          </motion.div>
        </div>
        <motion.div ref={refParagraph} initial="hidden" animate={inViewParagraph ? "visible" : "hidden"} variants={fadeInScale} className="mt-10 md:mt-12 lg:mt-16">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Q0 demystifies the process of knowledge graph creation by automatically providing a dynamic representation of data processing events and contextual reasoning, and allows
            your business to intelligently grow, eliminating uncertainties in a secure and cost-efficient way. With Q0, your organization gains more than insights — it builds a neural
            network system that not only prepares you for what’s ahead, but also establishes a framework that prevents the same issues from recurring. As your organization changes and
            new employees join, your domain remains intact, ensuring continuity and knowledge acquisition as your organization grows.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default GraphInfoSection;