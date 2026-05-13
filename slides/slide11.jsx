import { motion } from "framer-motion";
import { BRAND } from "../presentationConfig";
import { createSlide } from "./shared/createSlide";

const lines = [
  ["No", "estamos", "adquiriendo"],
  ["solo", "licencias"],
  ["estamos", "adquiriendo"],
  ["poder", "de", "decisión"],
  ["más", "rápida", "y", "eficiente"],
];

function Slide11Component() {
  let wordIndex = 0;

  return (
    <div className="flex h-full items-center justify-center">
      <div className="max-w-[980px] text-center">
        {lines.map((line, lineIndex) => (
          <div key={line.join(" ")} className={lineIndex === 2 ? "mt-7" : "mt-2"}>
            {line.map((word) => {
              const delay = wordIndex * 0.18;
              wordIndex += 1;

              return (
                <motion.span
                  key={`${word}-${wordIndex}`}
                  className="mx-2 inline-block text-[4rem] font-black leading-[1.05] tracking-[-0.02em]"
                  style={{
                    color:
                      lineIndex >= 3
                        ? BRAND.purple
                        : lineIndex === 1
                          ? BRAND.yellowText
                          : BRAND.dark,
                  }}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.46, delay, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default createSlide({
  id: "slide11",
  layout: {
    padding: "py-[5.2%]",
    justify: "justify-center",
  },
  Component: Slide11Component,
});
