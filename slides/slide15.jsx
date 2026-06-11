import { motion } from "framer-motion";
import slide15Photo from "../assets/Sharks.png";
import { createSlide } from "./shared/createSlide";

const EASE_OUT = [0.16, 1, 0.3, 1];

function Slide15Component() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <motion.div
        className="absolute left-[12%] top-[24%] z-0 h-[260px] w-[260px] rounded-full blur-[88px]"
        style={{ background: "rgba(177,220,107,0.16)" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.08, 1] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[12%] bottom-[20%] z-0 h-[260px] w-[260px] rounded-full blur-[88px]"
        style={{ background: "rgba(83,219,255,0.14)" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.08, 1] }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={slide15Photo}
        alt="Foto central"
        className="relative z-20 max-h-[78%] max-w-[82%] select-none rounded-[2rem] object-contain"
        style={{
          boxShadow:
            "0 28px 70px rgba(35,43,58,0.14), 0 0 40px rgba(177,220,107,0.12)",
        }}
        initial={{
          opacity: 0,
          y: 24,
          scale: 0.96,
          filter: "blur(12px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.78,
          delay: 0.18,
          ease: EASE_OUT,
        }}
      />
    </div>
  );
}

export default createSlide({
  id: "slide15",
  layout: {
    padding: "pt-[24px] pb-[24px]",
  },
  Component: Slide15Component,
});