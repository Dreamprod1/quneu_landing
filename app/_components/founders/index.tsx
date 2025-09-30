"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
import Image from "next/image";


const FounderCard = ({ name, title }: { name: string; title: string }) => (
  <div className="bg-[url(/images/founder-name-bg.png)] bg-blend-darken bg-top flex flex-col px-8 md:px-12 items-center justify-center border border-white rounded-2xl w-full max-w-md md:w-auto min-h-[250px] md:min-h-[302px]">
    <p className={`${anta.className} text-3xl md:text-4xl text-center text-[#51AABE]`}>{name}</p>
    <p className="text-xl md:text-2xl text-center">{title}</p>
  </div>
);

const FoundersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.0 } },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div id="Founders_section" className="relative bg-[#0E0E0E] px-8 sm:px-16 md:px-24 lg:px-40 py-16 md:py-24 text-white overflow-hidden">
      <div className="container mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <h2 className={`${anta.className} text-5xl md:text-7xl lg:text-9xl xl:text-[180px]`}>FOUNDERS</h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 md:gap-8 lg:gap-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p className="text-xl md:text-2xl lg:text-3xl text-justify" variants={itemVariants}>
            Our team unites experts in neuroscience, ontology, AI, manufacturing, software development, business processes, and data security to address the critical challenge of turning vast, complex data into actionable insight that drives efficiency and innovation for your business. We pair this with deep business and operational acumen, ensuring that our solutions scale responsibly within enterprise ecosystems.
          </motion.p>
          <motion.p className="text-xl md:text-2xl lg:text-3xl text-justify" variants={itemVariants}>
            Headquartered in the United States and the Netherlands, we operate at the intersection of global innovation hubs, giving us both a transatlantic presence and strong ties to advanced technology markets.
          </motion.p>
          <motion.p className="text-xl md:text-2xl lg:text-3xl text-justify" variants={itemVariants}>
            Rather than replicate industry-specific expertise, we bring a complementary perspective that transforms organizational complexity into living, actionable intelligence — helping enterprises preserve critical know-how, accelerate decision-making, and build resilience for the future.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex-none flex flex-col md:flex-row gap-9 md:gap-16 lg:gap-24 items-center justify-center mt-8 md:mt-12 lg:mt-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <FounderCard name="Frank Lisitano" title="Director of Cognitive Intelligence | Co-founder" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FounderCard name="Charles Siebenberg" title="Director of Cognitive Business | Co-founder" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-grow flex justify-center items-center mt-8 md:mt-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleVariants}
        >
          <Image src="/images/founder-section-1.png" alt="Founders team photo" width={790} height={81} quality={90} />
        </motion.div>
      </div>
    </div>
  );
};
export default FoundersSection;