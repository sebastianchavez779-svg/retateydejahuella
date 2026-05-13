import { motion } from "framer-motion";
import { GIA_LOGO_SRC } from "../presentationConfig";
import { createSlide } from "./shared/createSlide";

function Slide01Component() {
  return (
    <div className="w-full pt-[10%]">
      <motion.img
        src={GIA_LOGO_SRC}
        alt="Logo GIA"
        className="mx-auto w-[50%] min-w-[460px] max-w-[760px] object-contain"
        initial={{ scale: 0.86, y: -180, rotate: -2 }}
        animate={{ scale: [0.86, 1.06, 0.97, 1], y: [-180, 24, -10, 0], rotate: [-2, 1.2, -0.5, 0] }}
        transition={{ duration: 0.95, delay: 0.15, times: [0, 0.62, 0.84, 1], ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default createSlide({
  id: "slide01",
  title: "GIA",
  subtitle: "Inteligencia aplicada a decisiones contables",
  footer: "Piloto IA â€“ Contabilidad 2025",
  layout: {
    padding: "pt-[8%] pb-[96px]",
  },
  Component: Slide01Component,
});
