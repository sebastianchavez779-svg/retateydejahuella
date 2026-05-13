import { motion } from "framer-motion";
import { BRAND } from "../presentationConfig";
import { createSlide } from "./shared/createSlide";

const lines = ["¿Cuánto dinero", "estuvo en riesgo", "en el 2025", "por errores en las", "órdenes de compra?"];

function Slide03Component() {
  return (
    <div className="flex h-full items-start justify-start">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="max-w-[1120px] text-[104px] font-bold leading-[0.92] tracking-[-0.055em]"
        style={{ color: BRAND.purple }}
      >
        {lines.map((line, index) => (
          <motion.span
            key={line}
            initial={{ opacity: 0, y: -30, filter: "blur(7px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default createSlide({
  id: "slide03",
  title: "¿Cuánto dinero estuvo en riesgo en el 2025 por errores en las órdenes de compra?",
  layout: {
    padding: "pt-[8%] pb-[96px]",
  },
  Component: Slide03Component,
});
