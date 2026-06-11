import { motion } from "framer-motion";
import solutionTitle from "../assets/solution-title.png";
import slide07MainImage from "../assets/slide07-main-image.png";
import { createSlide } from "./shared/createSlide";

const TITLE_DURATION = 2.05;
const IMAGE_DELAY = TITLE_DURATION - 0.05;
const IMAGE_DURATION = 1.38;
const CHIP_BASE_DELAY = IMAGE_DELAY + IMAGE_DURATION + 0.18;
const CHIP_STEP = 0.18;

const LIME = "#B1DC6B";
const CYAN = "#53DBFF";

const audienceChips = [
  { label: "VISITANTE", accent: LIME },
  { label: "LOCATARIO", accent: LIME },
  { label: "NEGOCIO", accent: LIME },
];

function Slide07Decor() {
  const dots = [
    { left: "15%", top: "30%", size: 8, color: LIME, delay: 0.1 },
    { left: "84%", top: "29%", size: 6, color: CYAN, delay: 0.45 },
    { left: "22%", top: "76%", size: 6, color: CYAN, delay: 0.75 },
    { left: "77%", top: "76%", size: 8, color: LIME, delay: 1.05 },
  ];

  return (
    <>
      <motion.div
        className="absolute left-[11%] top-[36%] z-0 h-[184px] w-[184px] rounded-full blur-[64px]"
        style={{ background: "rgba(177,220,107,0.15)" }}
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: [0.1, 0.2, 0.12], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, delay: TITLE_DURATION + 0.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[11%] top-[43%] z-0 h-[208px] w-[208px] rounded-full blur-[70px]"
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

function AudienceChip({ label, accent, index }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-full border px-8 py-7 text-center text-[1.08rem] font-black uppercase leading-none tracking-[0.14em] backdrop-blur-[18px]"
      style={{
        color: "rgba(26,26,26,0.88)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.34))",
        borderColor: "rgba(255,255,255,0.74)",
        boxShadow: `0 18px 34px rgba(35,43,58,0.10), 0 0 34px ${accent}26`,
      }}
      initial={{ opacity: 0, x: 42, y: 10, scale: 0.92, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.58,
        delay: CHIP_BASE_DELAY + index * CHIP_STEP,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <span
        className="absolute left-5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full"
        style={{ backgroundColor: accent, boxShadow: `0 0 18px ${accent}` }}
      />

      <span
        className="pointer-events-none absolute -left-10 top-0 h-full w-[84px] rotate-12"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.52), transparent)",
        }}
      />

      <span className="relative z-10">{label}</span>
    </motion.div>
  );
}

function AudienceChips() {
  return (
    <div className="absolute right-[9.5%] top-[39%] z-20 flex w-[330px] flex-col gap-5">
      {audienceChips.map((chip, index) => (
        <AudienceChip key={chip.label} label={chip.label} accent={chip.accent} index={index} />
      ))}
    </div>
  );
}

function Slide07Component() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Slide07Decor />

      <motion.img
        src={solutionTitle}
        alt="Solución"
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

      <motion.div
        className="absolute left-[7%] top-[28%] z-20 flex justify-start"
        initial={{ opacity: 0, x: -240, scale: 0.92, filter: "blur(12px)" }}
        animate={{
          opacity: [0, 1, 1],
          x: [-240, 26, 0],
          scale: [0.92, 1.015, 1],
          filter: ["blur(12px)", "blur(0px)", "blur(0px)"],
        }}
        transition={{
          delay: IMAGE_DELAY,
          duration: IMAGE_DURATION,
          times: [0, 0.8, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="relative"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 7.2,
            delay: IMAGE_DELAY + IMAGE_DURATION,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="absolute left-1/2 top-[92%] h-[42px] w-[560px] -translate-x-1/2 rounded-full blur-[28px]"
            style={{ background: "rgba(15, 24, 31, 0.24)" }}
          />

          <motion.img
            src={slide07MainImage}
            alt="Vista principal de la app Rétate y Deja Huella"
            className="relative mx-auto h-auto w-[548px] select-none object-contain"
            style={{
              filter:
                "drop-shadow(0 30px 52px rgba(15, 24, 31, 0.22)) drop-shadow(0 0 26px rgba(177,220,107,0.12))",
            }}
            initial={{ rotate: -2.8 }}
            animate={{
              rotate: [-2.8, 0.9, 0],
            }}
            transition={{
              delay: IMAGE_DELAY,
              duration: IMAGE_DURATION,
              times: [0, 0.76, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      </motion.div>

      <AudienceChips />
    </div>
  );
}

export default createSlide({
  id: "slide07",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide07Component,
});