import { motion } from "framer-motion";
import insightsTitle from "../assets/insights-title.png";
import personSilhouette from "../assets/person-silhouette.png";
import { BRAND } from "../presentationConfig";
import { createSlide } from "./shared/createSlide";

const TITLE_DURATION = 2.05;
const CARD_BASE_DELAY = TITLE_DURATION - 0.05;
const CARD_STEP = 0.22;
const LIME = "#B1DC6B";
const CYAN = "#53DBFF";

const insightCards = [
  {
    eyebrow: "Beneficio primero",
    text: "Sostenibilidad sola no mueve; el beneficio hace clic.",
    className: "left-0 top-[178px]",
    accent: CYAN,
    side: "left",
  },
  {
    eyebrow: "Menos friccion",
    text: "Si hay friccion, la intencion se cae.",
    className: "right-0 top-[178px]",
    accent: LIME,
    side: "right",
  },
  {
    eyebrow: "Cambio facil",
    text: "Nadie cambia su camino por una promesa verde.",
    className: "left-0 top-[398px]",
    accent: LIME,
    side: "left",
  },
  {
    eyebrow: "Impacto visible",
    text: "El impacto debe verse para crear habito.",
    className: "right-0 top-[398px]",
    accent: CYAN,
    side: "right",
  },
];

function PersonPictogram({ accent, side }) {
  return (
    <motion.div
      aria-hidden="true"
      className="relative flex h-[162px] w-[94px] shrink-0 items-center justify-center"
      initial={{ opacity: 0, y: 18, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
    >
      <span
        className="absolute bottom-1 h-[22px] w-[78px] rounded-full blur-[12px]"
        style={{ backgroundColor: `${accent}33` }}
      />
      <span
        className="h-full w-full"
        style={{
          backgroundColor: accent,
          WebkitMaskImage: `url(${personSilhouette})`,
          maskImage: `url(${personSilhouette})`,
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          filter: `drop-shadow(${side === "right" ? "-8px" : "8px"} 12px 12px ${accent}26)`,
        }}
      />
    </motion.div>
  );
}

function InsightCard({ item, index }) {
  const delay = CARD_BASE_DELAY + index * CARD_STEP;
  const isRight = item.side === "right";

  return (
    <motion.div
      className={`absolute z-20 flex h-[174px] w-[444px] items-center gap-5 ${item.className} ${isRight ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, x: isRight ? 24 : -24, y: 12 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.58,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <PersonPictogram accent={item.accent} side={item.side} />

      <motion.div
        className="relative flex h-[150px] w-[330px] shrink-0 flex-col justify-center rounded-[1.55rem] border border-white px-7 py-6"
        style={{
          background: "#FFFFFF",
          boxShadow: `0 18px 34px rgba(35,43,58,0.10), 0 20px 46px ${item.accent}22`,
        }}
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.42,
          delay: delay + 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <span
          className="absolute left-7 top-6 h-3 w-12 rounded-full"
          style={{ background: `linear-gradient(90deg, ${item.accent}, rgba(255,255,255,0.62))` }}
        />
        <p
          className="mb-2.5 pt-5 text-left text-[0.78rem] font-black uppercase leading-none tracking-[0.16em]"
          style={{ color: item.accent }}
        >
          {item.eyebrow}
        </p>
        <p
          className="text-left text-[1.08rem] font-bold leading-[1.24] tracking-normal"
          style={{ color: "rgba(26,26,26,0.92)" }}
        >
          {item.text}
        </p>
      </motion.div>
    </motion.div>
  );
}

function InsightCore() {
  return (
    <div className="absolute left-1/2 top-[52.5%] z-10 h-[212px] w-[212px] -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.65,
          delay: TITLE_DURATION + 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="absolute inset-0 rounded-full border border-[rgba(83,219,255,0.18)]" />
        <div className="absolute inset-[14px] rounded-full border border-[rgba(177,220,107,0.24)]" />
        <div
          className="absolute inset-[32px] rounded-full"
          style={{
            background: "#FFFFFF",
            boxShadow: "0 20px 42px rgba(35,43,58,0.10)",
          }}
        />
        <div className="absolute inset-[32px] flex flex-col items-center justify-center rounded-full text-center">
          <div className="mb-2 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#B1DC6B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#53DBFF]" />
          </div>
          <p
            className="text-[0.72rem] font-black uppercase leading-none tracking-[0.18em]"
            style={{ color: CYAN }}
          >
            Hallazgos
          </p>
          <p
            className="mt-1 text-[3.55rem] font-black leading-none tracking-normal"
            style={{ color: BRAND.dark }}
          >
            4
          </p>
          <p
            className="mt-1 max-w-[122px] text-[0.86rem] font-semibold leading-[1.18] tracking-normal"
            style={{ color: "rgba(74,74,74,0.78)" }}
          >
            fricciones clave
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function Slide03Decor() {
  const dots = [
    { left: "13%", top: "28%", size: 8, color: LIME, delay: 0.1 },
    { left: "82%", top: "28%", size: 6, color: CYAN, delay: 0.45 },
    { left: "21%", top: "77%", size: 6, color: CYAN, delay: 0.75 },
    { left: "78%", top: "77%", size: 8, color: LIME, delay: 1.05 },
  ];

  return (
    <>
      <motion.div
        className="absolute left-[10%] top-[36%] z-0 h-[180px] w-[180px] rounded-full blur-[64px]"
        style={{ background: "rgba(177,220,107,0.15)" }}
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: [0.1, 0.2, 0.12], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, delay: TITLE_DURATION + 0.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[43%] z-0 h-[208px] w-[208px] rounded-full blur-[70px]"
        style={{ background: "rgba(83,219,255,0.14)" }}
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: [0.08, 0.18, 0.1], scale: [1, 1.08, 1] }}
        transition={{ duration: 13, delay: TITLE_DURATION + 0.55, repeat: Infinity, ease: "easeInOut" }}
      />
      {dots.map((dot) => (
        <motion.span
          key={`${dot.left}-${dot.top}`}
          className="absolute z-0 rounded-full"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: [0.24, 0.52, 0.28], y: [0, -6, 0] }}
          transition={{
            duration: 7,
            delay: TITLE_DURATION + dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

function Slide03Component() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Slide03Decor />
      <motion.img
        src={insightsTitle}
        alt="Insights"
        className="absolute left-1/2 top-1/2 z-30 w-[840px] max-w-none select-none"
        style={{ transformOrigin: "center center" }}
        initial={{ x: "-50%", y: "-50%", scale: 0.78, opacity: 0, filter: "blur(10px)" }}
        animate={{
          x: ["-50%", "-50%", "-50%"],
          y: ["-50%", "-50%", "-92%"],
          scale: [0.78, 1, 0.48],
          opacity: [0, 1, 1],
          filter: ["blur(10px)", "blur(0px)", "blur(0px)"],
        }}
        transition={{
          duration: TITLE_DURATION,
          times: [0, 0.36, 1],
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      <InsightCore />

      {insightCards.map((item, index) => (
        <InsightCard key={item.eyebrow} item={item} index={index} />
      ))}
    </div>
  );
}

export default createSlide({
  id: "slide03",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide03Component,
});
