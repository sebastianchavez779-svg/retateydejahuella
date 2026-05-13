import { motion } from "framer-motion";
import { BRAND } from "../presentationConfig";
import { createSlide } from "./shared/createSlide";

const cards = [
  {
    title: "Operativo",
    text: "Eliminación de reprocesos y reducción drástica de la carga de validación manual.",
    icon: "gears",
    accent: BRAND.blue,
  },
  {
    title: "Financiero",
    text: "Protección total del crédito fiscal y eliminación de contingencias o multas por imputaciones erróneas.",
    icon: "shield",
    accent: BRAND.purple,
  },
  {
    title: "Organizacional",
    text: "Estandarización de criterios y optimización del tiempo del equipo experto contable.",
    icon: "network",
    accent: BRAND.yellow,
  },
];

function Slide08Component({ slide }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      <h1
        className="relative z-10 max-w-[820px] text-[3.5rem] font-bold leading-[1.02] tracking-[-0.04em]"
        style={{ color: BRAND.purple }}
      >
        {slide.title}
      </h1>

      <div className="relative z-10 flex flex-1 items-center">
        <div className="grid w-full grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.16 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative min-h-[292px] overflow-hidden rounded-[1.45rem] border border-white/70 bg-white/58 px-8 py-8 shadow-[0_24px_60px_rgba(20,20,40,0.09)] backdrop-blur-2xl"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, ${card.accent}, rgba(255,255,255,0.25))` }}
              />
              <div
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-2xl"
                style={{ background: card.accent }}
              />

              <Icon type={card.icon} color={card.accent} />

              <h2 className="mt-8 text-[29px] font-extrabold leading-none tracking-[-0.035em]" style={{ color: BRAND.dark }}>
                {card.title}
              </h2>
              <p className="mt-5 max-w-[315px] text-[18px] font-medium leading-[1.42]" style={{ color: BRAND.body }}>
                {card.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Icon({ type, color }) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/75 bg-white/55 shadow-[0_14px_30px_rgba(20,20,40,0.08)]">
      {type === "gears" ? <GearsIcon color={color} /> : null}
      {type === "shield" ? <ShieldIcon color={color} /> : null}
      {type === "network" ? <NetworkIcon color={color} /> : null}
    </div>
  );
}

function GearsIcon({ color }) {
  return (
    <svg width="40" height="40" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <circle cx="13" cy="20" r="5.5" stroke={color} strokeWidth="2.2" />
      <path d="M13 11.5V8.8M13 31.2v-2.7M21.5 20h2.7M1.8 20h2.7M19 14l1.9-1.9M5.1 27.9 7 26M19 26l1.9 1.9M5.1 12.1 7 14" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="24.2" cy="9.8" r="3.5" stroke={color} strokeWidth="1.9" opacity="0.72" />
      <path d="M24.2 4.5V3M24.2 16.6v-1.5M29.5 9.8H31M17.4 9.8h1.5M28 6l1.1-1.1M19.3 14.7l1.1-1.1M28 13.6l1.1 1.1M19.3 4.9l1.1 1.1" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.72" />
    </svg>
  );
}

function ShieldIcon({ color }) {
  return (
    <svg width="40" height="40" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <path d="M17 4.4 27.2 8.7v7.5c0 6.4-4 11.7-10.2 14.5C10.8 27.9 6.8 22.6 6.8 16.2V8.7L17 4.4z" stroke={color} strokeWidth="2.3" strokeLinejoin="round" />
      <path d="m12.4 17.1 3 3 6.4-7" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NetworkIcon({ color }) {
  return (
    <svg width="40" height="40" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <path d="M17 9.2 9.8 14v8l7.2 4.8 7.2-4.8v-8L17 9.2z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M17 9.2v17.6M9.8 14l14.4 8M24.2 14 9.8 22" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <circle cx="17" cy="8" r="3" fill="#f7f7f9" stroke={color} strokeWidth="2" />
      <circle cx="8.5" cy="14" r="3" fill="#f7f7f9" stroke={color} strokeWidth="2" />
      <circle cx="25.5" cy="14" r="3" fill="#f7f7f9" stroke={color} strokeWidth="2" />
      <circle cx="8.5" cy="23" r="3" fill="#f7f7f9" stroke={color} strokeWidth="2" />
      <circle cx="25.5" cy="23" r="3" fill="#f7f7f9" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export default createSlide({
  id: "slide08",
  title: "Retorno de inversión en tres dimensiones",
  layout: {
    padding: "pt-[5.2%] pb-[54px]",
  },
  Component: Slide08Component,
});
