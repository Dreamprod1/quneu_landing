"use client";
import "./style.css";
import { anta } from "@/lib/fonts";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const QunueProcess = () => {
  const headingVariants = { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const boxVariants = { initial: { opacity: 0, scale: 0.2 }, animate: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1 } } };
  const Ref_title_1 = useRef(null);
  const isInView_title_1 = useInView(Ref_title_1, { once: true, amount: 0.2 });
  const Ref_box_1 = useRef(null);
  const isInView_box_1 = useInView(Ref_box_1, { once: true, amount: 0.2 });
  const Ref_box_2 = useRef(null);
  const isInView_box_2 = useInView(Ref_box_2, { once: true, amount: 0.2 });
  const Ref_box_3 = useRef(null);
  const isInView_box_3 = useInView(Ref_box_3, { once: true, amount: 0.2 });
  return (
    <div id="QunueProcess_section"
      className="relative px-8 bg-[url('/images/QuneuProcess-bg-1.png')] bg-no-repeat bg-top-left bg-cover pt-12 md:pt-16 pb-8 md:pb-12 lg:pb-16 text-white overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.h2
          className={`${anta.className} text-stroke-light text-center
          text-5xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-9xl 2xl:text-[180px] 
          leading-5xl md:leading-7xl lg:leading-9xl xl:leading-[188px] 
          font-bold text-gray-100 drop-shadow`}
          variants={headingVariants} initial="initial" ref={Ref_title_1} animate={isInView_title_1 ? "animate" : "initial"}  >
          QUNEU PROCESS
        </motion.h2>
        <div className="qunueprocess-flow-wrapper relative">
          <Image src="/images/QuneuProcess-img-1.png" alt="quen process" width={1520} height={2630} />
          <div className="line_1">
            <svg width="337" height="379" viewBox="0 0 337 379" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="315" cy="22" r="21" fill="#0D1B1D" stroke="white" strokeWidth="2" />
              <path d="M301.5 38.5L332 10" stroke="white" />
              <path d="M316 25V1" stroke="white" />
              <circle cx="22" cy="357" r="21" fill="#0D1B1D" stroke="white" strokeWidth="2" />
              <path d="M23 360V336" stroke="white" />
              <path d="M23 335V52C23 35.4315 36.4315 22 53 22H293" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div className="line_2">
            <svg width="228" height="44" viewBox="0 0 228 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="206" cy="22" r="21" fill="#0D1B1D" stroke="white" strokeWidth="2" />
              <path d="M188 32.5L208 20.8333M224 11.5L208 20.8333M208 20.8333L212 42" stroke="white" strokeWidth="2" />
              <circle cx="22" cy="22" r="21" fill="#0D1B1D" stroke="white" strokeWidth="2" />
              <path d="M4 32.5L24 20.8333M40 11.5L24 20.8333M24 20.8333L28 42" stroke="white" strokeWidth="2" />
              <path d="M43 23H185" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div className="line_3">
            <svg width="442" height="235" viewBox="0 0 442 235" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="21" transform="matrix(-1 0 0 1 44 116)" fill="#0D1B1D" stroke="white" strokeWidth="2" />
              <path d="M40 148.5L20 136.833M4 127.5L20 136.833M20 136.833L16 158" stroke="white" strokeWidth="2" />
              <circle cx="22" cy="22" r="21" transform="matrix(-1 0 0 1 442 0)" fill="#0D1B1D" stroke="white" strokeWidth="2" />
              <path d="M438 32.5L418 20.8333M402 11.5L418 20.8333M418 20.8333L414 42" stroke="white" strokeWidth="2" />
              <path d="M22 159.5L22 204C22 220.569 35.4315 234 52 234H390C406.569 234 420 220.569 420 204V44" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <motion.div className="box_1" variants={boxVariants} initial="initial" ref={Ref_box_1} animate={isInView_box_1 ? "animate" : "initial"}>
            <h5 className={`title ${anta.className}`}>01 INGESTION</h5>
            <p className="description">Bringing data into QUNEU from any source so our platform can connect it, understand it, and turn it into intelligence.</p>
          </motion.div>
          <motion.div className="box_2" variants={boxVariants} initial="initial" ref={Ref_box_2} animate={isInView_box_2 ? "animate" : "initial"}>
            <h5 className={`title ${anta.className}`}>02 PROCESSING</h5>
            <h6 className="subTitle">AUTOMATED ONTOLOGY</h6>
            <p className="description">Automatically constructs and evolves your enterprise ontology knowledge map without human inter-vention</p>
          </motion.div>
          <motion.div className="box_3" variants={boxVariants} initial="initial" ref={Ref_box_3} animate={isInView_box_3 ? "animate" : "initial"}>
            <h5 className={`title ${anta.className}`}>03 OUTPUT</h5>
            <h6 className="subTitle">GRAPH VISUALIZATION MANAGEMENT</h6>
            <p className="description">Think of QUNEU’s proprietary knowledge graph as your business’s image dictionary—mapping all your data and relationships in one place so you can see the full picture and act with clarity.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default QunueProcess;