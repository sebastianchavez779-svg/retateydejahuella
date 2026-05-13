import React, { startTransition, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideFrame from "./slides/SlideFrame";
import { slides, validateSlides } from "./slides";
import { BRAND } from "./presentationConfig";
import { usePresentation } from "./usePresentation";

const STAGE_WIDTH = 1280;
const STAGE_HEIGHT = 720;
const VIEWPORT_PADDING = 16;

function getViewportSize() {
  if (typeof window === "undefined") {
    return { width: STAGE_WIDTH, height: STAGE_HEIGHT };
  }

  return { width: window.innerWidth, height: window.innerHeight };
}

export default function Presentation() {
  const { current, next, prev, goTo } = usePresentation(slides.length);
  const [viewport, setViewport] = useState(getViewportSize);
  const slide = slides[current];

  useEffect(() => validateSlides(), []);

  useEffect(() => {
    function handleResize() {
      startTransition(() => {
        setViewport(getViewportSize());
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isFullScene = slide.frame === "fullBleed";
  const availableWidth = Math.max(viewport.width - VIEWPORT_PADDING * 2, 320);
  const availableHeight = Math.max(viewport.height - VIEWPORT_PADDING * 2, 180);
  const scale = Math.min(availableWidth / STAGE_WIDTH, availableHeight / STAGE_HEIGHT);
  const stageScale = Number.isFinite(scale) && scale > 0 ? scale : 1;
  const scaledWidth = STAGE_WIDTH * stageScale;
  const scaledHeight = STAGE_HEIGHT * stageScale;

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[#eef0f4]" style={{ padding: VIEWPORT_PADDING }}>
      <div
        className="relative shrink-0"
        style={{
          width: scaledWidth,
          height: scaledHeight,
        }}
      >
        <main
          className="relative overflow-hidden rounded-[2rem] bg-[#f7f7f9] shadow-[0_30px_100px_rgba(20,20,40,0.18)]"
          style={{
            width: STAGE_WIDTH,
            height: STAGE_HEIGHT,
            transform: `scale(${stageScale})`,
            transformOrigin: "top left",
          }}
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
              key={slide.id}
              initial={{ opacity: 0, y: isFullScene ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: isFullScene ? 0 : -18 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
              className="absolute inset-0 z-10"
            >
              <SlideFrame slide={slide} />
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
                &#8249;
              </span>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Siguiente slide"
              className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/50 bg-white/40 opacity-60 shadow-[0_10px_24px_rgba(20,20,40,0.10)] backdrop-blur-2xl transition-all duration-300 hover:translate-x-1 hover:scale-105 hover:bg-white/70 hover:opacity-100 focus:outline-none"
            >
              <span className="text-base leading-none" style={{ color: BRAND.dark }}>
                &#8250;
              </span>
            </button>
          </div>

          <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/55 bg-white/55 px-4 py-2 shadow-[0_12px_30px_rgba(20,20,40,0.10)] backdrop-blur-2xl">
            <span className="text-xs font-semibold" style={{ color: "rgba(74,74,74,0.8)" }}>
              {String(current + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              {slides.map((item, index) => (
                <button
                  key={item.id}
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
    </div>
  );
}
