import { motion } from "framer-motion";
import locatariosTitle from "../assets/slide09-locatarios-title.png";
import { createSlide } from "./shared/createSlide";

const TITLE_DURATION = 2.05;
const CONTENT_DELAY = TITLE_DURATION - 0.02;
const EASE_OUT = [0.16, 1, 0.3, 1];

const LIME = "#B1DC6B";
const GREEN = "#3D9D23";
const CYAN = "#53DBFF";
const BLUE = "#17AEEA";
const INK = "#26322E";
const BODY = "rgba(38,50,46,0.66)";

const benefits = [
  {
    number: "01",
    title: "Mas visibilidad",
    detail: "El locatario aparece como Tienda Verde Layo dentro del ecosistema.",
    accent: GREEN,
  },
  {
    number: "02",
    title: "Mas trafico",
    detail: "Los visitantes encuentran razones concretas para acercarse a la tienda.",
    accent: CYAN,
  },
  {
    number: "03",
    title: "Mas ventas",
    detail: "Las huellas activan canjes, promociones y preferencia de compra.",
    accent: BLUE,
  },
];

function Slide09Decor() {
  const dots = [
    { left: "14%", top: "30%", size: 8, color: LIME, delay: 0.1 },
    { left: "84%", top: "30%", size: 6, color: CYAN, delay: 0.42 },
    { left: "20%", top: "75%", size: 6, color: CYAN, delay: 0.74 },
    { left: "79%", top: "76%", size: 8, color: LIME, delay: 1.04 },
  ];

  return (
    <>
      <motion.div
        className="absolute left-[9%] top-[35%] z-0 h-[220px] w-[220px] rounded-full blur-[78px]"
        style={{ background: "rgba(177,220,107,0.16)" }}
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: [0.12, 0.24, 0.12], scale: [1, 1.08, 1] }}
        transition={{
          duration: 12,
          delay: TITLE_DURATION + 0.24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[9%] top-[38%] z-0 h-[236px] w-[236px] rounded-full blur-[82px]"
        style={{ background: "rgba(83,219,255,0.15)" }}
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: [0.1, 0.22, 0.1], scale: [1, 1.08, 1] }}
        transition={{
          duration: 13,
          delay: TITLE_DURATION + 0.52,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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

function BenefitCard({ item, index }) {
  return (
    <motion.div
      className="relative flex h-[172px] flex-col justify-between overflow-hidden rounded-[1.45rem] border border-white bg-white/86 px-6 py-6 backdrop-blur-sm"
      style={{
        boxShadow: `0 18px 38px rgba(35,43,58,0.08), 0 0 30px ${item.accent}18`,
      }}
      initial={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.58,
        delay: CONTENT_DELAY + 0.28 + index * 0.12,
        ease: EASE_OUT,
      }}
    >
      <span
        className="absolute -right-10 -top-10 h-[112px] w-[112px] rounded-full"
        style={{ background: `${item.accent}20` }}
      />

      <div className="relative flex items-center justify-between">
        <span
          className="text-[0.68rem] font-black uppercase leading-none tracking-[0.16em]"
          style={{ color: item.accent }}
        >
          {item.number}
        </span>

        <span
          className="h-3 w-12 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${item.accent}, rgba(255,255,255,0.72))`,
          }}
        />
      </div>

      <div className="relative">
        <h3 className="text-[1.52rem] font-black leading-none tracking-normal" style={{ color: INK }}>
          {item.title}
        </h3>

        <p className="mt-3 text-[0.9rem] font-semibold leading-[1.35]" style={{ color: BODY }}>
          {item.detail}
        </p>
      </div>
    </motion.div>
  );
}

function LocatariosBoard() {
  return (
    <motion.div
      className="absolute left-1/2 top-[31%] z-20 w-[1010px] rounded-[2rem] border border-white/80 bg-white/62 px-8 py-7 backdrop-blur-[14px]"
      style={{ boxShadow: "0 26px 70px rgba(35,43,58,0.08)" }}
      initial={{ opacity: 0, x: "-50%", y: 24, scale: 0.98, filter: "blur(12px)" }}
      animate={{ opacity: 1, x: "-50%", y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.7,
        delay: CONTENT_DELAY + 0.08,
        ease: EASE_OUT,
      }}
    >
      <div className="mb-6 flex items-end justify-between gap-8">
        <div>
          <p className="text-[0.76rem] font-black uppercase leading-none tracking-[0.18em]" style={{ color: CYAN }}>
            Locatarios
          </p>

          <h2 className="mt-3 text-[2.05rem] font-black leading-[1.02] tracking-normal" style={{ color: INK }}>
            La sostenibilidad se convierte en negocio.
          </h2>
        </div>

        <div className="shrink-0 rounded-full px-5 py-3" style={{ background: "rgba(177,220,107,0.26)" }}>
          <span className="text-[0.72rem] font-black uppercase leading-none tracking-[0.14em]" style={{ color: GREEN }}>
            Tienda Verde Layo
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {benefits.map((item, index) => (
          <BenefitCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

function Slide09Component() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Slide09Decor />

      <motion.img
        src={locatariosTitle}
        alt="Locatarios"
        className="absolute left-1/2 top-1/2 z-30 w-[900px] max-w-none select-none"
        style={{ transformOrigin: "center center" }}
        initial={{
          x: "-50%",
          y: "-50%",
          scale: 0.78,
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{
          x: ["-50%", "-50%", "-50%"],
          y: ["-50%", "-50%", "-92%"],
          scale: [0.78, 1, 0.48],
          opacity: [0, 1, 1],
          filter: [
            "blur(10px) drop-shadow(0 0 0 rgba(33, 74, 24, 0))",
            "blur(0px) drop-shadow(0 34px 60px rgba(33, 74, 24, 0.22))",
            "blur(0px) drop-shadow(0 26px 44px rgba(33, 74, 24, 0.18))",
          ],
        }}
        transition={{
          duration: TITLE_DURATION,
          times: [0, 0.36, 1],
          ease: EASE_OUT,
        }}
      />

      <LocatariosBoard />
    </div>
  );
}

export default createSlide({
  id: "slide09",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide09Component,
});
