// components/HighlightedText.js
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const highlightVariants = {
    hidden: { width: 0 },
    visible: (i) => ({
        width: "100%",
        transition: {
            duration: 1,
            ease: "easeInOut",
            delay: i * 0.5
        }
    })
};

export const HighlightedTextCyan = ({ text, delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <div ref={ref} className="relative inline-block overflow-hidden align-bottom">
            <span className="relative z-10">{text}</span>
            <motion.span className={`absolute bottom-0 left-0 h-3 bg-[#62B8CC] opacity-60 rounded-md`} 
             initial="hidden" animate={inView ? "visible" : "hidden"} variants={highlightVariants} custom={delay} />
        </div>
    );
};
export const HighlightedTextAmber = ({ text, delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <div ref={ref} className="relative inline-block overflow-hidden align-bottom">
            <span className="relative z-10">{text}</span>
            <motion.span className={`absolute bottom-0 left-0 h-3 bg-[#AE2637] opacity-60 rounded-md`} 
            initial="hidden" animate={inView ? "visible" : "hidden"} variants={highlightVariants} custom={delay} />
        </div>
    );
};
