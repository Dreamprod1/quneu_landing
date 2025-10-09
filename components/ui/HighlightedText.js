"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const HighlightedTextCyan = ({ text, delay = 1 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const highlightWipe = {
        hidden: { '--highlightProgress': 0 },
        visible: (i) => ({ '--highlightProgress': '300%', transition: { duration: 1.5, delay: i * 0.5 } })
    };
    return (
        <motion.span
            ref={ref}
            className="HighlightedTextCyan_wrapper_1"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={highlightWipe}
            custom={delay}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );
};

export const HighlightedTextAmber = ({ text, delay = 1 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const highlightWipe = {
        hidden: { '--highlightProgress': 0 },
        visible: (i) => ({ '--highlightProgress': '300%', transition: { duration: 1.5, delay: i * 0.5 } })
    };
    return (
        <motion.span
            ref={ref}
            className="HighlightedTextAmber_wrapper_1"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={highlightWipe}
            custom={delay}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );
};

export const HighlightedText = ({ text, delay = 1 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const highlightWipe = {
        hidden: { '--highlightProgress': 0 },
        visible: (i) => ({ '--highlightProgress': '300%', transition: { duration: 1.5, delay: i * 0.5 } })
    };
    return (
        <motion.span
            ref={ref}
            className="HighlightedText_wrapper_1"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={highlightWipe}
            custom={delay}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );
};