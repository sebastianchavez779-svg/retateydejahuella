import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import layoHuellaSrc from "../assets/layo-huella.png";
import retateDejaHuellaSrc from "../assets/retate-deja-huella.png";
import { createSlide } from "./shared/createSlide";

const EASE_OUT = [0.16, 1, 0.3, 1];

function Slide01Component() {
  const auraControls = useAnimationControls();
  const primaryControls = useAnimationControls();
  const secondaryControls = useAnimationControls();

  useEffect(() => {
    let isActive = true;
    const pause = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

    async function runIntro() {
      auraControls.set({ opacity: 0, scale: 0.52 });
      primaryControls.set({
        opacity: 0,
        x: 0,
        y: 18,
        scale: 0.2,
        rotate: -2.5,
        filter: "blur(14px) saturate(1.12)",
      });
      secondaryControls.set({
        opacity: 0,
        x: 0,
        y: 18,
        scale: 0.76,
        rotate: 1.8,
        filter: "blur(14px) saturate(1.12)",
      });

      auraControls.start({
        opacity: [0, 0.75, 0.44, 0.18],
        scale: [0.52, 0.96, 1.08, 1.18],
        transition: { duration: 4.7, times: [0, 0.25, 0.58, 1], ease: EASE_OUT },
      });

      await primaryControls.start({
        opacity: 1,
        y: -4,
        scale: 1.08,
        rotate: 0.8,
        filter: "blur(0px) saturate(1.08)",
        transition: { duration: 1.12, ease: EASE_OUT },
      });
      if (!isActive) return;

      await primaryControls.start({
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px) saturate(1.04)",
        transition: { duration: 0.44, ease: EASE_OUT },
      });
      if (!isActive) return;

      await pause(420);
      if (!isActive) return;

      await Promise.all([
        primaryControls.start({
          x: -330,
          scale: 0.88,
          rotate: -0.35,
          filter: "blur(0px) saturate(1)",
          transition: { duration: 1.18, ease: EASE_OUT },
        }),
        secondaryControls.start({
          opacity: 1,
          x: 330,
          y: 0,
          scale: 0.88,
          rotate: 0.35,
          filter: "blur(0px) saturate(1)",
          transition: { duration: 1.18, ease: EASE_OUT },
        }),
      ]);
    }

    runIntro();

    return () => {
      isActive = false;
      auraControls.stop();
      primaryControls.stop();
      secondaryControls.stop();
    };
  }, [auraControls, primaryControls, secondaryControls]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[360px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[42px]"
        style={{ background: "radial-gradient(circle, rgba(68,188,209,0.18), rgba(174,217,104,0.12), transparent 68%)" }}
        initial={{ opacity: 0, scale: 0.52 }}
        animate={auraControls}
      />

      <div className="absolute left-1/2 top-1/2 z-10 w-[718px] -translate-x-1/2 -translate-y-1/2">
        <motion.img
          src={retateDejaHuellaSrc}
          alt="Concurso Retate y deja huella"
          className="w-full object-contain drop-shadow-[0_24px_38px_rgba(30,42,22,0.18)]"
          initial={{ opacity: 0, x: 0, y: 18, scale: 0.2, rotate: -2.5, filter: "blur(14px) saturate(1.12)" }}
          animate={primaryControls}
        />
      </div>

      <div className="absolute left-1/2 top-1/2 z-20 w-[697px] -translate-x-1/2 -translate-y-1/2">
        <motion.img
          src={layoHuellaSrc}
          alt="Layo Huella"
          className="w-full object-contain drop-shadow-[0_24px_38px_rgba(30,42,22,0.16)]"
          initial={{ opacity: 0, x: 0, y: 18, scale: 0.76, rotate: 1.8, filter: "blur(14px) saturate(1.12)" }}
          animate={secondaryControls}
        />
      </div>
    </div>
  );
}

export default createSlide({
  id: "slide01",
  title: "Retate y deja huella",
  subtitle: "",
  footer: "",
  layout: {
    padding: "py-[7%]",
  },
  Component: Slide01Component,
});
