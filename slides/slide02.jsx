import { AnimatePresence, motion } from "framer-motion";
import { BRAND } from "../presentationConfig";
import personSilhouette from "../assets/person-silhouette.png";
import publicoBannerUltraUrl from "../assets/fonts/PublicoBanner-Ultra.otf";
import { createSlide } from "./shared/createSlide";

const PEOPLE_COUNT = 10;
const QUESTION_WORD_STAGGER = 0.26;
const QUESTION_LIFT_DELAY = 3.05;
const QUESTION_LIFT_DURATION = 0.68;
const PEOPLE_DELAY = QUESTION_LIFT_DELAY + QUESTION_LIFT_DURATION + 0.18;
const PEOPLE_STAGGER = 0.08;
const PERSON_PULSE_START = PEOPLE_DELAY + PEOPLE_COUNT * PEOPLE_STAGGER + 0.45;
const PERSON_PULSE_STAGGER = 0.16;
const PERSON_PULSE_DURATION = 0.36;
const SUSTAINABLE_GREEN = "#B1DC6B";
const INTEREST_BLUE = "#53DBFF";
const BLUE_FILL_DURATION = 0.95;
const BLUE_FILL_STAGGER = 0.22;
const OPPORTUNITY_DELAY = (6 - 3) * BLUE_FILL_STAGGER + BLUE_FILL_DURATION + 0.12;
const QUESTION_WORDS = [
  { text: "¿Cuántas" },
  { text: "personas" },
  { text: "realizan" },
  { text: "acciones", color: SUSTAINABLE_GREEN },
  { text: "sostenibles", color: SUSTAINABLE_GREEN },
  { text: "en" },
  { text: "su" },
  { text: "día" },
  { text: "a" },
  { text: "día?" },
];
const INTEREST_QUESTION_WORDS = [
  { text: "Pero..." },
  { text: "¿A" },
  { text: "cuántas" },
  { text: "personas" },
  { text: "les" },
  { text: "interesa", color: INTEREST_BLUE },
  { text: "la" },
  { text: "sostenibilidad?" },
];

function AccountingPerson({ index, fillActive, fillColor, fillDelay = 0, pulseActive }) {
  return (
    <motion.div
      className="flex h-[190px] w-[100px] shrink-0 items-end justify-center"
      aria-hidden="true"
      initial={{ opacity: 0, y: 34, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.58,
        delay: PEOPLE_DELAY + PEOPLE_STAGGER * index,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        className="relative h-full aspect-[9/16] drop-shadow-[0_10px_7px_rgba(26,26,26,0.12)]"
        style={{ transformOrigin: "center" }}
        animate={pulseActive ? { y: [0, -9, 0], scale: [1, 1.08, 1] } : { y: 0, scale: 1 }}
        transition={
          pulseActive
            ? {
                duration: PERSON_PULSE_DURATION,
                delay: PERSON_PULSE_START + index * PERSON_PULSE_STAGGER,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: PEOPLE_COUNT * PERSON_PULSE_STAGGER - PERSON_PULSE_DURATION,
              }
            : {
                duration: 0.22,
                ease: "easeOut",
              }
        }
      >
        <motion.img
          src={personSilhouette}
          alt=""
          className="absolute inset-0 h-full w-full object-contain"
          initial={false}
          animate={{ opacity: fillActive ? 0 : 1 }}
          transition={{
            duration: 0.18,
            delay: fillActive ? fillDelay + 1.08 : 0,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          style={{
            backgroundColor: fillColor,
            WebkitMaskImage: `url(${personSilhouette})`,
            maskImage: `url(${personSilhouette})`,
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
          initial={false}
          animate={{ height: fillActive ? "100%" : "0%" }}
          transition={{
            duration: 0.95,
            delay: fillActive ? fillDelay : 0,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function Slide02Component({ slidePhase }) {
  const isFillPhase = slidePhase === "filled" || slidePhase === "interest" || slidePhase === "blue";
  const isInterestPhase = slidePhase === "interest" || slidePhase === "blue";
  const activeQuestionWords = isInterestPhase ? INTEREST_QUESTION_WORDS : QUESTION_WORDS;

  return (
    <div className="relative h-full">
      <style>
        {`
          @font-face {
            font-family: "PublicoBannerUltra";
            src: url("${publicoBannerUltraUrl}") format("opentype");
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>

      <motion.div
        className="absolute left-0 right-0 top-[40%] flex -translate-y-1/2 justify-center"
        initial={{ y: 0 }}
        animate={{ y: -160 }}
        transition={{
          duration: QUESTION_LIFT_DURATION,
          delay: QUESTION_LIFT_DELAY,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={isInterestPhase ? "interest-question" : "daily-question"}
            className="max-w-[1080px] text-center text-[3.8rem] font-bold leading-[1.02] tracking-[-0.03em]"
            style={{ color: BRAND.dark }}
            initial={isInterestPhase ? { opacity: 0, x: -70, filter: "blur(7px)" } : "hidden"}
            animate={isInterestPhase ? { opacity: 1, x: 0, filter: "blur(0px)" } : "visible"}
            exit={{ opacity: 0, x: 180, filter: "blur(8px)" }}
            transition={
              isInterestPhase
                ? { duration: 0.58, ease: [0.16, 1, 0.3, 1] }
                : undefined
            }
            variants={
              isInterestPhase
                ? undefined
                : {
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: QUESTION_WORD_STAGGER,
                        delayChildren: 0.12,
                      },
                    },
                  }
            }
          >
            {activeQuestionWords.map((word, index) => (
              <motion.span
                key={`${word.text}-${index}`}
                className="inline-block"
                style={{ color: word.color ?? "inherit" }}
                variants={
                  isInterestPhase
                    ? undefined
                    : {
                        hidden: { opacity: 0, y: 18, filter: "blur(7px)" },
                        visible: {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: {
                            duration: 0.48,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        },
                      }
                }
              >
                {word.text}
                {index < activeQuestionWords.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </motion.h1>
        </AnimatePresence>
      </motion.div>

      <div className="absolute bottom-[124px] left-1/2 flex w-full max-w-[1160px] -translate-x-1/2 items-end justify-center gap-1">
        {Array.from({ length: PEOPLE_COUNT }, (_, index) => {
          const isGreen = isFillPhase && index < 3;
          const isBlue = slidePhase === "blue" && index >= 3 && index <= 6;
          const fillActive = isGreen || isBlue;

          return (
            <AccountingPerson
              key={index}
              index={index}
              fillActive={fillActive}
              fillColor={isBlue ? INTEREST_BLUE : SUSTAINABLE_GREEN}
              fillDelay={isBlue ? (index - 3) * BLUE_FILL_STAGGER : index * 0.22}
              pulseActive={slidePhase === "idle" || (slidePhase === "interest" && index >= 3)}
            />
          );
        })}
      </div>

      <AnimatePresence>
        {slidePhase === "blue" ? (
          <div className="absolute left-1/2 top-[258px] z-20 -translate-x-1/2">
            <motion.div
              className="text-[2.45rem] font-black uppercase leading-none tracking-[0.1em]"
              style={{
                color: INTEREST_BLUE,
                fontFamily: "PublicoBannerUltra, Impact, Haettenschweiler, 'Arial Black', sans-serif",
              }}
              initial={{ opacity: 0, scale: 0.35, y: 42, rotate: -7, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: [1.28, 0.92, 1], y: 0, rotate: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, y: -18 }}
              transition={{
                delay: OPPORTUNITY_DELAY,
                duration: 0.58,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              OPORTUNIDAD
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default createSlide({
  id: "slide02",
  title: "",
  subtitle: "",
  footer: "",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide02Component,
});
