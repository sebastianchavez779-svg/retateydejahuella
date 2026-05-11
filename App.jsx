import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, GIA_LOGO_SRC, slides, styles, validateSlides } from "./presentationConfig";
import { usePresentation } from "./usePresentation";

function AdoptionVisual() {
  const circumference = 2 * Math.PI * 82;
  return (
    <div className="mt-0 grid w-full max-w-[1000px] grid-cols-[0.92fr_1.08fr] items-center gap-10">
      <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative flex items-center justify-center">
        <div className="absolute h-[250px] w-[250px] rounded-full blur-2xl" style={{ background: "radial-gradient(circle, rgba(255,199,64,0.25), rgba(115,0,225,0.10), transparent 70%)" }} />
        <svg width="225" height="225" viewBox="0 0 230 230" className="relative -rotate-90 scale-[1.03]">
          <circle cx="115" cy="115" r="82" stroke="rgba(191,191,191,0.16)" strokeWidth="22" fill="none" />
          <motion.circle cx="115" cy="115" r="82" stroke="url(#adoptionGrad)" strokeWidth="22" strokeLinecap="round" strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }} animate={{ strokeDashoffset: circumference * 0.96 }} transition={{ duration: 1.15, ease: "easeOut", delay: 0.15 }} fill="none" />
          <defs>
            <linearGradient id="adoptionGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={BRAND.purple} stopOpacity="0.9" />
              <stop offset="100%" stopColor={BRAND.yellow} stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.75 }} className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
          <span className="text-[68px] font-bold leading-none" style={{ color: BRAND.yellowText }}>4%</span>
          <span className="mt-1 text-[13px] font-semibold uppercase tracking-[0.2em]" style={{ color: BRAND.muted }}>usa IA</span>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.42 }} className="justify-self-center w-full max-w-[600px] rounded-[1.4rem] border border-white/45 bg-white/35 px-8 py-7 shadow-[0_20px_50px_rgba(20,20,40,0.08)] backdrop-blur-2xl">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white/30" style={{ borderColor: "rgba(115,0,225,0.15)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 18V9" stroke={BRAND.purple} strokeWidth="2" strokeLinecap="round" /><path d="M12 18V5" stroke={BRAND.purple} strokeWidth="2" strokeLinecap="round" /><path d="M18 18v-7" stroke={BRAND.purple} strokeWidth="2" strokeLinecap="round" /><path d="M4 18h16" stroke={BRAND.purple} strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
          <div className="space-y-3.5">
            <p className={styles.label} style={{ color: "rgba(115,0,225,0.75)" }}>El resultado</p>
            <p className="text-[22px] leading-[1.55]" style={{ color: BRAND.body }}>Procesos manuales, lentitud operativa y equipos contables consumiendo hasta <span className="font-bold" style={{ color: BRAND.yellowText }}>120 horas al mes</span> en tareas que no generan valor directo.</p>
            <div className="mt-1 h-2 overflow-hidden rounded-full" style={{ backgroundColor: "rgba(191,191,191,0.25)" }}>
              <motion.div initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ duration: 0.9, delay: 0.75 }} className="h-full rounded-full" style={{ background: "linear-gradient(90deg, rgba(115,0,225,0.70), rgba(74,191,255,0.65), rgba(255,199,64,0.75))" }} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function QuestionSlide() {
  const lines = ["¿Cuánto dinero", "estuvo en riesgo", "en el 2025", "por errores en las", "órdenes de compra?"];
  return (
    <div className="flex h-full items-start justify-start">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} className="text-[74px] font-bold leading-[0.95] tracking-[-0.055em]" style={{ color: BRAND.purple }}>
        {lines.map((line, index) => (
          <motion.span key={line} initial={{ opacity: 0, y: -30, filter: "blur(7px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.5, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }} className="block">{line}</motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

function ReprocessVisual() {
  const kpis = [
    { value: "S/ 300K", label: "IGV en riesgo durante 2025", color: BRAND.yellow },
    { value: "120h", label: "Tiempo mensual en correcciones", color: BRAND.purple },
    { value: "5 personas", label: "Equipo involucrado en reproceso", color: BRAND.blue },
  ];
  return (
    <div className="mt-0 grid max-w-[940px] grid-cols-[1.2fr_0.8fr] gap-6">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/30 bg-white/20 p-6 backdrop-blur-xl">
        <div className="relative mx-auto flex max-w-[460px] scale-[0.98] flex-col items-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="w-[300px] rounded-xl border border-white/40 bg-white/35 px-4 py-3 text-center">
            <p className="text-base font-semibold" style={{ color: BRAND.dark }}>Emisión de OC</p><p className="text-sm" style={{ color: BRAND.muted }}>Selección de material incorrecto</p>
          </motion.div>
          <motion.div initial={{ height: 0 }} animate={{ height: 24 }} transition={{ duration: 0.3, delay: 0.25 }} className="w-[2px]" style={{ backgroundColor: "rgba(74,74,74,0.25)" }} />
          <div className="relative h-[40px] w-[360px]"><motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.4, delay: 0.55 }} className="absolute top-0 h-[2px] w-full" style={{ backgroundColor: "rgba(74,74,74,0.25)" }} /><motion.div initial={{ height: 0 }} animate={{ height: 40 }} transition={{ duration: 0.3, delay: 0.85 }} className="absolute left-0 top-0 w-[2px]" style={{ backgroundColor: "rgba(74,74,74,0.25)" }} /><motion.div initial={{ height: 0 }} animate={{ height: 40 }} transition={{ duration: 0.3, delay: 0.85 }} className="absolute right-0 top-0 w-[2px]" style={{ backgroundColor: "rgba(255,77,79,0.70)" }} /></div>
          <div className="flex w-[420px] justify-between">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 1.1 }} className="w-[200px] rounded-xl border border-white/30 bg-white/15 px-3 py-3 text-center"><p className="text-xs font-semibold" style={{ color: BRAND.muted }}>Pago fraccionado</p><p className="text-sm" style={{ color: "rgba(90,90,90,0.8)" }}>Proveedor + Banco</p></motion.div>
            <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }} transition={{ opacity: { duration: 0.35, delay: 1.1 }, y: { duration: 0.35, delay: 1.1 }, scale: { duration: 0.5, repeat: 2, repeatDelay: 0.18, delay: 1.1 } }} className="w-[220px] rounded-xl px-3 py-3 text-center" style={{ border: "1px solid rgba(255,77,79,0.70)", backgroundColor: "rgba(255,77,79,0.12)" }}><p className="text-xs font-bold" style={{ color: BRAND.dangerText }}>Factura sin detracción</p><p className="text-xs" style={{ color: "rgba(229,72,77,0.80)" }}>registrada</p></motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4">
        {kpis.map((item, index) => (<motion.div key={item.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0, scale: [1, 1.04, 1] }} transition={{ opacity: { duration: 0.35, delay: 1.2 + index * 0.12 }, x: { duration: 0.35, delay: 1.2 + index * 0.12 }, scale: { duration: 0.6, repeat: 2, repeatDelay: 0.2, delay: 1.4 + index * 0.15 } }} className="rounded-full border border-white/40 bg-white/25 px-7 py-4 backdrop-blur-2xl"><p className="text-3xl font-extrabold leading-none" style={{ color: item.color }}>{item.value}</p><p className="mt-1 text-sm" style={{ color: BRAND.muted }}>{item.label}</p></motion.div>))}
      </div>
    </div>
  );
}

function GIAIntro() {
  const errorChips = [
    { title: "Centro de costo", detail: "No coincide con área", left: 120, top: 120, absorbX: 245, absorbY: 115, delay: 1.0, status: "ERROR" },
    { title: "Fecha emisión", detail: "Fuera de periodo", left: 610, top: 112, absorbX: -245, absorbY: 123, delay: 1.22, status: "ERROR" },
    { title: "Cierre mensual", detail: "Riesgo de descuadre", left: 160, top: 330, absorbX: 205, absorbY: -95, delay: 1.44, status: "ALERTA" },
    { title: "IGV", detail: "Inconsistencia detectada", left: 630, top: 318, absorbX: -265, absorbY: -83, delay: 1.66, status: "ERROR" },
    { title: "Clasificación", detail: "Gasto vs activo", left: 365, top: 205, absorbX: 0, absorbY: 30, delay: 1.88, status: "ERROR" },
    { title: "Tipo documento", detail: "Validación inválida", left: 365, top: 390, absorbX: 0, absorbY: -155, delay: 2.1, status: "ALERTA" },
  ];
  const advantages = [
    { title: "Detección automática", detail: "Errores antes del cierre", top: 145, delay: 9.35 },
    { title: "Decisiones claras", detail: "Sin ambigüedad contable", top: 240, delay: 9.55 },
    { title: "Ahorro de tiempo", detail: "Menos revisión manual", top: 335, delay: 9.75 },
  ];
  const routes = [
    { x1: 235, y1: 150, x2: 725, y2: 142, delay: 1.22 }, { x1: 725, y1: 142, x2: 275, y2: 360, delay: 1.44 }, { x1: 275, y1: 360, x2: 745, y2: 348, delay: 1.66 }, { x1: 745, y1: 348, x2: 480, y2: 235, delay: 1.88 }, { x1: 480, y1: 235, x2: 480, y2: 420, delay: 2.1 },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-white">
      <motion.div className="absolute inset-0" initial={{ backgroundColor: "#ffffff" }} animate={{ backgroundColor: ["#ffffff", "#050509", "#050509", "#ffffff"] }} transition={{ duration: 6.3, times: [0, 0.16, 0.84, 1], ease: "easeInOut" }} />
      <motion.svg className="absolute inset-0 z-[1] h-full w-full" viewBox="0 0 960 540" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.6, delay: 1.0, times: [0, 0.25, 1] }}>{routes.map((r, i) => (<motion.line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke="rgba(255,77,109,0.62)" strokeWidth="2.4" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: [0, 1, 0.9] }} transition={{ duration: 0.22, delay: r.delay, ease: [0.16, 1, 0.3, 1] }} style={{ filter: "drop-shadow(0 0 6px rgba(255,77,109,0.45)) drop-shadow(0 0 14px rgba(255,77,109,0.30))" }} />))}</motion.svg>
      {errorChips.map((chip) => (<motion.div key={chip.title} className="absolute z-[4] w-[230px] rounded-[14px] border bg-white/95 py-[14px] pl-[48px] pr-4 shadow-[0_10px_28px_rgba(0,0,0,0.12)]" style={{ left: chip.left, top: chip.top, borderColor: "rgba(0,0,0,0.08)", color: "#0B0B10" }} initial={{ opacity: 0, y: 26, scale: 0.72, filter: "blur(8px)" }} animate={{ opacity: [0, 1, 1, 1, 0], y: [26, -4, 0, 0, chip.absorbY], x: [0, 0, 0, 0, chip.absorbX], scale: [0.72, 1.04, 1, 1.06, 0.03], filter: ["blur(8px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(8px)"] }} transition={{ duration: 2.9, delay: chip.delay, times: [0, 0.18, 0.38, 0.82, 1], ease: [0.16, 1, 0.3, 1] }}><div className="absolute bottom-3 left-4 top-3 w-1 rounded-full" style={{ background: "linear-gradient(180deg, #ff4d6d, #ff6b81)", boxShadow: "0 0 8px rgba(255,77,109,0.35)" }} /><div className="absolute right-3 top-2 rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: "rgba(255,77,109,0.12)", color: "#ff4d6d" }}>{chip.status}</div><strong className="mb-1 block text-[13px] font-semibold">{chip.title}</strong><span className="text-xs" style={{ color: "rgba(0,0,0,0.45)" }}>{chip.detail}</span></motion.div>))}
      <motion.div className="absolute left-1/2 top-1/2 z-[5] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center" initial={{ opacity: 0, scale: 0.62, x: 0, filter: "blur(18px)" }} animate={{ opacity: [0, 1, 1, 1, 1], scale: [0.62, 1.12, 0.96, 1, 0.82], x: [0, 0, 0, 0, -235], filter: ["blur(18px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(0px)"] }} transition={{ duration: 5.6, delay: 3.85, times: [0, 0.22, 0.36, 0.84, 1], ease: [0.16, 1, 0.3, 1] }}><motion.div className="relative flex h-[220px] w-[220px] items-center justify-center" initial={{ scale: 0.55 }} animate={{ scale: [0.55, 1.22, 1, 1.05, 1, 1.05, 1] }} transition={{ duration: 3.15, delay: 3.85, times: [0, 0.25, 0.40, 0.58, 0.72, 0.86, 1], ease: [0.16, 1, 0.3, 1] }}><motion.div className="absolute inset-0 rounded-full" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: [0, 0.8, 0.6, 0.8, 0.5], scale: [0.6, 1.3, 1.1, 1.2, 1] }} transition={{ duration: 3.2, delay: 3.85 }} style={{ background: "radial-gradient(circle, rgba(115,0,225,0.35), rgba(115,0,225,0.15), transparent 70%)", filter: "blur(25px)" }} /><img src={GIA_LOGO_SRC} alt="GIA" className="relative h-full w-full object-contain" style={{ filter: "drop-shadow(0 0 25px rgba(115,0,225,0.8))" }} /></motion.div><div className="mt-5 text-center text-[80px] font-extrabold leading-none" style={{ color: "#6d28d9" }}>GIA</div><div className="mt-2 text-center text-xl" style={{ color: "#444" }}>La guía contable</div></motion.div>
      {advantages.map((item) => (<motion.div key={item.title} className="absolute z-[4] w-[230px] rounded-[14px] border py-[14px] pl-[48px] pr-4 shadow-[0_10px_28px_rgba(0,0,0,0.10)]" style={{ left: 570, top: item.top, borderColor: "rgba(34,197,94,0.2)", backgroundColor: "rgba(240,253,244,0.92)", color: "#0B0B10" }} initial={{ opacity: 0, y: -180, scale: 0.94, filter: "blur(6px)" }} animate={{ opacity: 1, y: [-180, 10, -5, 0], scale: [0.94, 1.03, 0.99, 1], filter: "blur(0px)" }} transition={{ duration: 0.72, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}><div className="absolute bottom-3 left-4 top-3 w-1 rounded-full" style={{ background: "linear-gradient(180deg, #22c55e, #4ade80)", boxShadow: "0 0 8px rgba(34,197,94,0.35)" }} /><div className="absolute right-3 top-2 rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#16a34a" }}>OK</div><strong className="mb-1 block text-[13px] font-semibold">{item.title}</strong><span className="text-xs" style={{ color: "rgba(0,0,0,0.45)" }}>{item.detail}</span></motion.div>))}
    </div>
  );
}

function GIAPointVisual() {
  const steps = ["Usuario", "Orden de compra", "Selección material", "Imputación", "Registro factura", "Pago"];
  return (
    <div className="mt-6 flex w-full flex-col items-center">
      <div className="relative flex w-full max-w-[860px] items-center justify-between">
        {steps.map((step, index) => {
          const isCritical = step === "Selección material";
          return (<div key={step} className="relative flex flex-col items-center"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.08 }} className={`relative flex h-[90px] w-[118px] items-center justify-center rounded-[1.4rem] border text-center text-sm font-semibold backdrop-blur-2xl ${isCritical ? "z-10" : ""}`} style={{ background: isCritical ? "rgba(115,0,225,0.12)" : "rgba(255,255,255,0.55)", borderColor: isCritical ? "rgba(115,0,225,0.28)" : "rgba(255,255,255,0.55)", color: isCritical ? BRAND.purple : BRAND.body, boxShadow: isCritical ? "0 0 35px rgba(115,0,225,0.18)" : "0 10px 24px rgba(20,20,40,0.06)" }}>{isCritical && <motion.div className="absolute -inset-2 rounded-[1.7rem]" initial={{ opacity: 0.4, scale: 0.9 }} animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.95, 1.06, 0.95] }} transition={{ duration: 1.8, repeat: Infinity }} style={{ border: "1px solid rgba(115,0,225,0.18)" }} />}<span className="relative z-10 max-w-[90px] leading-5">{step}</span>{isCritical && <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.35 }} className="absolute -top-12 flex items-center gap-2 rounded-full border border-white/50 bg-white/85 px-4 py-2 text-xs font-semibold shadow-[0_12px_24px_rgba(20,20,40,0.10)]" style={{ color: BRAND.purple }}><div className="h-2 w-2 rounded-full" style={{ background: BRAND.purple }} />GIA interviene aquí</motion.div>}</motion.div>{index < steps.length - 1 && <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }} className="absolute left-[108px] top-1/2 h-[2px] w-[52px] origin-left" style={{ background: isCritical ? "linear-gradient(90deg, rgba(115,0,225,0.65), rgba(74,191,255,0.35))" : "rgba(191,191,191,0.45)" }} />}</div>);
        })}
      </div>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.45 }} className="mt-10 rounded-[1.5rem] border border-white/50 bg-white/55 px-7 py-5 shadow-[0_18px_38px_rgba(20,20,40,0.08)] backdrop-blur-2xl"><p className="text-lg font-semibold tracking-[-0.02em]" style={{ color: BRAND.body }}>El usuario consulta. <span style={{ color: BRAND.purple }}>GIA lo guía antes de decidir.</span></p></motion.div>
    </div>
  );
}

function BackendVisual() {
  const knowledge = [
    { title: "Prompt maestro", detail: "Define preguntas, criterios y lógica de guía", icon: "chat", color: BRAND.purple },
    { title: "Políticas Real Plaza", detail: "Reglas internas y lineamientos corporativos", icon: "shield", color: BRAND.blue },
    { title: "SPOT SUNAT", detail: "Validación tributaria automatizada", icon: "check", color: "#35D4C2" },
    { title: "Catálogo de materiales", detail: "Códigos, descripciones y reglas de uso", icon: "book", color: "#2B7FFF" },
  ];

  return (
    <div className="relative mt-0 h-[365px] w-full overflow-visible">
      <div
        className="pointer-events-none absolute -left-24 top-40 h-40 w-40 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(115,0,225,0.18), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-4 h-44 w-44 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(74,191,255,0.22), transparent 70%)" }}
      />

      <div className="grid h-full grid-cols-[0.95fr_1.18fr_0.95fr] items-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="relative z-10"
        >
          <div className="mb-3 flex items-center gap-3 pl-8">
            <IconBox type="arrow" color={BRAND.purple} subtle />
            <div>
              <p className="text-[13px] font-extrabold uppercase tracking-[0.12em]" style={{ color: BRAND.purple }}>Entrada</p>
              <p className="text-xs" style={{ color: BRAND.muted }}>Conversación + contexto</p>
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-white/65 bg-white/64 p-5 shadow-[0_20px_55px_rgba(20,20,40,0.10)] backdrop-blur-2xl">
            <div className="mb-4 flex items-center gap-4">
              <IconBox type="teams" color={BRAND.purple} />
              <div>
                <p className="text-lg font-extrabold tracking-[-0.03em]" style={{ color: BRAND.dark }}>Microsoft Teams</p>
                <p className="text-sm" style={{ color: BRAND.body }}>Chat integrado</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative rounded-[1.1rem] rounded-br-sm bg-white px-4 py-4 text-base leading-6 shadow-[0_14px_32px_rgba(20,20,40,0.08)]" style={{ color: BRAND.dark }}>
                ¿Qué material debo colocar para esta compra?
                <div className="absolute -right-2 bottom-3 h-4 w-4 rotate-45 bg-white" />
              </div>

              <div className="flex items-center gap-3 rounded-[1.2rem] px-4 py-4 shadow-[0_14px_32px_rgba(115,0,225,0.12)]" style={{ background: "linear-gradient(135deg, rgba(115,0,225,0.18), rgba(115,0,225,0.08))" }}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, #7300E1, #5F35FF)", color: "white" }}>
                  <SparkleIcon />
                </div>
                <p className="text-sm font-bold leading-5" style={{ color: "#3A1386" }}>
                  GIA pregunta lo necesario para entender el contexto.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-20 flex h-[300px] flex-col items-center justify-center rounded-[2rem] border border-white/80 text-center shadow-[0_28px_80px_rgba(80,20,180,0.24)] backdrop-blur-3xl"
          style={{ background: "linear-gradient(180deg, rgba(115,0,225,0.86), rgba(47,26,154,0.96))" }}
        >
          <div className="absolute inset-0 rounded-[2rem] border border-white/35" />
          <div className="absolute inset-5 rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.55), transparent 58%)" }} />
          <div className="absolute -inset-2 rounded-[2.2rem] border border-white/55 opacity-70" />

          <p className="relative z-10 text-[16px] font-extrabold uppercase tracking-[0.35em] text-white/90">Agente</p>

          <div className="relative z-10 mt-4 flex h-[95px] w-[95px] items-center justify-center rounded-full border border-white/45" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.25), rgba(255,255,255,0.08))", boxShadow: "0 0 38px rgba(255,255,255,0.35), inset 0 0 22px rgba(255,255,255,0.18)" }}>
            <BrainIcon />
          </div>

          <p className="relative z-10 mt-5 text-[54px] font-black leading-none tracking-[-0.06em] text-white">GIA</p>
          <p className="relative z-10 mt-2 text-lg font-medium text-white/90">Microsoft Copilot Studio</p>

          <div className="relative z-10 mt-5 flex w-[80%] items-center justify-around rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold text-white/90 backdrop-blur-xl">
            <span>Razona</span>
            <span className="text-white/35">|</span>
            <span>Sintetiza</span>
            <span className="text-white/35">|</span>
            <span>Valida</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="relative z-10"
        >
          <div className="mb-3 flex items-center gap-3 pl-4">
            <IconBox type="database" color={BRAND.purple} subtle />
            <div>
              <p className="text-[13px] font-extrabold uppercase tracking-[0.12em]" style={{ color: BRAND.purple }}>Conocimiento</p>
              <p className="text-xs" style={{ color: BRAND.muted }}>Fuentes corporativas</p>
            </div>
          </div>

          <div className="space-y-2.5">
            {knowledge.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.55 + index * 0.08 }}
                className="flex items-center gap-4 rounded-[1.1rem] border border-white/65 bg-white/70 px-4 py-3 shadow-[0_14px_32px_rgba(20,20,40,0.08)] backdrop-blur-2xl"
              >
                <IconBox type={item.icon} color={item.color} />
                <div>
                  <p className="text-base font-extrabold tracking-[-0.02em]" style={{ color: BRAND.dark }}>{item.title}</p>
                  <p className="text-xs leading-4" style={{ color: BRAND.body }}>{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <svg className="pointer-events-none absolute left-0 top-0 z-[15] h-full w-full" viewBox="0 0 880 365" fill="none" aria-hidden="true">
        <ConnectionPath d="M272 218 C 330 218, 345 218, 392 218" delay={0.65} />
        <ConnectionPath d="M488 218 C 540 218, 560 160, 613 155" delay={0.82} />
        <ConnectionPath d="M488 218 C 540 218, 560 218, 613 218" delay={0.92} />
        <ConnectionPath d="M488 218 C 540 218, 560 276, 613 280" delay={1.02} />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.45 }}
        className="absolute bottom-[-6px] left-1/2 z-30 grid w-[610px] -translate-x-1/2 grid-cols-[0.72fr_1.28fr_auto] items-center gap-5 rounded-[1.4rem] border border-white/70 bg-white/78 px-5 py-4 shadow-[0_22px_55px_rgba(20,20,40,0.12)] backdrop-blur-2xl"
      >
        <div className="flex items-center gap-3">
          <IconBox type="result" color={BRAND.purple} />
          <div>
            <p className="text-lg font-extrabold tracking-[-0.03em]" style={{ color: BRAND.dark }}>Resultado</p>
            <p className="text-xs" style={{ color: BRAND.body }}>Lo que GIA entrega</p>
          </div>
        </div>
        <div className="h-10 w-px bg-slate-300/70" />
        <div className="flex items-center gap-5">
          <p className="text-lg font-extrabold leading-6 tracking-[-0.03em]" style={{ color: BRAND.dark }}>
            <span style={{ color: BRAND.purple }}>Código de material recomendado</span>
            <br />+ criterio explicado
          </p>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2" style={{ borderColor: "#35D4C2", color: "#35D4C2" }}>
            <CheckMiniIcon />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function IconBox({ type, color, subtle = false }) {
  return (
    <div className={subtle ? "flex h-8 w-8 items-center justify-center rounded-lg" : "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-[0_10px_22px_rgba(20,20,40,0.08)]"} style={{ background: subtle ? "transparent" : color, color: subtle ? color : "white" }}>
      {type === "teams" && <TeamsIcon />}
      {type === "chat" && <ChatIcon />}
      {type === "shield" && <ShieldIcon />}
      {type === "check" && <CheckCircleIcon />}
      {type === "book" && <BookIcon />}
      {type === "database" && <DatabaseIcon />}
      {type === "arrow" && <ArrowBoxIcon />}
      {type === "result" && <ResultIcon />}
    </div>
  );
}

function ConnectionPath({ d, delay }) {
  return (
    <motion.path
      d={d}
      stroke="rgba(115,0,225,0.42)"
      strokeWidth="2.2"
      strokeDasharray="5 7"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.7, delay }}
      style={{ filter: "drop-shadow(0 0 6px rgba(115,0,225,0.25))" }}
    />
  );
}

function TeamsIcon() {
  return <span className="text-lg font-black">T</span>;
}
function SparkleIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3zM6 14l.9 2.1L9 17l-2.1.9L6 20l-.9-2.1L3 17l2.1-.9L6 14zM18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14z" fill="currentColor" /></svg>;
}
function BrainIcon() {
  return <svg width="54" height="54" viewBox="0 0 24 24" fill="none"><path d="M9 4.5C7.2 4.5 6 5.8 6 7.3c-1.2.4-2 1.5-2 2.8 0 1 .5 1.9 1.2 2.4-.2.4-.3.8-.3 1.3 0 1.7 1.3 3 3 3h1.2V4.5zM15 4.5c1.8 0 3 1.3 3 2.8 1.2.4 2 1.5 2 2.8 0 1-.5 1.9-1.2 2.4.2.4.3.8.3 1.3 0 1.7-1.3 3-3 3H15V4.5z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 8.5c-1.1 0-2 .9-2 2M15 8.5c1.1 0 2 .9 2 2M9 13c-1 .1-1.7.8-1.9 1.8M15 13c1 .1 1.7.8 1.9 1.8" stroke="white" strokeWidth="1.4" strokeLinecap="round" /></svg>;
}
function ChatIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 6.5h14v8H9l-4 3v-11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>; }
function ShieldIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.4-2.8 8-7 10-4.2-2-7-5.6-7-10V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>; }
function CheckCircleIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" /><path d="M8.5 12.2l2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function BookIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 5.5c0-.8.7-1.5 1.5-1.5H11v14H6.5A1.5 1.5 0 015 16.5v-11zM19 5.5c0-.8-.7-1.5-1.5-1.5H13v14h4.5c.8 0 1.5-.7 1.5-1.5v-11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>; }
function DatabaseIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="2" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth="2" /></svg>; }
function ArrowBoxIcon() { return <svg width="23" height="23" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2" rx="3" /><path d="M9 12h6M13 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function ResultIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 4h10v16H7z" stroke="currentColor" strokeWidth="2" /><path d="M9.5 9h5M9.5 12h5M9.5 15h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>; }
function CheckMiniIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 12.5l3.5 3.5L18 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>; }

function BubbleDot() {
  return <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/65 bg-white/75 shadow-[0_10px_24px_rgba(20,20,40,0.08)]"><div className="h-4 w-4 rounded-full" style={{ background: "linear-gradient(135deg,#7300E1,#4ABFFF)", boxShadow: "0 0 16px rgba(115,0,225,0.35)" }} /></div>;
}

function BackendPath({ d, delay }) {
  return <motion.path d={d} stroke="rgba(255,255,255,0.95)" strokeWidth="10" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.6, delay }} style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.9))" }} />;
}

function ImpactBlock() {
  return <div className="mt-1 flex max-w-[620px] items-end gap-5"><div className="rounded-[1.75rem] border border-white/55 bg-white/60 px-7 py-5 shadow-[0_22px_55px_rgba(20,20,40,0.10)] backdrop-blur-2xl"><p className="text-[68px] font-bold leading-none" style={{ color: BRAND.yellowText }}>S/ 300K</p><p className="mt-2 text-sm font-medium" style={{ color: BRAND.muted }}>IGV en riesgo identificado</p></div><div className="hidden h-28 flex-1 items-end gap-2 md:flex">{[38, 72, 52, 96].map((height, index) => <div key={`${height}-${index}`} className="flex-1 rounded-t-2xl" style={{ height, background: "linear-gradient(0deg, rgba(115,0,225,0.30), rgba(74,191,255,0.22), rgba(255,199,64,0.35))" }} />)}</div></div>;
}

function FlowVisual() {
  const steps = ["Usuario", "OC", "Material", "Detracción", "Factura", "Pago"];
  return <div className="mt-2 grid max-w-[780px] grid-cols-6 items-stretch gap-2">{steps.map((step, index) => <div key={step} className="relative"><div className="flex h-20 items-center justify-center rounded-2xl border px-2 text-center text-xs font-semibold shadow-[0_12px_28px_rgba(20,20,40,0.08)] backdrop-blur-xl" style={{ borderColor: step === "Material" ? "rgba(115,0,225,0.25)" : "rgba(255,255,255,0.55)", backgroundColor: step === "Material" ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.55)", color: step === "Material" ? BRAND.purple : BRAND.body }}>{step}</div>{index < steps.length - 1 && <div className="absolute -right-2 top-1/2 z-10 h-[2px] w-4 -translate-y-1/2 rounded-full" style={{ background: "linear-gradient(90deg, rgba(115,0,225,0.35), rgba(74,191,255,0.35))" }} />}</div>)}</div>;
}

function SlideContent({ slide }) {
  if (slide.visualType === "giaIntro") return <GIAIntro />;
  if (slide.visualType === "question") return <QuestionSlide />;
  return (
    <>
      <div className={slide.visualType === "backend" ? "flex flex-col gap-3" : "flex flex-col gap-6"}>
        {slide.visualType === "hero" ? (
          <div className="w-full pt-[3%]">
            <motion.img
              src={GIA_LOGO_SRC}
              alt="Logo GIA"
              className="mx-auto w-[50%] min-w-[460px] max-w-[760px] object-contain"
              initial={{ scale: 0.86, y: -180, rotate: -2 }}
              animate={{ scale: [0.86, 1.06, 0.97, 1], y: [-180, 24, -10, 0], rotate: [-2, 1.2, -0.5, 0] }}
              transition={{ duration: 0.95, delay: 0.15, times: [0, 0.62, 0.84, 1], ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        ) : (
          <h1 className={slide.visualType === "reprocess" ? styles.reprocessTitle : slide.visualType === "backend" ? styles.backendTitle : styles.title} style={{ color: BRAND.purple }}>{slide.title}</h1>
        )}
        {slide.visualType === "adoption" ? <AdoptionVisual /> : slide.visualType === "reprocess" ? <ReprocessVisual /> : slide.visualType === "giaPoint" ? <GIAPointVisual /> : slide.visualType === "backend" ? <BackendVisual /> : slide.visualType === "impact" ? <ImpactBlock /> : slide.visualType === "flow" ? <FlowVisual /> : slide.visualType === "hero" ? null : <p className={styles.body} style={{ color: BRAND.body }}>{slide.subtitle}</p>}
      </div>
      {slide.visualType !== "hero" && slide.footer && <p className={styles.footer} style={{ color: BRAND.body }}>{slide.footer}</p>}
    </>
  );
}

export default function Presentation() {
  const { current, next, prev, goTo } = usePresentation(slides.length);
  const slide = slides[current];
  useEffect(() => validateSlides(), []);
  const isFullScene = slide.visualType === "giaIntro";
  const scenePaddingClass =
    slide.visualType === "reprocess"
      ? "pt-[6%] pb-[76px]"
      : slide.visualType === "backend"
        ? "pt-[7%] pb-[90px]"
        : "pt-[8%] pb-[96px]";

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#eef0f4] p-3">
      <main
        className="relative aspect-video w-full max-w-[1520px] max-h-[92vh] overflow-hidden rounded-[2rem] bg-[#f7f7f9] shadow-[0_30px_100px_rgba(20,20,40,0.18)]"
        style={{ aspectRatio: "16 / 9" }}
      >
        {!isFullScene && (
          <>
            <div
              className="pointer-events-none absolute -left-32 -top-32 h-[300px] w-[300px] blur-[90px]"
              style={{ background: "radial-gradient(circle, rgba(115,0,225,0.35), transparent)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-32 -right-32 h-[300px] w-[300px] blur-[90px]"
              style={{ background: "radial-gradient(circle, rgba(74,191,255,0.35), transparent)" }}
            />
            <div
              className="pointer-events-none absolute -right-20 top-1/3 h-[200px] w-[200px] blur-[80px]"
              style={{ background: "radial-gradient(circle, rgba(255,199,64,0.4), transparent)" }}
            />
          </>
        )}

        <AnimatePresence mode="wait" initial={false}>
          <motion.section
            key={current}
            initial={{ opacity: 0, y: isFullScene ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isFullScene ? 0 : -18 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className={
              isFullScene
                ? "absolute inset-0 z-10"
                : `relative z-10 flex h-full flex-col px-[8%] ${scenePaddingClass} ${slide.visualType === "question" ? "justify-start" : "justify-between"}`
            }
          >
            <SlideContent slide={slide} />
          </motion.section>
        </AnimatePresence>

        <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between px-[3.5%]">
          <button
            type="button"
            onClick={prev}
            aria-label="Slide anterior"
            className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/50 bg-white/40 opacity-60 shadow-[0_10px_24px_rgba(20,20,40,0.10)] backdrop-blur-2xl transition-all duration-300 hover:-translate-x-1 hover:scale-105 hover:bg-white/70 hover:opacity-100 focus:outline-none"
          >
            <span className="text-base leading-none" style={{ color: BRAND.dark }}>
              ‹
            </span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente slide"
            className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/50 bg-white/40 opacity-60 shadow-[0_10px_24px_rgba(20,20,40,0.10)] backdrop-blur-2xl transition-all duration-300 hover:translate-x-1 hover:scale-105 hover:bg-white/70 hover:opacity-100 focus:outline-none"
          >
            <span className="text-base leading-none" style={{ color: BRAND.dark }}>
              ›
            </span>
          </button>
        </div>

        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/55 bg-white/55 px-4 py-2 shadow-[0_12px_30px_rgba(20,20,40,0.10)] backdrop-blur-2xl">
          <span className="text-xs font-semibold" style={{ color: "rgba(74,74,74,0.8)" }}>
            {String(current + 1).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir al slide ${index + 1}`}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: index === current ? 28 : 8,
                  background:
                    index === current
                      ? "linear-gradient(90deg, rgba(115,0,225,0.80), rgba(74,191,255,0.80))"
                      : "rgba(191,191,191,0.60)",
                }}
              />
            ))}
          </div>
          <span className="text-xs font-semibold" style={{ color: "rgba(74,74,74,0.5)" }}>
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </main>
    </div>
  );
}
