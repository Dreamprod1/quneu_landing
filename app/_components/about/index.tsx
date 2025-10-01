"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { HighlightedTextAmber } from "@/components/ui/HighlightedText";
const AboutSection = () => {
  const fadeInBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const ref1 = React.useRef(null);
  const inView1 = useInView(ref1, { once: true, amount: 0.5 });
  return (
    <div id="about_section" className="bg-[#060405] bg-cover bg-center h-full text-white flex flex-col items-center justify-center px-8 pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 overflow-hidden" >
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={fadeInBottom}
        className="text-center mt-8 md:mt-12 lg:mt-16 mb-8 md:mb-12 lg:mb-16"
      >
        <Image src="/images/about-top-img.png" alt="shap" width={1444} height={19} />
      </motion.div>
      <div className="container mx-auto">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Quneu is a pioneering AI company proudly delivering
          <HighlightedTextAmber delay={0} text="Q0, the most accurate, most powerful knowledge platform available today." />
          This amazing platform is being developed by a team that brings together
          <HighlightedTextAmber delay={1} text="experts in neuroscience, ontology, AI, manufacturing, software, business " />
          <HighlightedTextAmber delay={1} text="processes, and data security," />
          to automatically and dynamically dissect and categorize your company’s data.
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 
        mt-6 md:mt-8 lg:mt-10">
          How does it work?
          <HighlightedTextAmber delay={1} text="Q0 automatically creates proprietary ‘knowledge graphs’ —your business’s " />
          <HighlightedTextAmber delay={2} text="living map—by dynamically and semantically mapping all your enterprise data." />
          Continuously. Using a single, adaptable AI knowledge platform composed of microservices tailored to your needs, Q0 turns even the most complex data into actionable insights.
          <HighlightedTextAmber delay={2} text="In this way, Q0 empowers your growing business" />
          to make faster decisions, unlock new opportunities, and achieve unprecedented value in a secure and cost-efficient way.
        </div>
      </div>
    </div>
  );
};
export default AboutSection;