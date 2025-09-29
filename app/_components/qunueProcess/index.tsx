"use client";
import { anta } from "@/lib/fonts";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const QunueProcess = () => {


  const headingVariants = { initial: { opacity: 0, y: -100 }, animate: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const groupVariants = { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8 } } };
  const boxVariants = { initial: { opacity: 0, scale: 0.2 }, animate: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1 } } };

  const Ref_title_1 = useRef(null);
  const isInView_title_1 = useInView(Ref_title_1, { once: true, amount: 0.2 });
  const Ref_group_1 = useRef(null);
  const isInView_group_1 = useInView(Ref_group_1, { once: true, amount: 0.2 });
  const Ref_group_2 = useRef(null);
  const isInView_group_2 = useInView(Ref_group_2, { once: true, amount: 0.2 });

  const Ref_box_1 = useRef(null);
  const isInView_box_1 = useInView(Ref_box_1, { once: true, amount: 0.2 });
  const Ref_box_2 = useRef(null);
  const isInView_box_2 = useInView(Ref_box_2, { once: true, amount: 0.2 });
  const Ref_box_3 = useRef(null);
  const isInView_box_3 = useInView(Ref_box_3, { once: true, amount: 0.2 });

  return (
    <div id="QunueProcess_section"
      className="relative bg-[url('/images/QuneuProcess-bg-1.png')] bg-no-r bg-top-left py-12 md:py-16 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className={`${anta.className} text-stroke-light text-[5.3rem] md:text-[6.3rem] lg:text-[9.3rem] font-bold mb-6 md:mb-8 lg:mb-10 text-gray-100 drop-shadow`}
          variants={headingVariants} initial="initial" ref={Ref_title_1} animate={isInView_title_1 ? "animate" : "initial"}  >
          QUNEU PROCESS
        </motion.h2>
        <div className="relative mt-24">
          <div>
            <Image src="/images/QuneuProcess-img-1.png" alt="quen process" width={1498} height={1939} />
          </div>
          <div className="relative -mt-[25rem] ml-[8rem]">
            <Image src="/images/QuneuProcess-item-2.png" alt="quen process" width={1286} height={1029} />
          </div>
          <motion.div className="absolute -top-[6rem]" variants={groupVariants} initial="initial" ref={Ref_group_1} animate={isInView_group_1 ? "animate" : "initial"}>
            <Image src="/images/QuneuProcess-group-2.png" alt="quen process" width={1430} height={355} />
          </motion.div>
          <motion.div className="absolute left-[37rem] top-[36rem]" variants={groupVariants} initial="initial" ref={Ref_group_2} animate={isInView_group_2 ? "animate" : "initial"}>
            <Image src="/images/QuneuProcess-group-1.png" alt="quen process" width={228} height={957} />
          </motion.div>
          <motion.div className="hidden lg:block absolute -left-[5rem] top-[15rem] max-w-[57%]" variants={boxVariants} initial="initial" ref={Ref_box_1} animate={isInView_box_1 ? "animate" : "initial"}>
            <Image src="/images/QuneuProcess-box-1.png" alt="quen process" width={838} height={552} />
          </motion.div>
          <motion.div className="hidden lg:block absolute left-[45rem] top-[54rem] max-w-[57%]" variants={boxVariants} initial="initial" ref={Ref_box_2} animate={isInView_box_2 ? "animate" : "initial"}>
            <Image src="/images/QuneuProcess-box-2.png" alt="quen process" width={839} height={307} />
          </motion.div>
          <motion.div className="hidden lg:block absolute -left-[9rem] top-[102rem] max-w-[57%]" variants={boxVariants} initial="initial" ref={Ref_box_3} animate={isInView_box_3 ? "animate" : "initial"}>
            <Image src="/images/QuneuProcess-box-3.png" alt="quen process" width={680} height={510} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QunueProcess;