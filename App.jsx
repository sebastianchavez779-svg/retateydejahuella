import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideContent from "./slides/slideContent";
import { BRAND, GIA_LOGO_SRC, slides, styles, validateSlides } from "./presentationConfig";
import { usePresentation } from "./usePresentation";

export default function Presentation() {
  const { current, next, prev, goTo } = usePresentation(slides.length);
  const slide = slides[current];
  useEffect(() => validateSlides(), []);
  const isFullScene = slide.visualType === "giaIntro";
  const scenePaddingClass = slide.ui?.sectionPadding ?? slide.layout?.padding ?? "pt-[6%] pb-[76px]";
  const sceneJustifyClass = slide.ui?.sectionJustify ?? slide.layout?.justify ?? "justify-start";

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#eef0f4] p-1">
      <main
        className="relative aspect-video w-full max-w-[98%] max-h-[96vh] overflow-hidden rounded-[2rem] bg-[#f7f7f9] shadow-[0_30px_100px_rgba(20,20,40,0.18)]"
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
                : `relative z-10 flex h-full flex-col px-[6%] ${scenePaddingClass} ${sceneJustifyClass}`
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
