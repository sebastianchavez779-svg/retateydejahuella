import { motion } from "framer-motion";
import { BRAND } from "../presentationConfig";
import { createSlide } from "./shared/createSlide";

function GIAPointVisual() {
  const steps = ["Usuario", "Orden de compra", "Selección material", "Imputación", "Registro factura", "Pago"];

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative flex w-full max-w-[990px] items-center justify-between">
        {steps.map((step, index) => {
          const isCritical = step === "Selección material";

          return (
            <div key={step} className="relative flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative flex h-[120px] w-[142px] items-center justify-center rounded-[1.65rem] border text-center text-[17px] font-semibold backdrop-blur-2xl ${isCritical ? "z-10" : ""}`}
                style={{
                  background: isCritical ? "rgba(115,0,225,0.12)" : "rgba(255,255,255,0.55)",
                  borderColor: isCritical ? "rgba(115,0,225,0.28)" : "rgba(255,255,255,0.55)",
                  color: isCritical ? BRAND.purple : BRAND.body,
                  boxShadow: isCritical ? "0 0 42px rgba(115,0,225,0.20)" : "0 14px 30px rgba(20,20,40,0.07)",
                }}
              >
                {isCritical ? (
                  <motion.div
                    className="absolute -inset-2 rounded-[1.95rem]"
                    initial={{ opacity: 0.4, scale: 0.9 }}
                    animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.95, 1.06, 0.95] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    style={{ border: "1px solid rgba(115,0,225,0.18)" }}
                  />
                ) : null}
                <span className="relative z-10 max-w-[116px] leading-[1.25]">{step}</span>
                {isCritical ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.35 }}
                    className="absolute -top-14 flex items-center gap-2 rounded-full border border-white/50 bg-white/85 px-5 py-2.5 text-[13px] font-semibold shadow-[0_12px_24px_rgba(20,20,40,0.10)]"
                    style={{ color: BRAND.purple }}
                  >
                    <div className="h-2 w-2 rounded-full" style={{ background: BRAND.purple }} />
                    GIA interviene aquí
                  </motion.div>
                ) : null}
              </motion.div>
              {index < steps.length - 1 ? (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }}
                  className="absolute left-[130px] top-1/2 h-[3px] w-[58px] origin-left"
                  style={{
                    background: isCritical
                      ? "linear-gradient(90deg, rgba(115,0,225,0.65), rgba(74,191,255,0.35))"
                      : "rgba(191,191,191,0.45)",
                  }}
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.45 }}
        className="mt-12 rounded-[1.25rem] border border-white/50 bg-white/55 px-7 py-4 shadow-[0_18px_38px_rgba(20,20,40,0.08)] backdrop-blur-2xl"
      >
        <p className="text-[18px] font-semibold leading-tight tracking-[-0.02em]" style={{ color: BRAND.body }}>
          El usuario consulta. <span style={{ color: BRAND.purple }}>GIA lo guía antes de decidir.</span>
        </p>
      </motion.div>
    </div>
  );
}

function Slide06Component({ slide }) {
  return (
    <div className="flex h-full flex-col">
      <h1
        className="max-w-[860px] text-[3.5rem] font-bold leading-[1.02] tracking-[-0.04em]"
        style={{ color: BRAND.purple }}
      >
        {slide.title}
      </h1>

      <div className="flex flex-1 items-center justify-center">
        <GIAPointVisual />
      </div>

      <p
        className="mb-[58px] max-w-[860px] text-[16px] font-medium leading-[1.65]"
        style={{ color: "rgba(74,74,74,0.78)" }}
      >
        {slide.footer}
      </p>
    </div>
  );
}

export default createSlide({
  id: "slide06",
  title: "GIA interviene desde la selección del material",
  footer: "GIA acompaña al usuario en el punto de decisión para reducir errores antes del registro contable.",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide06Component,
});
