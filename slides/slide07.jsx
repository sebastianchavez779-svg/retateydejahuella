import { motion } from "framer-motion";
import { BRAND } from "../presentationConfig";
import { createSlide } from "./shared/createSlide";

const knowledge = [
  { title: "Prompt maestro", detail: "Preguntas, criterios y lógica de guía", icon: "chat", color: BRAND.purple },
  { title: "Políticas Real Plaza", detail: "Lineamientos y reglas internas", icon: "shield", color: BRAND.blue },
  { title: "SPOT SUNAT", detail: "Validación tributaria automatizada", icon: "check", color: "#35D4C2" },
  { title: "Catálogo de materiales", detail: "Códigos, usos y descripciones", icon: "book", color: "#2B7FFF" },
];

function BackendVisual() {
  return (
    <div className="relative flex w-full flex-1 flex-col justify-center">
      <div
        className="pointer-events-none absolute -left-20 top-8 h-48 w-48 rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(115,0,225,0.16), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute right-4 bottom-0 h-52 w-52 rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(74,191,255,0.20), transparent 70%)" }}
      />

      <div className="grid w-full grid-cols-[1fr_1.08fr_1fr] items-stretch gap-8">
        <FlowCard
          delay={0.05}
          eyebrow="Entrada"
          title="Microsoft Teams"
          subtitle="Chat integrado"
          icon="teams"
          body="¿Qué material debo colocar para esta compra?"
          accent={BRAND.purple}
          typing
        />

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/80 text-center shadow-[0_30px_90px_rgba(80,20,180,0.24)] backdrop-blur-3xl"
          style={{ background: "linear-gradient(180deg, rgba(115,0,225,0.88), rgba(47,26,154,0.96))" }}
        >
          <div className="absolute inset-0 border border-white/30" />
          <div className="absolute h-52 w-52 rounded-full opacity-25" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.7), transparent 62%)" }} />
          <p className="relative z-10 text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/85">
            Agente
          </p>
          <div
            className="relative z-10 mt-3 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/45"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.25), rgba(255,255,255,0.08))", boxShadow: "0 0 38px rgba(255,255,255,0.30), inset 0 0 22px rgba(255,255,255,0.16)" }}
          >
            <BrainIcon />
          </div>
          <p className="relative z-10 mt-3 text-[48px] font-black leading-none tracking-[-0.06em] text-white">
            GIA
          </p>
          <p className="relative z-10 mt-1.5 text-[14px] font-medium text-white/90">Microsoft Copilot Studio</p>
          <div className="relative z-10 mt-4 flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold text-white/90 backdrop-blur-xl">
            <span>Razona</span>
            <span className="text-white/35">|</span>
            <span>Sintetiza</span>
            <span className="text-white/35">|</span>
            <span>Valida</span>
          </div>
        </motion.div>

        <FlowCard
          delay={0.32}
          eyebrow="Resultado"
          title="Código de material recomendado"
          subtitle="Respuesta accionable"
          icon="result"
          body="Material sugerido + criterio explicado"
          accent="#35D4C2"
          alignRight
        />
      </div>

      <svg className="pointer-events-none absolute left-0 top-[118px] h-[120px] w-full" viewBox="0 0 1040 120" fill="none" aria-hidden="true">
        <ConnectionPath d="M292 60 C 350 60, 380 60, 430 60" delay={0.58} />
        <ConnectionPath d="M610 60 C 660 60, 690 60, 748 60" delay={0.74} />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.62, duration: 0.45 }}
        className="mt-8"
      >
        <div className="mb-3 flex items-center gap-3">
          <IconBox type="database" color={BRAND.purple} subtle />
          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND.purple }}>
              Base de conocimiento
            </p>
            <p className="text-xs" style={{ color: BRAND.muted }}>
              Fuentes que alimentan la decisión
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3.5">
          {knowledge.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.78 + index * 0.07 }}
              className="min-h-[104px] rounded-[1rem] border border-white/65 bg-white/68 p-3.5 shadow-[0_16px_34px_rgba(20,20,40,0.07)] backdrop-blur-2xl"
            >
              <IconBox type={item.icon} color={item.color} small />
              <p className="mt-2.5 text-[14px] font-extrabold leading-tight tracking-[-0.02em]" style={{ color: BRAND.dark }}>
                {item.title}
              </p>
              <p className="mt-1 text-[11px] leading-[1.35]" style={{ color: BRAND.body }}>
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function FlowCard({ eyebrow, title, subtitle, icon, body, accent, alignRight = false, delay, typing = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: alignRight ? 18 : -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay }}
      className="relative z-10 flex min-h-[260px] flex-col justify-between rounded-[1.7rem] border border-white/65 bg-white/66 p-6 shadow-[0_22px_55px_rgba(20,20,40,0.09)] backdrop-blur-2xl"
    >
      <div className="flex items-center gap-4">
        <IconBox type={icon} color={accent} />
        <div>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.14em]" style={{ color: accent }}>
            {eyebrow}
          </p>
          <p className="mt-1 text-xl font-extrabold tracking-[-0.03em]" style={{ color: BRAND.dark }}>
            {title}
          </p>
          <p className="text-sm" style={{ color: BRAND.body }}>
            {subtitle}
          </p>
        </div>
      </div>

      <div className={typing ? "space-y-3" : ""}>
        <div
          className="rounded-[1.15rem] border border-white/70 bg-white/78 px-5 py-4 text-[18px] font-bold leading-6 shadow-[0_14px_32px_rgba(20,20,40,0.07)]"
          style={{ color: alignRight ? BRAND.dark : "#3A1386" }}
        >
        {alignRight ? (
          <>
            <span style={{ color: BRAND.purple }}>Recomendación final</span>
            <br />
            <span className="text-[15px] font-semibold" style={{ color: BRAND.body }}>
              con criterio explicado para el usuario
            </span>
          </>
        ) : (
          body
        )}
        </div>
        {typing ? <TypingBubble /> : null}
      </div>
    </motion.div>
  );
}

function TypingBubble() {
  return (
    <div className="mr-auto flex w-[94px] items-center justify-center gap-1.5 rounded-[1.15rem] border border-white/70 bg-white/72 px-4 py-3 shadow-[0_12px_26px_rgba(20,20,40,0.06)]">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="h-2 w-2 rounded-full"
          style={{ background: "rgba(115,0,225,0.58)" }}
          animate={{ y: [0, -4, 0], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 0.72, repeat: Infinity, delay: dot * 0.12, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function IconBox({ type, color, subtle = false, small = false }) {
  return (
    <div
      className={subtle ? "flex h-8 w-8 items-center justify-center rounded-lg" : `${small ? "h-9 w-9 rounded-lg" : "h-11 w-11 rounded-xl"} flex shrink-0 items-center justify-center shadow-[0_10px_22px_rgba(20,20,40,0.08)]`}
      style={{ background: subtle ? "transparent" : color, color: subtle ? color : "white" }}
    >
      {type === "teams" ? <TeamsIcon /> : null}
      {type === "chat" ? <ChatIcon /> : null}
      {type === "shield" ? <ShieldIcon /> : null}
      {type === "check" ? <CheckCircleIcon /> : null}
      {type === "book" ? <BookIcon /> : null}
      {type === "database" ? <DatabaseIcon /> : null}
      {type === "result" ? <ResultIcon /> : null}
    </div>
  );
}

function ConnectionPath({ d, delay }) {
  return (
    <motion.path
      d={d}
      stroke="rgba(115,0,225,0.38)"
      strokeWidth="2.4"
      strokeDasharray="6 8"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.7, delay }}
      style={{ filter: "drop-shadow(0 0 6px rgba(115,0,225,0.20))" }}
    />
  );
}

function TeamsIcon() {
  return <span className="text-lg font-black">T</span>;
}

function BrainIcon() {
  return <svg width="42" height="42" viewBox="0 0 24 24" fill="none"><path d="M9 4.5C7.2 4.5 6 5.8 6 7.3c-1.2.4-2 1.5-2 2.8 0 1 .5 1.9 1.2 2.4-.2.4-.3.8-.3 1.3 0 1.7 1.3 3 3 3h1.2V4.5zM15 4.5c1.8 0 3 1.3 3 2.8 1.2.4 2 1.5 2 2.8 0 1-.5 1.9-1.2 2.4.2.4.3.8.3 1.3 0 1.7-1.3 3-3 3H15V4.5z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 8.5c-1.1 0-2 .9-2 2M15 8.5c1.1 0 2 .9 2 2M9 13c-1 .1-1.7.8-1.9 1.8M15 13c1 .1 1.7.8 1.9 1.8" stroke="white" strokeWidth="1.4" strokeLinecap="round" /></svg>;
}

function ChatIcon() {
  return <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M5 6.5h14v8H9l-4 3v-11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function ShieldIcon() {
  return <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.4-2.8 8-7 10-4.2-2-7-5.6-7-10V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function CheckCircleIcon() {
  return <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" /><path d="M8.5 12.2l2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function BookIcon() {
  return <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M5 5.5c0-.8.7-1.5 1.5-1.5H11v14H6.5A1.5 1.5 0 015 16.5v-11zM19 5.5c0-.8-.7-1.5-1.5-1.5H13v14h4.5c.8 0 1.5-.7 1.5-1.5v-11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
}

function DatabaseIcon() {
  return <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="2" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth="2" /></svg>;
}

function ResultIcon() {
  return <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M7 4h10v16H7z" stroke="currentColor" strokeWidth="2" /><path d="M9.5 9h5M9.5 12h5M9.5 15h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function Slide07Component({ slide }) {
  return (
    <div className="flex h-full flex-col">
      <h1
        className="max-w-[860px] text-[3.5rem] font-bold leading-[1.02] tracking-[-0.04em]"
        style={{ color: BRAND.purple }}
      >
        {slide.title}
      </h1>
      <BackendVisual />
    </div>
  );
}

export default createSlide({
  id: "slide07",
  title: "El cerebro detrás de GIA",
  layout: {
    padding: "pt-[5.2%] pb-[54px]",
  },
  Component: Slide07Component,
});
