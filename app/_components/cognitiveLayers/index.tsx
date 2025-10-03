"use client";
import "./style.css";
import React from "react";
import { motion, useInView } from "framer-motion";
import { anta } from '@/lib/fonts';
import Image from 'next/image';
const CognitiveLayers = () => {
  const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const ref_titleDescript = React.useRef(null);
  const inView_titleDescript = useInView(ref_titleDescript, { once: true, amount: 0.5 });
  const ref_box_1 = React.useRef(null);
  const inView_box_1 = useInView(ref_box_1, { once: true, amount: 0.5 });
  const ref_box_2 = React.useRef(null);
  const inView_box_2 = useInView(ref_box_2, { once: true, amount: 0.5 });
  const ref_box_3 = React.useRef(null);
  const inView_box_3 = useInView(ref_box_3, { once: true, amount: 0.5 });
  const ref_box_4 = React.useRef(null);
  const inView_box_4 = useInView(ref_box_4, { once: true, amount: 0.5 });
  const ref_chartItem_1 = React.useRef(null);
  const inView_chartItem_1 = useInView(ref_chartItem_1, { once: true, amount: 0.5 });
  const ref_chartItem_2 = React.useRef(null);
  const inView_chartItem_2 = useInView(ref_chartItem_2, { once: true, amount: 0.5 });
  const ref_chartItem_3 = React.useRef(null);
  const inView_chartItem_3 = useInView(ref_chartItem_3, { once: true, amount: 0.5 });
  const ref_chartItem_4 = React.useRef(null);
  const inView_chartItem_4 = useInView(ref_chartItem_4, { once: true, amount: 0.5 });
  const ref_chartItem_5 = React.useRef(null);
  const inView_chartItem_5 = useInView(ref_chartItem_5, { once: true, amount: 0.5 });
  return (
    <div id="cognitive_layers" className="relative bg-[#EAEAEA] text-black overflow-hidden
      pt-12 md:pt-16
      pb-24 md:pb-28">
      <div className="w-full max-w-[83rem] px-6 mx-auto">
        <motion.div ref={ref_titleDescript} initial="hidden" animate={inView_titleDescript ? "visible" : "hidden"} variants={fadeInLeft}>
          <h2 className={`${anta.className} font-bold mb-2 md:mb-4 lg:mb-6
          text-3xl md:text-7xl lg:text-9xl tracking-tight`}> COGNITIVE LAYERS </h2>
          <h5 className="text-stroke-dark
          text-2xl md:text-5xl lg:text-7xl"> HOW Q0 THINKS </h5>
          <p className="text-base md:text-lg lg:text-xl mt-4 md:mt-6"> While your competitors wrestle with AI to update static ontology databases, Q0 operates on an entirely different principle. It doesn't just process your data—it cultivates living knowledge that grows stronger with every interaction. Q0's breakthrough architecture operates through four synchronized intelligence layers, each amplifying the others:</p>
        </motion.div>
        <div className="flex flex-col gap-9 mt-10 md:mt-12 lg:mt-16">
          <div className='relative flex gap-4 items-center'>
            <div className='relative md:min-w-[100px] lg:min-w-[130px] xl:min-w-[160px] hidden md:block'>
              <div className='absolute border-t-2 border-l-2 top-[48%] left-0 md:w-[26%] lg:w-[43%] xl:w-[56%] h-[20px] rounded-tl-2xl ' />
              <svg className='ml-auto scale-[0.8]' width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="39" cy="39" r="37.75" stroke="black" strokeWidth="2.5" />
                <line x1="76.1113" y1="36.3828" x2="1.19586" y2="37.5124" stroke="black" />
                <line x1="31.2781" y1="37.3439" x2="34.2747" y2="76.6739" stroke="black" />
                <line x1="41.8411" y1="37.254" x2="50.7102" y2="3.72906" stroke="black" />
                <line x1="47.4704" y1="16.0732" x2="60.1726" y2="36.958" stroke="black" />
                <line x1="32.4611" y1="52.7337" x2="47.6359" y2="36.6763" stroke="black" />
              </svg>
            </div>
            <motion.div ref={ref_box_1} initial="hidden" animate={inView_box_1 ? "visible" : "hidden"} variants={fadeInRight} className="flex flex-col gap-1 xl:gap-3 border-2 rounded-3xl shadow-md bg-[url('/images/cognitive-layer-1.png')] bg-no-repeat bg-left-bottom
              px-4 lg:px-8 xl:px-10 pt-8 pb-12 lg:pb-16 xl:pb-20">
              <h3 className={`font-semibold mb-1 md:mb-2 ${anta.className}
              text-2xl md:text-4xl lg:text-5xl tracking-wide`}>LAYER 1: THE EXPLORER BRAIN</h3>
              <p className={`mb-2 md:mb-4 ${anta.className}
              text-2xl md:text-3xl lg:text-4xl tracking-tight`}>(Autonomous Discovery)</p>
              <div className='flex flex-col gap-6
              text-lg md:text-xl lg:text-2xl'>
                <p>Like a tireless researcher working 24/7, this layer continuously explores your data landscape, discovering connections before anyone even looks for them.</p>
                <p><span className="font-bold">Business Impact:</span> Problems are identified before they become crises. Opportunities surface before competitors see them.</p>
              </div>
            </motion.div>
            <div className='absolute lef-0 w-[2px] top-[53%] h-[50%] bg-black hidden md:block' />
          </div>
          <div className='relative flex gap-4 items-center'>
            <div className='relative md:min-w-[100px] lg:min-w-[130px] xl:min-w-[160px] hidden md:block'>
              <div className='absolute border top-[48%] lef-0 md:w-[26%] lg:w-[43%] xl:w-[56%] ' />
              <svg className='ml-auto scale-[0.8]' width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="39" cy="39" r="37.75" stroke="black" strokeWidth="2.5" />
                <line x1="59.8589" y1="6.96197" x2="71.8047" y2="56.1031" stroke="black" />
                <line x1="62.6635" y1="19.7361" x2="31.7123" y2="2.9036" stroke="black" />
                <line x1="68.0912" y1="41.4558" x2="13.248" y2="11.3191" stroke="black" />
                <line x1="51.1596" y1="13.3701" x2="60.7704" y2="10.8344" stroke="black" />
                <line x1="53.2902" y1="33.0256" x2="64.1388" y2="25.0661" stroke="black" />
              </svg>
            </div>
            <motion.div ref={ref_box_2} initial="hidden" animate={inView_box_2 ? "visible" : "hidden"} variants={fadeInRight} className="flex flex-col gap-1 xl:gap-3 border-2 rounded-3xl shadow-md bg-[url('/images/cognitive-layer-2.png')] bg-no-repeat bg-left-bottom
              px-4 lg:px-8 xl:px-10 pt-8 pb-12 lg:pb-16 xl:pb-20">
              <h3 className={`font-semibold mb-1 md:mb-2 ${anta.className}
              text-2xl md:text-4xl lg:text-5xl tracking-wide`}>LAYER 2: THE INFINITY BRAIN</h3>
              <p className={`mb-2 md:mb-4 ${anta.className}
              text-2xl md:text-3xl lg:text-4xl tracking-tight`}>(Temporal Intelligence)</p>
              <div className='flex flex-col gap-6
              text-lg md:text-xl lg:text-2xl'>
                <p>This layer understands how your business evolves, learning the rhythms and patterns unique to your operations.</p>
                <p><span className="font-bold">Business Impact:</span> Distinguishes real threats from normal fluctuations. Predicts future states with increasing accuracy.</p>
              </div>
            </motion.div>
            <div className='absolute lef-0 w-[2px] -top-[10%] h-[110%] bg-black hidden md:block' />
          </div>
          <div ref={ref_box_3} className='relative flex gap-4 items-center'>
            <div className='relative md:min-w-[100px] lg:min-w-[130px] xl:min-w-[160px] hidden md:block'>
              <div className='absolute border top-[48%] lef-0 md:w-[26%] lg:w-[43%] xl:w-[56%] ' />
              <svg className='ml-auto scale-[0.8]' width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="39" cy="39" r="37.75" stroke="black" strokeWidth="2.5" />
                <line x1="6.51691" y1="18.7348" x2="76.5218" y2="41.6562" stroke="black" />
                <line x1="23.1898" y1="24.7583" x2="4.29475" y2="52.3266" stroke="black" />
                <line x1="52.381" y1="33.6531" x2="60.7443" y2="68.8845" stroke="black" />
                <line x1="15.4859" y1="36.6964" x2="56.2188" y2="48.7765" stroke="black" />
              </svg>
            </div>
            <motion.div initial="hidden" animate={inView_box_3 ? "visible" : "hidden"} variants={fadeInRight} className="flex flex-col gap-1 xl:gap-3 border-2 rounded-3xl shadow-md bg-[url('/images/cognitive-layer-3.png')] bg-no-repeat bg-left-bottom
              px-4 lg:px-8 xl:px-10 pt-8 pb-12 lg:pb-16 xl:pb-20">
              <h3 className={`font-semibold mb-1 md:mb-2 ${anta.className}
              text-2xl md:text-4xl lg:text-5xl tracking-wide`}>LAYER 3: THE SCHOLAR BRAIN</h3>
              <p className={`mb-2 md:mb-4 ${anta.className}
              text-2xl md:text-3xl lg:text-4xl tracking-tight`}>(Validated Learning)</p>
              <div className='flex flex-col gap-6
              text-lg md:text-xl lg:text-2xl'>
                <p>Every insight comes with a complete chain of reasoning. When experts provide feedback, this layer ensures the entire system learns, not just one model.</p>
                <p> <span className="font-bold">Business Impact:</span> Builds trust through transparency. Ensures compliance through documented reasoning. Improves continuously through expert knowledge capture.</p>
              </div>
            </motion.div>
            <div className='absolute lef-0 w-[2px] -top-[10%] h-[110%] bg-black hidden md:block' />
          </div>
          <div ref={ref_box_4} className='relative flex gap-4 items-center'>
            <div className='relative md:min-w-[100px] lg:min-w-[130px] xl:min-w-[160px] hidden md:block'>
              <div className='absolute border top-[48%] lef-0 md:w-[26%] lg:w-[43%] xl:w-[56%] ' />
              <svg className='ml-auto scale-[0.8]' width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="39" cy="39" r="37.75" stroke="black" strokeWidth="2.5" />
                <line x1="19.0931" y1="6.72891" x2="57.9319" y2="72.7553" stroke="black" />
                <line x1="44.3821" y1="49.0676" x2="74.5603" y2="28.4582" stroke="black" />
                <line x1="31.7662" y1="28.5028" x2="66.8179" y2="33.8734" stroke="black" />
              </svg>
            </div>
            <motion.div initial="hidden" animate={inView_box_4 ? "visible" : "hidden"} variants={fadeInRight} className="flex flex-col gap-1 xl:gap-3 border-2 rounded-3xl shadow-md bg-[url('/images/cognitive-layer-4.png')] bg-no-repeat bg-left-bottom
              px-4 lg:px-8 xl:px-10 pt-8 pb-12 lg:pb-16 xl:pb-20">
              <h3 className={`font-semibold mb-1 md:mb-2 ${anta.className}
              text-2xl md:text-4xl lg:text-5xl tracking-wide`}>LAYER 4: THE DETECTIVE BRAIN</h3>
              <p className={`mb-4 ${anta.className}
              text-2xl md:text-3xl lg:text-4xl tracking-tight`}>(Deep Connection Analysis)</p>
              <div className='flex flex-col gap-6
              text-lg md:text-xl lg:text-2xl'>
                <p>Exploring millions of potential relationships, this layer uncovers the hidden connections that drive your business—the non-obvious links between distant departments, subtle correlations that predict major events.</p>
                <p><span className="font-bold">Business Impact:</span> Discovers that customer service calls in Berlin predict supply chain disruptions in Bangkok. Finds the hidden leverage points that transform performance.</p>
              </div>
            </motion.div>
            <div className='absolute lef-0 w-[2px] -top-[10%] h-[130%] bg-black hidden md:block' />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[84rem] px-6 mx-auto">
        <div className="relative cognitivelyaer-chart-wrapper">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="shap-1">
            <svg className="scale-[0.8]" width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="39" cy="39" r="37.75" stroke="black" strokeWidth="2.5" />
              <line x1="19.0931" y1="6.72891" x2="57.9319" y2="72.7553" stroke="black" />
              <line x1="44.3821" y1="49.0676" x2="74.5603" y2="28.4582" stroke="black" />
              <line x1="31.7662" y1="28.5028" x2="66.8179" y2="33.8734" stroke="black" />
            </svg>
          </div>
          <div className="shap-2">
            <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="39" cy="39" r="37.75" stroke="black" strokeWidth="2.5" />
              <line x1="76.1113" y1="36.3828" x2="1.19586" y2="37.5124" stroke="black" />
              <line x1="31.2779" y1="37.3439" x2="34.2744" y2="76.6739" stroke="black" />
              <line x1="41.8411" y1="37.254" x2="50.7102" y2="3.72906" stroke="black" />
              <line x1="47.4704" y1="16.0732" x2="60.1726" y2="36.958" stroke="black" />
              <line x1="32.4608" y1="52.7337" x2="47.6356" y2="36.6763" stroke="black" />
            </svg>
          </div>
          <div className="shap-3">
            <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="39" cy="39" r="37.75" stroke="black" strokeWidth="2.5" />
              <line x1="59.8589" y1="6.96197" x2="71.8047" y2="56.1031" stroke="black" />
              <line x1="62.6635" y1="19.7361" x2="31.7123" y2="2.9036" stroke="black" />
              <line x1="68.0912" y1="41.4558" x2="13.248" y2="11.3191" stroke="black" />
              <line x1="51.1596" y1="13.3701" x2="60.7704" y2="10.8344" stroke="black" />
              <line x1="53.2902" y1="33.0256" x2="64.1388" y2="25.0661" stroke="black" />
            </svg>
          </div>
          <div className="shap-4">
            <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="39" cy="39" r="37.75" stroke="black" strokeWidth="2.5" />
              <line x1="6.51691" y1="18.7348" x2="76.5218" y2="41.6562" stroke="black" />
              <line x1="23.1898" y1="24.7583" x2="4.29475" y2="52.3266" stroke="black" />
              <line x1="52.381" y1="33.6531" x2="60.7443" y2="68.8845" stroke="black" />
              <line x1="15.4859" y1="36.6964" x2="56.2188" y2="48.7765" stroke="black" />
            </svg>
          </div>
          <div className="shap-5">
            <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="39" cy="39" r="37.75" stroke="black" strokeWidth="2.5" />
              <line x1="19.0931" y1="6.72891" x2="57.9319" y2="72.7553" stroke="black" />
              <line x1="44.3821" y1="49.0676" x2="74.5603" y2="28.4582" stroke="black" />
              <line x1="31.7662" y1="28.5028" x2="66.8179" y2="33.8734" stroke="black" />
            </svg>
          </div>
          <motion.div
            className="item_1 bg-[#EAEAEA]"
            ref={ref_chartItem_1} initial="hidden" animate={inView_chartItem_1 ? "visible" : "hidden"} variants={fadeInRight}>
            Data Ingestion
          </motion.div>
          <motion.div
            className="item_2 bg-[#78BAC9]"
            ref={ref_chartItem_1} initial="hidden" animate={inView_chartItem_1 ? "visible" : "hidden"} variants={fadeInRight}>
            Explorer Brain
          </motion.div>
          <motion.div
            className="item_3 bg-[#EAEAEA] text-[#51AABE]"
            ref={ref_chartItem_2} initial="hidden" animate={inView_chartItem_2 ? "visible" : "hidden"} variants={fadeInRight}>
            Security
          </motion.div>
          <motion.div
            className="item_4 bg-[#EAEAEA] text-[#51AABE]"
            ref={ref_chartItem_2} initial="hidden" animate={inView_chartItem_2 ? "visible" : "hidden"} variants={fadeInRight}>
            Security
          </motion.div>
          <motion.div
            className="item_5 bg-[#85B1CF]"
            ref={ref_chartItem_3} initial="hidden" animate={inView_chartItem_3 ? "visible" : "hidden"} variants={fadeInRight}>
            Infinity Brain
          </motion.div>
          <motion.div
            className="item_6 bg-[#EAEAEA] text-[#51AABE]"
            ref={ref_chartItem_4} initial="hidden" animate={inView_chartItem_4 ? "visible" : "hidden"} variants={fadeInRight}>
            Security
          </motion.div>
          <motion.div
            className="item_7 bg-[#809DD4]"
            ref={ref_chartItem_5} initial="hidden" animate={inView_chartItem_5 ? "visible" : "hidden"} variants={fadeInRight}>
            Scholar Brain
          </motion.div>
          <motion.div
            className="item_8 bg-[#8D98D2]"
            ref={ref_chartItem_5} initial="hidden" animate={inView_chartItem_5 ? "visible" : "hidden"} variants={fadeInRight}>
            Detective Brain
          </motion.div>
          <Image src="/images/cognitevieLayers-chart-1.png" alt="cogniteve layers chart" width={1387} height={1088} ></Image>
        </div>
      </div>
    </div>
  );
};
export default CognitiveLayers;
