"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { HighlightedTextAmber } from "@/components/ui/HighlightedText";
import { anta } from "@/lib/fonts";

const AboutSection = () => {
  const fadeInBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const ref1 = React.useRef(null);
  const inView1 = useInView(ref1, { once: true, amount: 0.5 });
  
  return (
    <div 
      id="about_section" 
      className="text-white flex flex-col items-center justify-center overflow-hidden 
        pt-2 pb-12 md:pb-20 lg:pb-28 bg-[url('/images/abous-bg.png')] bg-cover bg-left-top bg-no-repeat"
      spellCheck="false"  /* ADD THIS */
    >
      <div className="w-full max-w-[78rem] px-6 mx-auto" spellCheck="false">  {/* ADD THIS */}
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={fadeInBottom}
          className="text-center mt-8 md:mt-12 lg:mt-16 mb-4 md:mb-6"
        >
          <Image src="/images/about-top-img.png" alt="shap" width={1100} height={149} />
        </motion.div>
        <h3 className={`${anta.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-widest mb-6`}>
          <HighlightedTextAmber delay={0} text={`WHAT IS QUNEU`} />
        </h3>
        <div className="text-sm sm:text-lg md:text-xl lg:text-2xl text-justify" spellCheck="false">  {/* ADD THIS */}
          <HighlightedTextAmber delay={1} text={`Quneu is a pioneering AI company proudly <span> delivering Q0, the most accurate, most powerful knowledge platform available today. </span>  This amazing platform is being developed by a team that brings together experts in neuroscience, ontology,
           AI, manufacturing, software, business processes, and data security, to automatically and dynamically dissect and categorize your company's data.`} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;