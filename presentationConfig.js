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

export const slides = Object.freeze([
  { title: "GIA", subtitle: "Inteligencia aplicada a decisiones contables", footer: "Piloto IA – Contabilidad 2025", visualType: "hero" },
  { title: "Adopción de IA en contabilidad", subtitle: "Solo el 4% de las empresas en Perú utiliza inteligencia artificial en el área contable (EY 2025).", footer: "Solo el 4% de las empresas en Perú utiliza inteligencia artificial en el área contable (EY 2025).", visualType: "adoption" },
  { title: "¿Cuánto dinero estuvo en riesgo en el 2025 por errores en las órdenes de compra?", subtitle: "", footer: "", visualType: "question" },
  { title: "El error nace mucho antes del pago", subtitle: "", footer: "El riesgo nace en errores de órdenes de compra y se acumula en reprocesos posteriores.", visualType: "reprocess" },
  { title: "Presentamos GIA", subtitle: "", footer: "", visualType: "giaIntro" },
  { title: "GIA interviene desde la selección del material", subtitle: "", footer: " ", visualType: "giaPoint" },
  { title: "El cerebro detrás de GIA", subtitle: "", footer: "", visualType: "backend" },
  { title: "El error ocurre aquí", subtitle: "Usuario genera OC → selecciona material → sistema asocia detracción → factura se registra → tesorería paga", footer: "El sistema no falla. Ejecuta lo que el usuario decide.", visualType: "flow" },
  { title: "El problema no es el proceso", subtitle: "El flujo existe. Las reglas existen. El sistema funciona.", footer: "El problema es la falta de validación en el punto de decisión." },
  { title: "Corregir después siempre es más costoso", subtitle: "Si el error nace en la imputación, todo el proceso posterior hereda ese error.", footer: "Prevenir antes es más eficiente que corregir después." },
  { title: "El control debe ocurrir antes", subtitle: "El único punto eficiente de intervención es antes de confirmar la imputación.", footer: "Ahí es donde debe existir guía." },
  { title: "Ahí aparece GIA", subtitle: "GIA es un agente conversacional de IA entrenado con reglas contables internas.", footer: "Interviene antes de que el error ocurra." },
  { title: "Cómo funciona en la práctica", subtitle: "El usuario consulta y GIA responde con criterios, códigos y validaciones.", footer: "Convierte una duda operativa en una decisión correcta." },
  { title: "El control pasa de correctivo a preventivo", subtitle: "Menos errores en origen, menos reprocesos y menor exposición fiscal.", footer: "GIA reduce el costo operativo y fiscal." },
  { title: "Hoy el control ocurre después del error", subtitle: "Los equipos corrigen cuando el impacto ya ocurrió.", footer: "GIA permite que el control ocurra antes." },
]);

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
