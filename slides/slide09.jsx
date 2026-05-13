import { motion } from "framer-motion";
import { BRAND } from "../presentationConfig";
import { createSlide } from "./shared/createSlide";

const areas = [
  { label: "Gestión Inmobiliaria", x: 190, y: 96, tone: BRAND.blue },
  { label: "Comercial", x: 634, y: 94, tone: BRAND.yellow },
  { label: "Gestión Humana", x: 166, y: 250, tone: BRAND.purple },
  { label: "Operaciones", x: 656, y: 254, tone: BRAND.blue },
  { label: "DyC", x: 410, y: 308, tone: BRAND.yellow },
];

function Slide09Component({ slide }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      <h1
        className="relative z-10 max-w-[860px] text-[3.5rem] font-bold leading-[1.02] tracking-[-0.04em]"
        style={{ color: BRAND.purple }}
      >
        {slide.title}
      </h1>

      <div className="relative z-10 flex flex-1 items-center justify-center">
        <IntelligenceCore />
      </div>

      <p
        className="relative z-10 mb-[58px] max-w-[900px] text-[16px] font-medium leading-[1.65]"
        style={{ color: "rgba(74,74,74,0.78)" }}
      >
        {slide.footer}
      </p>
    </div>
  );
}

function IntelligenceCore() {
  return (
    <div className="relative h-[340px] w-[820px] -translate-y-3">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 820 340" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7300E1" stopOpacity="0.42" />
            <stop offset="52%" stopColor="#4ABFFF" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="410" cy="178" r="142" fill="url(#coreGlow)" opacity="0.72" />
        <motion.circle
          cx="410"
          cy="178"
          r="112"
          fill="none"
          stroke="rgba(115,0,225,0.14)"
          strokeWidth="1.4"
          strokeDasharray="8 12"
          initial={{ rotate: 0, pathLength: 0, opacity: 0 }}
          animate={{ rotate: 360, pathLength: 1, opacity: 1 }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, pathLength: { duration: 1.1, delay: 0.3 } }}
          style={{ transformOrigin: "410px 178px" }}
        />
        <motion.circle
          cx="410"
          cy="178"
          r="70"
          fill="none"
          stroke="rgba(74,191,255,0.22)"
          strokeWidth="1.2"
          strokeDasharray="5 10"
          initial={{ rotate: 0, pathLength: 0, opacity: 0 }}
          animate={{ rotate: -360, pathLength: 1, opacity: 1 }}
          transition={{ rotate: { duration: 16, repeat: Infinity, ease: "linear" }, pathLength: { duration: 1, delay: 0.42 } }}
          style={{ transformOrigin: "410px 178px" }}
        />

        {areas.map((area, index) => (
          <motion.path
            key={area.label}
            d={pathTo(area.x, area.y)}
            stroke={area.tone}
            strokeOpacity="0.30"
            strokeWidth="1.45"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.48 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}

        {areas.map((area, index) => (
          <motion.circle
            key={`${area.label}-spark`}
            cx={area.x}
            cy={area.y}
            r="3.5"
            fill={area.tone}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0.35, 1, 0.35], scale: [0.8, 1.35, 0.8] }}
            transition={{ duration: 2.2, delay: 0.9 + index * 0.14, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-[178px] z-20 h-[154px] w-[154px] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.82, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-full w-full flex-col items-center justify-center rounded-full border border-white/75 bg-white/60 text-center shadow-[0_28px_80px_rgba(80,20,180,0.20)] backdrop-blur-2xl"
        >
        <div
          className="absolute inset-3 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.86), rgba(115,0,225,0.08), rgba(74,191,255,0.08))" }}
        />
        <p className="relative z-10 text-[44px] font-black leading-none tracking-[-0.06em]" style={{ color: BRAND.purple }}>
          GIA
        </p>
        <p className="relative z-10 mt-2 max-w-[106px] text-[8px] font-bold uppercase leading-[1.25] tracking-[0.09em]" style={{ color: BRAND.body }}>
          Asistente inteligente para la operación
        </p>
        </motion.div>
      </div>

      {areas.map((area, index) => (
        <OrgNode key={area.label} area={area} index={index} />
      ))}
    </div>
  );
}

function OrgNode({ area, index }) {
  return (
    <div
      className="absolute z-30"
      style={{
        left: area.x,
        top: area.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.46, delay: 0.72 + index * 0.09, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 rounded-full border border-white/70 bg-white/62 py-3 pl-3 pr-5 shadow-[0_16px_36px_rgba(20,20,40,0.08)] backdrop-blur-2xl"
      >
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ background: area.tone }}>
          <span className="absolute inset-0 rounded-full opacity-30 blur-md" style={{ background: area.tone }} />
          <span className="relative h-2 w-2 rounded-full bg-white" />
        </span>
        <span className="whitespace-nowrap text-[13px] font-extrabold leading-none tracking-[-0.015em]" style={{ color: BRAND.dark }}>
          {area.label}
        </span>
      </motion.div>
    </div>
  );
}

function pathTo(x, y) {
  const cx = 410;
  const cy = 178;
  const midX = (cx + x) / 2;
  const curve = y < cy ? -42 : 42;
  return `M ${cx} ${cy} C ${midX} ${cy + curve}, ${midX} ${y - curve}, ${x} ${y}`;
}

export default createSlide({
  id: "slide09",
  title: "Una inteligencia diseñada para expandirse",
  footer: "La verdadera transformación comienza cuando la tecnología deja de ser una herramienta y se convierte en parte de toda la organización.",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide09Component,
});
