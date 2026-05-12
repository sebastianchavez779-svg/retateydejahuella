import { slides } from "./slides";
export { slides };

export const GIA_LOGO_SRC = "/ChatGPT Image 4 may 2026, 02_58_01 p.m..png";

export const BRAND = Object.freeze({
  purple: "#7300E1",
  yellow: "#FFC740",
  yellowText: "#B98100",
  blue: "#4ABFFF",
  dark: "#1A1A1A",
  body: "#4A4A4A",
  muted: "#5A5A5A",
  dangerText: "#E5484D",
});

export const styles = Object.freeze({
  title: "text-5xl font-bold leading-tight tracking-[-0.03em]",
  backendTitle: "text-5xl font-bold leading-tight tracking-[-0.04em]",
  reprocessTitle: "max-w-[820px] text-4xl font-bold leading-[1.08] tracking-[-0.03em]",
  body: "max-w-[700px] text-base leading-7",
  footer: "max-w-[720px] text-base font-semibold leading-7",
  label: "text-xs font-semibold uppercase tracking-[0.14em]",
});

export function validateSlides() {
  console.assert(slides.length === 15, "Deben ser 15 slides");
  console.assert(slides[1].visualType === "adoption", "Slide 2 debe usar visual adoption");
  console.assert(slides[2].visualType === "question", "Slide 3 debe mantenerse como pregunta");
  console.assert(slides[3].visualType === "reprocess", "Slide 4 debe usar visual de reproceso");
  console.assert(slides[4].visualType === "giaIntro", "Slide 5 debe presentar GIA como escena completa");
  console.assert(slides[5].visualType === "giaPoint", "Slide 6 debe mostrar punto de intervención");
  console.assert(slides[6].visualType === "backend", "Slide 7 debe explicar backend de GIA");
}
