"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from "@/lib/fonts";
import Image from "next/image";

const MissionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div className="bg-[#0E0E0E] h-full px-8 sm:px-12 md:px-16 lg:px-24 flex flex-col pt-16 md:pt-32 pb-7">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 lg:gap-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* ----- Vision Box ------ */}
          <motion.div className="flex flex-col justify-between items-center flex-1" variants={itemVariants}>
            <div className="text-center">
              <Image src="/images/misson-top-shap.png" alt="mission shap" width={150} height={150} />
            </div>
            <h3 className={`${anta.className} text-2xl md:text-3xl text-white`}>OUR VISION</h3>
            <div className="mt-3 md:mt-5 border rounded-2xl p-6 md:p-9 pb-10 md:pb-14 flex-1 flex items-center bg-[url('/images/mission-box-bg-1.png')] bg-right-bottom bg-no-repeat">
              <p className="text-base md:text-lg text-white">To create a world where every organization has autonomous intelligence that grows smarter every day—transforming business complexity into competitive advantage, accelerating human discovery across all industries, and establishing the foundation for truly intelligent enterprises that think, learn, and innovate at the speed of possibility</p>
            </div>
          </motion.div>
          {/* ----------- Mission Box ----------- */}
          <motion.div className="flex flex-col justify-between items-center flex-1" variants={itemVariants}>
            <div className="text-center">
              <Image src="/images/misson-top-shap.png" alt="mission shap" width={150} height={150} />
            </div>
            <h3 className={`${anta.className} text-2xl md:text-3xl text-white`}>OUR MISSION</h3>
            <div className="mt-3 md:mt-5 border rounded-2xl p-6 md:p-9 pb-10 md:pb-14 flex-1 flex items-center bg-[url('/images/mission-box-bg-2.png')] bg-right-bottom bg-no-repeat">
              <p className="text-base md:text-lg text-white">QUNEU transforms enterprise complexity into intelligence by creating dynamic knowledge graphs that turn vast, disparate data into actionable insights—empowering organizations to make faster decisions, unlock hidden opportunities, and build resilient futures through secure, cost-efficient AI platforms</p>
            </div>
          </motion.div>
          {/* ----------- Values Box ----------- */}
          <motion.div className="flex flex-col justify-between items-center flex-1" variants={itemVariants}>
            <div className="text-center">
              <Image src="/images/misson-top-shap.png" alt="mission shap" width={150} height={150} />
            </div>
            <h3 className={`${anta.className} text-2xl md:text-3xl text-white`}>OUR VALUES</h3>
            <div className="mt-3 md:mt-5 border rounded-2xl p-6 md:p-9 pb-10 md:pb-14 flex-1 flex items-center">
              <p className="text-base md:text-lg text-white">QUNEU is guided by principles that keep our work practical and responsible. We design intelligence that serves people first, built on transparency and trust. Sustainability drives our decisions, ensuring long-term impact. We believe collaboration strengthens outcomes, and we innovate with purpose—delivering solutions that create real value and scale responsibly.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionSection;