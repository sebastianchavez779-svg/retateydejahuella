import { useEffect, useState } from "react";
import { animate, motion, useAnimationControls, useMotionValue, useMotionValueEvent } from "framer-motion";
import { BRAND, styles } from "../presentationConfig";
import { createSlide } from "./shared/createSlide";

const DONUT_ENTRY = {
  duration: 0.78,
  ease: [0.22, 1, 0.36, 1],
};

const DONUT_COUNT_DURATION = 3;
const DONUT_ARC_BUILD_DURATION = 3;

const DONUT_BREATHE = {
  duration: 3.8,
  repeat: 4,
  ease: "easeInOut",
  repeatDelay: 0.28,
};

const DONUT_SIZE = 234;
const DONUT_STROKE = 28;
const DONUT_RADIUS = (DONUT_SIZE - DONUT_STROKE) / 2;
const DONUT_CENTER = DONUT_SIZE / 2;
const DONUT_PERCENT = 0.04;
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS;
const DONUT_DASH = DONUT_CIRCUMFERENCE * DONUT_PERCENT;
const DONUT_GAP = DONUT_CIRCUMFERENCE - DONUT_DASH;
const DONUT_MIN_DASH = Math.max(DONUT_DASH * 0.18, 2);
const DONUT_INITIAL_DASH = `${DONUT_MIN_DASH} ${DONUT_CIRCUMFERENCE}`;
const DONUT_FINAL_DASH = `${DONUT_DASH} ${DONUT_GAP}`;

function DonutMetric() {
  const donutControls = useAnimationControls();
  const arcControls = useAnimationControls();
  const numberControls = useAnimationControls();
  const countValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(countValue, "change", (latest) => {
    setDisplayValue(Math.max(0, Math.min(4, Math.round(latest))));
  });

  useEffect(() => {
    let active = true;
    let countAnimation;
    let resolveCountAnimation = () => {};
    const countDone = new Promise((resolve) => {
      resolveCountAnimation = resolve;
    });

    donutControls.set({ opacity: 0, scale: 0.56, y: 10 });
    arcControls.set({ strokeDasharray: DONUT_INITIAL_DASH });
    numberControls.set({
      opacity: 0,
      scale: 0.78,
      y: 10,
      textShadow: "0 0 0 rgba(255,199,64,0)",
    });
    countValue.set(0);

    countAnimation = animate(countValue, 4, {
      duration: DONUT_COUNT_DURATION,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => resolveCountAnimation(),
    });

    async function runSequence() {
      await Promise.all([
        donutControls.start({
          opacity: 1,
          scale: [0.56, 1.08, 1],
          y: [10, -2, 0],
          transition: { ...DONUT_ENTRY, delay: 0.12 },
        }),
        arcControls.start({
          strokeDasharray: [DONUT_INITIAL_DASH, DONUT_FINAL_DASH],
          transition: { duration: DONUT_ARC_BUILD_DURATION, delay: 0.18, ease: [0.16, 1, 0.3, 1] },
        }),
        numberControls.start({
          opacity: 1,
          scale: [0.78, 1.08, 1],
          y: [10, -2, 0],
          transition: { ...DONUT_ENTRY, delay: 0.14 },
        }),
        countDone,
      ]);

      if (!active) {
        return;
      }

      await Promise.all([
        donutControls.start({
          scale: [1, 1.016, 1],
          y: [0, -0.6, 0],
          transition: DONUT_BREATHE,
        }),
        numberControls.start({
          scale: [1, 1.018, 1],
          y: [0, -0.6, 0],
          textShadow: [
            "0 0 0 rgba(255,199,64,0)",
            "0 0 6px rgba(255,199,64,0.07)",
            "0 0 0 rgba(255,199,64,0)",
          ],
          transition: DONUT_BREATHE,
        }),
      ]);

      if (!active) {
        return;
      }

      donutControls.set({ opacity: 1, scale: 1, y: 0 });
      numberControls.set({
        opacity: 1,
        scale: 1,
        y: 0,
        textShadow: "0 0 0 rgba(255,199,64,0)",
      });
    }

    runSequence();

    return () => {
      active = false;
      countAnimation?.stop();
      donutControls.stop();
      arcControls.stop();
      numberControls.stop();
    };
  }, [arcControls, countValue, donutControls, numberControls]);

  return (
    <>
      <motion.svg
        className="absolute h-[234px] w-[234px]"
        viewBox={`0 0 ${DONUT_SIZE} ${DONUT_SIZE}`}
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.56, y: 10 }}
        animate={donutControls}
        style={{ overflow: "visible" }}
      >
        <motion.circle
          cx={DONUT_CENTER}
          cy={DONUT_CENTER}
          r={DONUT_RADIUS}
          fill="none"
          stroke="rgba(255,199,64,0.24)"
          strokeWidth={DONUT_STROKE + 5}
          strokeLinecap="round"
          transform={`rotate(-90 ${DONUT_CENTER} ${DONUT_CENTER})`}
          strokeDasharray={DONUT_INITIAL_DASH}
          style={{ filter: "blur(4px)" }}
          initial={false}
          animate={arcControls}
        />
        <motion.circle
          cx={DONUT_CENTER}
          cy={DONUT_CENTER}
          r={DONUT_RADIUS}
          fill="none"
          stroke={BRAND.yellowText}
          strokeWidth={DONUT_STROKE}
          strokeLinecap="round"
          transform={`rotate(-90 ${DONUT_CENTER} ${DONUT_CENTER})`}
          strokeDasharray={DONUT_INITIAL_DASH}
          initial={false}
          animate={arcControls}
        />
      </motion.svg>
      <motion.span
        className="absolute tabular-nums text-[5rem] font-bold leading-none tracking-[-0.06em]"
        style={{ color: BRAND.yellowText }}
        initial={{ opacity: 0, scale: 0.78, y: 10 }}
        animate={numberControls}
      >
        {displayValue}%
      </motion.span>
    </>
  );
}

function Slide02Component({ slide }) {
  return (
    <div className="flex h-full flex-col">
      <h1
        className="max-w-[860px] text-[3.5rem] font-bold leading-[1.02] tracking-[-0.04em]"
        style={{ color: BRAND.purple }}
      >
        {slide.title}
      </h1>

      <div className="flex flex-1 items-center justify-center">
        <div className="grid w-full max-w-[940px] grid-cols-[296px_492px] items-center justify-center gap-8 translate-y-3">
          <div className="relative flex h-[286px] items-center justify-center">
            <div
              className="absolute h-[248px] w-[248px] rounded-full blur-[38px]"
              style={{ background: "radial-gradient(circle, rgba(255,199,64,0.26), rgba(115,0,225,0.10), transparent 70%)" }}
            />
            <div className="relative flex h-[274px] w-[274px] items-center justify-center">
              <svg
                className="absolute h-[234px] w-[234px]"
                viewBox={`0 0 ${DONUT_SIZE} ${DONUT_SIZE}`}
                aria-hidden="true"
              >
                <circle
                  cx={DONUT_CENTER}
                  cy={DONUT_CENTER}
                  r={DONUT_RADIUS}
                  fill="none"
                  stroke="rgba(191,191,191,0.16)"
                  strokeWidth={DONUT_STROKE}
                />
              </svg>
              <div className="absolute h-[180px] w-[180px] rounded-full bg-[#f7f7f9]" />
              <DonutMetric />
              <span
                className="absolute mt-[92px] text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: BRAND.muted }}
              >
                usa IA
              </span>
            </div>
          </div>

          <div className="w-full rounded-[1.35rem] border border-white/55 bg-white/40 p-6 shadow-[0_22px_55px_rgba(20,20,40,0.08)] backdrop-blur-[28px]">
            <div className="flex items-start gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white/35"
                style={{ borderColor: "rgba(115,0,225,0.15)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 18V9" stroke={BRAND.purple} strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 18V5" stroke={BRAND.purple} strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 18v-7" stroke={BRAND.purple} strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 18h16" stroke={BRAND.purple} strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="space-y-3.5">
                <p className={styles.label} style={{ color: "rgba(115,0,225,0.75)" }}>
                  El resultado
                </p>
                <p className="text-[17px] leading-7" style={{ color: BRAND.body }}>
                  Procesos altamente manuales, lentitud operativa y equipos contables consumiendo hasta{" "}
                  <span className="font-bold" style={{ color: BRAND.yellowText }}>
                    120 horas al mes
                  </span>{" "}
                  en tareas sin valor agregado.
                </p>
                <div
                  className="mt-1 h-1.5 overflow-hidden rounded-full"
                  style={{ backgroundColor: "rgba(191,191,191,0.25)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, rgba(115,0,225,0.70), rgba(74,191,255,0.65), rgba(255,199,64,0.75))" }}
                    initial={{ width: 0 }}
                    animate={{ width: "82%" }}
                    transition={{ duration: 0.85, delay: 0.45, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
  id: "slide02",
  title: "Adopci\u00f3n de IA en contabilidad",
  subtitle: "Solo el 4% de las empresas en Per\u00fa utiliza inteligencia artificial en el \u00e1rea contable (EY 2025).",
  footer: "Solo el 4% de las empresas en Per\u00fa utiliza inteligencia artificial en el \u00e1rea contable (EY 2025).",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide02Component,
});
