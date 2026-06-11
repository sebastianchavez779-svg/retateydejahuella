import { motion } from "framer-motion";

// Edit these values to tune the background palette and animation speed.
const COLORS = Object.freeze({
  baseLight: "#FFFFFF",
  base: "#FFFFFF",
  baseWarm: "#FFFFFF",
  organicGreen: "#B1DC6B",
  organicCyan: "#53DBFF",
  waveAccent: "#F8F2E9",
});

const TIMING = Object.freeze({
  base: 0.7,
  waves: 1.1,
  side: 1.0,
  tech: 1.35,
  drift: 18,
});

const nodes = [
  { cx: 968, cy: 176, delay: 1.9 },
  { cx: 1038, cy: 132, delay: 2.05 },
  { cx: 1118, cy: 186, delay: 2.2 },
  { cx: 1176, cy: 278, delay: 2.35 },
  { cx: 1062, cy: 326, delay: 2.5 },
  { cx: 1160, cy: 426, delay: 2.65 },
];

const particles = [
  { x: 892, y: 92, size: 5, delay: 2.3, driftX: 12, driftY: -10 },
  { x: 1206, y: 126, size: 4, delay: 2.45, driftX: -10, driftY: 14 },
  { x: 998, y: 404, size: 3, delay: 2.6, driftX: 8, driftY: 12 },
  { x: 1168, y: 536, size: 5, delay: 2.75, driftX: -12, driftY: -8 },
  { x: 804, y: 242, size: 3, delay: 2.9, driftX: 10, driftY: 10 },
  { x: 1228, y: 350, size: 3, delay: 3.05, driftX: -8, driftY: 9 },
];

const WAVE_TILE_WIDTH = 1440;
const WAVE_Y_OFFSET = 28;
const TOP_WAVE_PATH =
  "M0,14 C120,76 240,76 360,14 C480,-48 600,-48 720,14 C840,76 960,76 1080,14 C1200,-48 1320,-48 1440,14 L1440,-220 L0,-220 Z";
const ACCENT_WAVE_PATH =
  "M0,24 C120,64 240,64 360,24 C480,-16 600,-16 720,24 C840,64 960,64 1080,24 C1200,-16 1320,-16 1440,24 L1440,-200 L0,-200 Z";

export default function TechPresentationBackground({ animateTopWaves = false }) {
  const waveFlowAnimation = animateTopWaves ? { x: [-WAVE_TILE_WIDTH, 0] } : { x: 0 };
  const waveFlowTransition = animateTopWaves
    ? { duration: 52, ease: "linear", repeat: Infinity }
    : { duration: 0, ease: "linear" };
  const accentFlowAnimation = animateTopWaves ? { x: [-WAVE_TILE_WIDTH, 0] } : { x: 0 };
  const accentFlowTransition = animateTopWaves
    ? { duration: 44, ease: "linear", repeat: Infinity }
    : { duration: 0, ease: "linear" };
  const primaryWaveBobAnimation = animateTopWaves ? { y: [0, -7, 0, 5, 0] } : { y: 0 };
  const accentWaveBobAnimation = animateTopWaves ? { y: [0, 7, 0, -5, 0] } : { y: 0 };
  const waveBobTransition = animateTopWaves
    ? { duration: 12, ease: "easeInOut", repeat: Infinity }
    : { duration: 0, ease: "linear" };

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      style={{
        background:
          `radial-gradient(circle at 78% 18%, rgba(255,255,255,0.28), transparent 32%), linear-gradient(135deg, ${COLORS.baseLight} 0%, ${COLORS.base} 48%, ${COLORS.baseWarm} 100%)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: TIMING.base, ease: "easeOut" }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(83,219,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(83,219,255,0.22) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.15) 48%, rgba(0,0,0,0.95) 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.1, delay: 2.15 }}
      />

      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1280 720"
        preserveAspectRatio="none"
        initial={false}
      >
        <defs>
          <linearGradient id="topWaveGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={COLORS.organicGreen} stopOpacity="0.88" />
            <stop offset="58%" stopColor={COLORS.organicGreen} stopOpacity="0.66" />
            <stop offset="100%" stopColor={COLORS.organicCyan} stopOpacity="0.72" />
          </linearGradient>
          <radialGradient id="blobGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={COLORS.organicCyan} stopOpacity="0.32" />
            <stop offset="58%" stopColor={COLORS.organicGreen} stopOpacity="0.16" />
            <stop offset="100%" stopColor={COLORS.organicCyan} stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: TIMING.waves, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          transform={`translate(0 ${WAVE_Y_OFFSET})`}
        >
          <motion.g animate={primaryWaveBobAnimation} transition={waveBobTransition}>
            <motion.g animate={waveFlowAnimation} transition={waveFlowTransition}>
              <path d={TOP_WAVE_PATH} fill="url(#topWaveGradient)" transform={`translate(-${WAVE_TILE_WIDTH} 0)`} />
              <path d={TOP_WAVE_PATH} fill="url(#topWaveGradient)" />
              <path d={TOP_WAVE_PATH} fill="url(#topWaveGradient)" transform={`translate(${WAVE_TILE_WIDTH} 0)`} />
            </motion.g>
          </motion.g>
          <motion.g
            animate={accentWaveBobAnimation}
            transition={waveBobTransition}
          >
            <motion.g
              animate={accentFlowAnimation}
              transition={accentFlowTransition}
              style={{ opacity: 0.4 }}
            >
              <path d={ACCENT_WAVE_PATH} fill={COLORS.waveAccent} transform={`translate(-${WAVE_TILE_WIDTH} 0)`} />
              <path d={ACCENT_WAVE_PATH} fill={COLORS.waveAccent} />
              <path d={ACCENT_WAVE_PATH} fill={COLORS.waveAccent} transform={`translate(${WAVE_TILE_WIDTH} 0)`} />
            </motion.g>
          </motion.g>
        </motion.g>

        {nodes.map((node) => (
          <motion.g
            key={`${node.cx}-${node.cy}`}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: node.delay, ease: "easeOut" }}
            transform={`translate(${node.cx} ${node.cy})`}
          >
            <circle r="8" fill="#FFFFFF" opacity="0.85" />
            <circle r="4" fill={COLORS.organicCyan} opacity="0.75" />
          </motion.g>
        ))}

        {particles.map((particle) => (
          <motion.circle
            key={`${particle.x}-${particle.y}`}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={particle.size > 3 ? COLORS.organicGreen : COLORS.organicCyan}
            opacity="0.58"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0.18, 0.62, 0.28],
              x: [0, particle.driftX, 0],
              y: [0, particle.driftY, 0],
            }}
            transition={{ duration: 10 + particle.size * 1.6, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.svg>

      <motion.div
        className="absolute right-[1%] bottom-[4%] h-56 w-56 rounded-full blur-[62px]"
        style={{ background: "rgba(177,220,107,0.18)" }}
        initial={{ opacity: 0, scale: 0.84 }}
        animate={{ opacity: [0.12, 0.26, 0.12], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, delay: 2.0, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
