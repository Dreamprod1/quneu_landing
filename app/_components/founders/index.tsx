"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
import Image from "next/image";

//----
const FoundersSection = () => {
  // Define animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.0 } },
  };

  // Create a separate ref and inView state for each animated group
  const refTitle = React.useRef(null);
  const inViewTitle = useInView(refTitle, { once: false, amount: 0.5 });

  const refParagraphs = React.useRef(null);
  const inViewParagraphs = useInView(refParagraphs, { once: false, amount: 0.5 });

  const refFounders = React.useRef(null);
  const inViewFounders = useInView(refFounders, { once: false, amount: 0.5 });

  const refImage = React.useRef(null);
  const inViewImage = useInView(refImage, { once: false, amount: 0.5 });

  return (
    <div className="relative bg-[#0E0E0E] px-8 sm:px-16 md:px-24 lg:px-40 py-16 md:py-24 text-white">
      <div className="container mx-auto flex flex-col gap-6 md:gap-8 lg:gap-10">
        <motion.div ref={refTitle} initial="hidden" animate={inViewTitle ? "visible" : "hidden"} variants={fadeInLeft}>
          <h2 className={`${anta.className} text-5xl md:text-7xl lg:text-9xl`}>FOUNDERS</h2>
        </motion.div>

        <div ref={refParagraphs} className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          <motion.div initial="hidden" animate={inViewParagraphs ? "visible" : "hidden"} variants={fadeInRight}>
            <p className="flex-none text-2xl md:text-3xl lg:text-4xl text-justify">
              Our team unites experts in neuroscience, ontology, AI, manufacturing, software development, business processes, and data security to address the critical challenge of turning vast, complex data into actionable insight that drives efficiency and innovation for your business. We pair this with deep business and operational acumen, ensuring that our solutions scale responsibly within enterprise ecosystems.
            </p>
          </motion.div>
          <motion.div initial="hidden" animate={inViewParagraphs ? "visible" : "hidden"} variants={fadeInLeft}>
            <p className="flex-none text-2xl md:text-3xl lg:text-4xl text-justify">
              Headquartered in the United States and the Netherlands, we operate at the intersection of global innovation hubs, giving us both a transatlantic presence and strong ties to advanced technology markets.
            </p>
          </motion.div>
          <motion.div initial="hidden" animate={inViewParagraphs ? "visible" : "hidden"} variants={fadeInRight}>
            <p className="flex-none text-2xl md:text-3xl lg:text-4xl text-justify">
              Rather than replicate industry-specific expertise, we bring a complementary perspective that
              transforms organizational complexity into living, actionable intelligence — helping enterprises
              preserve critical know-how, accelerate decision-making, and build resilience for the future.
            </p>
          </motion.div>
        </div>

        <div className="flex-none flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-center justify-center mt-12 md:mt-16 lg:mt-20" ref={refFounders}>
          <motion.div initial="hidden" animate={inViewFounders ? "visible" : "hidden"} variants={fadeInLeft}>
            <div className="bg-[url(/images/founder-name-bg.png)] bg-blend-darken bg-top flex flex-col px-8 md:px-12 items-center justify-center border border-white rounded-2xl w-full md:w-auto lg:w-[529px] h-auto md:h-[302px]">
              <p className={`${anta.className} text-3xl md:text-4xl text-[#51AABE]`}>Frank Lisitano</p>
              <p className="text-xl md:text-2xl text-center">Director of Cognitive Intelligence | Co-founder</p>
            </div>
          </motion.div>
          <motion.div initial="hidden" animate={inViewFounders ? "visible" : "hidden"} variants={fadeInRight}>
            <div className="bg-[url(/images/founder-name-bg.png)] bg-blend-darken bg-top flex flex-col px-8 md:px-12 items-center justify-center border border-white rounded-2xl w-full md:w-auto lg:w-[529px] h-auto md:h-[302px]">
              <p className={`${anta.className} text-3xl md:text-4xl text-[#51AABE]`}>Charles Siebenberg</p>
              <p className="text-xl md:text-2xl text-center">Director of Cognitive Business | Co-founder</p>
            </div>
          </motion.div>
        </div>

        <motion.div ref={refImage} initial="hidden" animate={inViewImage ? "visible" : "hidden"} variants={fadeInScale}>
          <div className="flex-grow flex justify-center items-center">
            <Image src="/images/founder-section-1.png" alt="fpimder" width={790} height={81} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default FoundersSection;