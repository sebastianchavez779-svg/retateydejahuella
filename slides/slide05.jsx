import { motion } from "framer-motion";
import { GIA_LOGO_SRC } from "../presentationConfig";
import { createSlide } from "./shared/createSlide";

function Slide05Component() {
  const errorChips = [
    { title: "Centro de costo", detail: "No coincide con area", left: 150, top: 118, absorbX: 365, absorbY: 202, delay: 1.0, status: "ERROR" },
    { title: "Fecha emision", detail: "Fuera de periodo", left: 885, top: 112, absorbX: -368, absorbY: 208, delay: 1.22, status: "ERROR" },
    { title: "Cierre mensual", detail: "Riesgo de descuadre", left: 195, top: 398, absorbX: 320, absorbY: -78, delay: 1.44, status: "ALERTA" },
    { title: "IGV", detail: "Inconsistencia detectada", left: 885, top: 390, absorbX: -368, absorbY: -70, delay: 1.66, status: "ERROR" },
    { title: "Clasificacion", detail: "Gasto vs activo", left: 515, top: 232, absorbX: 2, absorbY: 88, delay: 1.88, status: "ERROR" },
    { title: "Tipo documento", detail: "Validacion invalida", left: 515, top: 472, absorbX: 2, absorbY: -152, delay: 2.1, status: "ALERTA" },
  ];
  const advantages = [
    { title: "Deteccion automatica", detail: "Errores antes del cierre", top: 156, delay: 9.35 },
    { title: "Decisiones claras", detail: "Sin ambiguedad contable", top: 286, delay: 9.55 },
    { title: "Ahorro de tiempo", detail: "Menos revision manual", top: 416, delay: 9.75 },
  ];
  const routes = [
    { x1: 272, y1: 156, x2: 1007, y2: 150, delay: 1.22 },
    { x1: 1007, y1: 150, x2: 317, y2: 436, delay: 1.44 },
    { x1: 317, y1: 436, x2: 1007, y2: 428, delay: 1.66 },
    { x1: 1007, y1: 428, x2: 637, y2: 270, delay: 1.88 },
    { x1: 637, y1: 270, x2: 637, y2: 510, delay: 2.1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-white">
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundColor: "#ffffff" }}
        animate={{ backgroundColor: ["#ffffff", "#050509", "#050509", "#ffffff"] }}
        transition={{ duration: 6.3, times: [0, 0.16, 0.84, 1], ease: "easeInOut" }}
      />
      <motion.svg
        className="absolute inset-0 z-[1] h-full w-full"
        viewBox="0 0 1280 720"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.6, delay: 1.0, times: [0, 0.25, 1] }}
      >
        {routes.map((route, index) => (
          <motion.line
            key={index}
            x1={route.x1}
            y1={route.y1}
            x2={route.x2}
            y2={route.y2}
            stroke="rgba(255,77,109,0.62)"
            strokeWidth="2.4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0.9] }}
            transition={{ duration: 0.22, delay: route.delay, ease: [0.16, 1, 0.3, 1] }}
            style={{ filter: "drop-shadow(0 0 6px rgba(255,77,109,0.45)) drop-shadow(0 0 14px rgba(255,77,109,0.30))" }}
          />
        ))}
      </motion.svg>
      {errorChips.map((chip) => (
        <motion.div
          key={chip.title}
          className="absolute z-[4] w-[245px] rounded-[14px] border bg-white/95 py-[14px] pl-[48px] pr-4 shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
          style={{ left: chip.left, top: chip.top, borderColor: "rgba(0,0,0,0.08)", color: "#0B0B10" }}
          initial={{ opacity: 0, y: 26, scale: 0.72, filter: "blur(8px)" }}
          animate={{
            opacity: [0, 1, 1, 1, 0],
            y: [26, -4, 0, 0, chip.absorbY],
            x: [0, 0, 0, 0, chip.absorbX],
            scale: [0.72, 1.04, 1, 1.06, 0.03],
            filter: ["blur(8px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(8px)"],
          }}
          transition={{ duration: 2.9, delay: chip.delay, times: [0, 0.18, 0.38, 0.82, 1], ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="absolute bottom-3 left-4 top-3 w-1 rounded-full"
            style={{ background: "linear-gradient(180deg, #ff4d6d, #ff6b81)", boxShadow: "0 0 8px rgba(255,77,109,0.35)" }}
          />
          <div
            className="absolute right-3 top-2 rounded-full px-2 py-0.5 text-[10px] font-semibold"
            style={{ backgroundColor: "rgba(255,77,109,0.12)", color: "#ff4d6d" }}
          >
            {chip.status}
          </div>
          <strong className="mb-1 block text-[13px] font-semibold">{chip.title}</strong>
          <span className="text-xs" style={{ color: "rgba(0,0,0,0.45)" }}>
            {chip.detail}
          </span>
        </motion.div>
      ))}
      <div className="absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.62, x: 0, y: 0, filter: "blur(18px)" }}
          animate={{ opacity: [0, 1, 1, 1, 1], scale: [0.62, 1.12, 0.96, 1, 0.84], x: [0, 0, 0, 0, -285], y: [0, 0, 0, 0, 0], filter: ["blur(18px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(0px)"] }}
          transition={{ duration: 5.6, delay: 3.85, times: [0, 0.22, 0.36, 0.84, 1], ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="relative flex h-[640px] w-[640px] items-center justify-center"
            initial={{ scale: 0.55 }}
            animate={{ scale: [0.55, 1.22, 1, 1.05, 1, 1.05, 1] }}
            transition={{ duration: 3.15, delay: 3.85, times: [0, 0.25, 0.40, 0.58, 0.72, 0.86, 1], ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.8, 0.6, 0.8, 0.5], scale: [0.6, 1.3, 1.1, 1.2, 1] }}
              transition={{ duration: 3.2, delay: 3.85 }}
              style={{ background: "radial-gradient(circle, rgba(115,0,225,0.35), rgba(115,0,225,0.15), transparent 70%)", filter: "blur(25px)" }}
            />
            <img
              src={GIA_LOGO_SRC}
              alt="GIA"
              className="relative h-full w-full object-contain"
              style={{ filter: "drop-shadow(0 0 25px rgba(115,0,225,0.8))" }}
            />
          </motion.div>
        </motion.div>
      </div>
      {advantages.map((item) => (
        <motion.div
          key={item.title}
          className="absolute z-[4] w-[330px] rounded-[16px] border py-[20px] pl-[62px] pr-5 shadow-[0_14px_34px_rgba(0,0,0,0.12)]"
          style={{ left: 705, top: item.top, borderColor: "rgba(34,197,94,0.2)", backgroundColor: "rgba(240,253,244,0.92)", color: "#0B0B10" }}
          initial={{ opacity: 0, y: -180, scale: 0.94, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: [-180, 10, -5, 0], scale: [0.94, 1.03, 0.99, 1], filter: "blur(0px)" }}
          transition={{ duration: 0.72, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="absolute bottom-4 left-5 top-4 w-1.5 rounded-full"
            style={{ background: "linear-gradient(180deg, #22c55e, #4ade80)", boxShadow: "0 0 8px rgba(34,197,94,0.35)" }}
          />
          <div
            className="absolute right-4 top-3 rounded-full px-2.5 py-1 text-xs font-semibold"
            style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#16a34a" }}
          >
            OK
          </div>
          <strong className="mb-2 block text-[17px] font-semibold">{item.title}</strong>
          <span className="text-[14px]" style={{ color: "rgba(0,0,0,0.45)" }}>
            {item.detail}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default createSlide({
  id: "slide05",
  title: "Presentamos GIA",
  frame: "fullBleed",
  Component: Slide05Component,
});
