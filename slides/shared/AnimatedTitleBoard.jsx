import { motion } from "framer-motion";

export const TITLE_DURATION = 2.05;
export const CONTENT_DELAY = TITLE_DURATION - 0.02;
export const EASE_OUT = [0.16, 1, 0.3, 1];

export const COLORS = {
  lime: "#B1DC6B",
  green: "#3D9D23",
  cyan: "#53DBFF",
  blue: "#17AEEA",
  ink: "#26322E",
  body: "rgba(38,50,46,0.66)",
};

export function SoftDecor() {
  const dots = [
    { left: "14%", top: "30%", size: 8, color: COLORS.lime, delay: 0.1 },
    { left: "84%", top: "30%", size: 6, color: COLORS.cyan, delay: 0.42 },
    { left: "20%", top: "75%", size: 6, color: COLORS.cyan, delay: 0.74 },
    { left: "79%", top: "76%", size: 8, color: COLORS.lime, delay: 1.04 },
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

export function AnimatedTitleImage({ alt, src, widthClass = "w-[870px]" }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`absolute left-1/2 top-1/2 z-30 max-w-none select-none ${widthClass}`}
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
  );
}

export function FeatureCard({ item, index, cardClass = "h-[188px]" }) {
  return (
    <motion.div
      className={`relative flex flex-col justify-between overflow-hidden rounded-[1.45rem] border border-white bg-white/86 px-6 py-6 backdrop-blur-sm ${cardClass}`}
      style={{
        boxShadow: `0 18px 38px rgba(35,43,58,0.08), 0 0 30px ${item.accent}18`,
      }}
      initial={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.58,
        delay: CONTENT_DELAY + 0.28 + index * 0.1,
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
        <h3 className="text-[1.42rem] font-black leading-[1.02] tracking-normal" style={{ color: COLORS.ink }}>
          {item.title}
        </h3>

        <p className="mt-3 text-[0.84rem] font-semibold leading-[1.34]" style={{ color: COLORS.body }}>
          {item.detail}
        </p>
      </div>

      <div className="relative w-fit rounded-full px-4 py-2" style={{ background: `${item.accent}22` }}>
        <span className="text-[0.64rem] font-black uppercase leading-none tracking-[0.12em]" style={{ color: COLORS.ink }}>
          {item.stat}
        </span>
      </div>
    </motion.div>
  );
}

export function FeatureBoard({
  badge,
  cardClass,
  gridClass = "grid-cols-3",
  items,
  title,
  topic,
  widthClass = "w-[1010px]",
}) {
  return (
    <motion.div
      className={`absolute left-1/2 top-[31%] z-20 rounded-[2rem] border border-white/80 bg-white/62 px-8 py-7 backdrop-blur-[14px] ${widthClass}`}
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
          <p className="text-[0.76rem] font-black uppercase leading-none tracking-[0.18em]" style={{ color: COLORS.cyan }}>
            {topic}
          </p>

          <h2 className="mt-3 text-[2.02rem] font-black leading-[1.03] tracking-normal" style={{ color: COLORS.ink }}>
            {title}
          </h2>
        </div>

        <div className="shrink-0 rounded-full px-5 py-3" style={{ background: "rgba(177,220,107,0.26)" }}>
          <span className="text-[0.72rem] font-black uppercase leading-none tracking-[0.14em]" style={{ color: COLORS.green }}>
            {badge}
          </span>
        </div>
      </div>

      <div className={`grid gap-5 ${gridClass}`}>
        {items.map((item, index) => (
          <FeatureCard key={item.title} item={item} index={index} cardClass={cardClass} />
        ))}
      </div>
    </motion.div>
  );
}
