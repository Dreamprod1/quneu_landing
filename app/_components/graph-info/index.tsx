"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
import Image from "next/image";

//---
const GraphInfoSection = () => {
  const fadeInLeft = { hidden: { opacity: 0, x: -200 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeInRight = { hidden: { opacity: 0, x: 200 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeInScale = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.0} } };
  
  // Create separate refs and inView states for each animated element
  const refTitle = React.useRef(null);
  const inViewTitle = useInView(refTitle, { once: false, amount: 0.5 });
  
  const refImage = React.useRef(null);
  const inViewImage = useInView(refImage, { once: false, amount: 0.5 });
  
  const refParagraph = React.useRef(null);
  const inViewParagraph = useInView(refParagraph, { once: false, amount: 0.5 });

  return (
    <div className="relative bg-[#78BAC9] px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-20 text-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 lg:gap-8">
          <motion.div ref={refTitle} initial="hidden" animate={inViewTitle ? "visible" : "hidden"} variants={fadeInLeft}>
            <div className="flex flex-col">
              <h3 className={`${anta.className} text-5xl md:text-7xl lg:text-9xl`}>QGRAPH</h3>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-stroke-dark">THE POWER OF QGRAPH</p>
            </div>
          </motion.div>
          <motion.div ref={refImage} initial="hidden" animate={inViewImage ? "visible" : "hidden"} variants={fadeInRight}>
            <Image src="/images/QGRAPH-patters.png" alt="graph" width={779} height={308} />
          </motion.div>
        </div>
        <motion.div ref={refParagraph} initial="hidden" animate={inViewParagraph ? "visible" : "hidden"} variants={fadeInScale}>
          <p className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-8 lg:mt-10">
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