import { motion } from "framer-motion";
import { BRAND } from "../presentationConfig";
import { createSlide } from "./shared/createSlide";

function ReprocessVisual() {
  const kpis = [
    { value: "S/ 300K", label: "IGV en riesgo durante 2025", color: BRAND.yellow },
    { value: "120h", label: "Tiempo mensual en correcciones", color: BRAND.purple },
    { value: "5 personas", label: "Equipo involucrado en reproceso", color: BRAND.blue },
  ];

  return (
    <div className="grid w-full max-w-[1120px] grid-cols-[1.35fr_0.8fr] items-center justify-center gap-8 translate-y-3">
      <div className="relative min-h-[334px] overflow-visible rounded-[1.35rem] border border-white/55 bg-white/40 p-8 shadow-[0_22px_55px_rgba(20,20,40,0.08)] backdrop-blur-[28px]">
        <div className="relative mx-auto flex max-w-[540px] scale-[1.08] flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="w-[300px] rounded-xl border border-white/40 bg-white/35 px-4 py-3 text-center"
          >
            <p className="text-base font-semibold" style={{ color: BRAND.dark }}>
                Emisión de OC
            </p>
            <p className="text-sm" style={{ color: BRAND.muted }}>
                Selección de material incorrecto
            </p>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 24 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="w-[2px]"
            style={{ backgroundColor: "rgba(74,74,74,0.25)" }}
          />
          <div className="relative h-[40px] w-[360px]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="absolute top-0 h-[2px] w-full"
              style={{ backgroundColor: "rgba(74,74,74,0.25)" }}
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 40 }}
              transition={{ duration: 0.3, delay: 0.85 }}
              className="absolute left-0 top-0 w-[2px]"
              style={{ backgroundColor: "rgba(74,74,74,0.25)" }}
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 40 }}
              transition={{ duration: 0.3, delay: 0.85 }}
              className="absolute right-0 top-0 w-[2px]"
              style={{ backgroundColor: "rgba(255,77,79,0.70)" }}
            />
          </div>
          <div className="flex w-[420px] justify-between">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 1.1 }}
              className="w-[200px] rounded-xl border border-white/30 bg-white/15 px-3 py-3 text-center"
            >
              <p className="text-xs font-semibold" style={{ color: BRAND.muted }}>
                Pago fraccionado
              </p>
              <p className="text-sm" style={{ color: "rgba(90,90,90,0.8)" }}>
                Proveedor + Banco
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
              transition={{
                opacity: { duration: 0.35, delay: 1.1 },
                y: { duration: 0.35, delay: 1.1 },
                scale: { duration: 0.5, repeat: 2, repeatDelay: 0.18, delay: 1.1 },
              }}
              className="w-[220px] rounded-xl px-3 py-3 text-center"
              style={{ border: "1px solid rgba(255,77,79,0.70)", backgroundColor: "rgba(255,77,79,0.12)" }}
            >
              <p className="text-xs font-bold" style={{ color: BRAND.dangerText }}>
                  Factura sin detracción
              </p>
              <p className="text-xs" style={{ color: "rgba(229,72,77,0.80)" }}>
                registrada
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4">
        {kpis.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, scale: [1, 1.04, 1] }}
            transition={{
              opacity: { duration: 0.35, delay: 1.2 + index * 0.12 },
              x: { duration: 0.35, delay: 1.2 + index * 0.12 },
              scale: { duration: 0.6, repeat: 2, repeatDelay: 0.2, delay: 1.4 + index * 0.15 },
            }}
          className="rounded-full border border-white/40 bg-white/25 px-8 py-5 backdrop-blur-2xl"
        >
            <p className="text-[2.2rem] font-extrabold leading-none" style={{ color: item.color }}>
              {item.value}
            </p>
            <p className="mt-1.5 text-[15px] leading-snug" style={{ color: BRAND.muted }}>
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Slide04Component({ slide }) {
  return (
    <div className="flex h-full flex-col">
      <h1
        className="max-w-[860px] text-[3.5rem] font-bold leading-[1.02] tracking-[-0.04em]"
        style={{ color: BRAND.purple }}
      >
        {slide.title}
      </h1>

      <div className="flex flex-1 items-center justify-center">
        <ReprocessVisual />
      </div>

      <p
        className="mb-[58px] max-w-[700px] text-[16px] font-medium leading-[1.65]"
        style={{ color: "rgba(74,74,74,0.78)" }}
      >
        {slide.footer}
      </p>
    </div>
  );
}

export default createSlide({
  id: "slide04",
  title: "El error nace mucho antes del pago",
  footer: "El riesgo nace en errores de órdenes de compra y se acumula en reprocesos posteriores.",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide04Component,
});
