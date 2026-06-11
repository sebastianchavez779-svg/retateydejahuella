import { useId } from "react";
import { motion } from "framer-motion";
import marketOpportunityTitle from "../assets/market-opportunity-title-crop.png";
import { createSlide } from "./shared/createSlide";

const ANIMATION_SPEED = 1.5;
const speed = (seconds) => seconds / ANIMATION_SPEED;

const TITLE_DURATION = speed(1.42);
const DROP_START_DELAY = TITLE_DURATION + speed(0.22);
const DROP_STAGGER = speed(0.62);
const DROP_DURATION = speed(0.98);
const OPEN_STAGGER = speed(0.14);
const OPEN_DURATION = speed(0.92);

const TEXT_COLOR = "#FFFFFF";
const TEXT_SHADOW = "0 3px 9px rgba(0,0,0,0.36)";

const funnelLevels = [
  {
    label: "TAM",
    name: "Mercado total disponible",
    metric: "1.6MM usuarios",
    blockWidth: 196,
    width: 700,
    height: 112,
    topColor: "#8FD43C",
    midColor: "#65B031",
    bottomColor: "#3F7D26",
    stroke: "rgba(48,80,22,0.24)",
    labelSize: "text-[2.54rem]",
    nameSize: "text-[1.04rem]",
    metricSize: "text-[1.8rem]",
    labelColumn: 104,
    paddingLeft: 38,
    paddingRight: 58,
  },
  {
    label: "SAM",
    name: "Mercado servible alcanzable",
    metric: "243K usuarios activos",
    blockWidth: 196,
    width: 540,
    height: 104,
    topColor: "#4BAA3D",
    midColor: "#2D8338",
    bottomColor: "#1B6230",
    stroke: "rgba(255,255,255,0.24)",
    labelSize: "text-[2.26rem]",
    nameSize: "text-[0.96rem]",
    metricSize: "text-[1.8rem]",
    labelColumn: 96,
    paddingLeft: 38,
    paddingRight: 48,
  },
  {
    label: "SOM",
    name: "Mercado obtenible inicial",
    metric: "13K usuarios alto valor",
    blockWidth: 196,
    width: 405,
    height: 98,
    topColor: "#14784E",
    midColor: "#0C5D3C",
    bottomColor: "#063927",
    stroke: "rgba(5,46,31,0.34)",
    labelSize: "text-[2.04rem]",
    nameSize: "text-[0.88rem]",
    metricSize: "text-[1.8rem]",
    labelColumn: 88,
    paddingLeft: 36,
    paddingRight: 40,
  },
];

const OPEN_START_DELAY =
  DROP_START_DELAY +
  DROP_STAGGER * (funnelLevels.length - 1) +
  DROP_DURATION +
  speed(0.28);

function createPlatePath(width, height) {
  const radius = Math.min(20, height * 0.24, width * 0.12);

  return [
    "M 1 1",
    `L ${width - radius} 1`,
    `Q ${width} 1 ${width} ${radius}`,
    `L ${width} ${height - radius}`,
    `Q ${width} ${height - 1} ${width - radius} ${height - 1}`,
    `L 1 ${height - 1}`,
    "Z",
  ].join(" ");
}

function MarketTitle() {
  return (
    <motion.img
      src={marketOpportunityTitle}
      alt="Oportunidad de mercado"
      className="absolute left-1/2 top-[-2px] z-30 h-[194px] w-[750px] select-none object-contain"
      style={{
        transformOrigin: "center center",
        filter: "drop-shadow(0 16px 20px rgba(69,118,36,0.18))",
      }}
      initial={{
        opacity: 0,
        x: "-50%",
        y: 214,
        scale: 0.86,
        filter: "blur(10px) drop-shadow(0 0 0 rgba(69,118,36,0))",
      }}
      animate={{
        opacity: [0, 1, 1],
        x: "-50%",
        y: [214, 214, 0],
        scale: [0.86, 1.05, 0.8],
        filter: [
          "blur(10px) drop-shadow(0 0 0 rgba(69,118,36,0))",
          "blur(0px) drop-shadow(0 24px 24px rgba(69,118,36,0.18))",
          "blur(0px) drop-shadow(0 16px 20px rgba(69,118,36,0.18))",
        ],
      }}
      transition={{
        duration: TITLE_DURATION,
        times: [0, 0.36, 1],
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  );
}

function FunnelPlate({ level, index }) {
  const reactId = useId();
  const safeId = reactId.replace(/:/g, "");
  const gradientId = `${safeId}-funnel-fill-${level.label.toLowerCase()}`;

  const dropDelay = DROP_START_DELAY + index * DROP_STAGGER;
  const openDelay = OPEN_START_DELAY + index * OPEN_STAGGER;

  const overshootWidth = level.width + 26 - index * 6;
  const canvasWidth = overshootWidth + 22;

  const blockPath = createPlatePath(level.blockWidth, level.height);
  const overshootPath = createPlatePath(overshootWidth, level.height);
  const funnelPath = createPlatePath(level.width, level.height);

  const widthFrames = [level.blockWidth, overshootWidth, level.width];

  const openTransition = {
    duration: OPEN_DURATION,
    delay: openDelay,
    times: [0, 0.72, 1],
    ease: [0.2, 1, 0.24, 1],
  };

  return (
    <motion.div
      className="relative"
      style={{
        width: canvasWidth,
        height: level.height,
        transformOrigin: "left bottom",
        zIndex: funnelLevels.length - index,
      }}
      initial={{
        opacity: 0,
        x: -34,
        y: -240,
        rotate: -4.5 + index * 1.4,
        scaleX: 0.98,
        scaleY: 1.03,
      }}
      animate={{
        opacity: [0, 1, 1, 1, 1, 1],
        x: [-34, 8, -5, 2, 0, 0],
        y: [-240, 0, -34, 0, -9, 0],
        rotate: [-4.5 + index * 1.4, 1.8, -0.9, 0.42, -0.16, 0],
        scaleX: [0.98, 1.08, 0.97, 1.03, 0.995, 1],
        scaleY: [1.03, 0.88, 1.05, 0.96, 1.015, 1],
      }}
      transition={{
        duration: DROP_DURATION,
        delay: dropDelay,
        times: [0, 0.48, 0.66, 0.82, 0.94, 1],
        ease: [0.16, 1, 0.28, 1],
      }}
    >
      <svg
        className="absolute left-0 top-0 h-full overflow-visible"
        width={canvasWidth}
        height={level.height}
        viewBox={`0 0 ${canvasWidth} ${level.height}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0.08" x2="0.86" y1="0" y2="1">
            <stop offset="0%" stopColor={level.topColor} />
            <stop offset="55%" stopColor={level.midColor} />
            <stop offset="100%" stopColor={level.bottomColor} />
          </linearGradient>
        </defs>

        <motion.path
          initial={{ d: blockPath }}
          animate={{ d: [blockPath, overshootPath, funnelPath] }}
          transition={openTransition}
          fill={`url(#${gradientId})`}
          stroke={level.stroke}
          strokeWidth="1.6"
          style={{ filter: "drop-shadow(0 12px 18px rgba(17,52,31,0.2))" }}
        />

        <motion.path
          initial={{ d: blockPath }}
          animate={{ d: [blockPath, overshootPath, funnelPath] }}
          transition={openTransition}
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />
      </svg>

      <motion.div
        className="absolute left-0 top-0 z-10 grid h-full items-center overflow-hidden"
        style={{
          gridTemplateColumns: `${level.labelColumn}px minmax(0, 1fr)`,
          paddingLeft: level.paddingLeft,
          paddingRight: level.paddingRight,
        }}
        initial={{ width: widthFrames[0] }}
        animate={{ width: widthFrames }}
        transition={openTransition}
      >
        <p
          className={`${level.labelSize} max-w-full overflow-hidden text-ellipsis whitespace-nowrap font-black leading-none tracking-normal`}
          style={{
            color: TEXT_COLOR,
            textShadow: TEXT_SHADOW,
          }}
        >
          {level.label}
        </p>

        <motion.p
          className={`${level.nameSize} min-w-0 overflow-hidden text-ellipsis whitespace-nowrap font-black leading-[1.05] tracking-normal`}
          style={{
            color: TEXT_COLOR,
            textShadow: TEXT_SHADOW,
          }}
          initial={{
            opacity: 0,
            x: -8,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: speed(0.34),
            delay: openDelay + speed(0.24),
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {level.name}
        </motion.p>
      </motion.div>

      <motion.p
        className={`absolute top-1/2 z-30 -translate-y-1/2 whitespace-nowrap ${level.metricSize} font-black leading-none tracking-tight`}
        style={{
          left: level.width + 34,
          color: "#0C5D3C",
          textShadow: "0 2px 8px rgba(255,255,255,0.55)",
        }}
        initial={{
          opacity: 0,
          x: -10,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: speed(0.38),
          delay: openDelay + speed(0.36),
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {level.metric}
      </motion.p>
    </motion.div>
  );
}

function FunnelStage() {
  return (
    <div className="absolute left-[100px] top-[232px] z-20 flex flex-col items-start gap-[16px]">
      <div
        className="absolute left-[-10px] top-0 z-20 w-[0px] rounded-full"
        style={{
          height: 112 + 16 + 104 + 16 + 98,
          background:
            "linear-gradient(180deg, rgba(44,112,34,0.15), rgba(4,52,33,0.56), rgba(4,52,33,0.18))",
        }}
        aria-hidden="true"
      />

      {funnelLevels.map((level, index) => (
        <FunnelPlate key={level.label} level={level} index={index} />
      ))}
    </div>
  );
}

function Slide04Component() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <MarketTitle />
      <FunnelStage />
    </div>
  );
}

export default createSlide({
  id: "slide04",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide04Component,
});
