import { motion } from "framer-motion";
import { BRAND } from "../presentationConfig";
import { createSlide } from "./shared/createSlide";

const WORD_TRANSITION = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1],
};

function Slide10Component() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden">
      <motion.div
        className="pointer-events-none absolute h-[310px] w-[310px] rounded-full opacity-35 blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(115,0,225,0.28), transparent 70%)" }}
        initial={{ scale: 0.78, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.h1
        className="relative z-10 flex flex-col items-center justify-center text-[132px] font-black uppercase leading-[0.78] tracking-[-0.065em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: [0, 0, -7, 6, -3, 2, 0], rotate: [0, 0, -0.6, 0.5, -0.25, 0.15, 0] }}
        transition={{
          opacity: { duration: 0.2 },
          x: { duration: 0.48, delay: 1.08, times: [0, 0.15, 0.33, 0.5, 0.66, 0.82, 1], ease: "easeOut" },
          rotate: { duration: 0.48, delay: 1.08, times: [0, 0.15, 0.33, 0.5, 0.66, 0.82, 1], ease: "easeOut" },
        }}
      >
        <motion.span
          className="block"
          initial={{ opacity: 0, x: -270, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
          transition={{ ...WORD_TRANSITION, delay: 0.12 }}
          style={{ color: BRAND.purple }}
        >
          DEMO
        </motion.span>
        <motion.span
          className="block"
          initial={{ opacity: 0, x: 270, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
          transition={{ ...WORD_TRANSITION, delay: 0.24 }}
          style={{ color: BRAND.yellow }}
        >
          TIME
        </motion.span>
      </motion.h1>
    </div>
  );
}

export default createSlide({
  id: "slide10",
  title: "DEMO TIME",
  layout: {
    padding: "pt-[5.2%] pb-[54px]",
  },
  Component: Slide10Component,
});
