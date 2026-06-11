import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import layoHuellaFrugalidadTitle from "../assets/layo-huella-frugalidad-title.png";
import { createSlide } from "./shared/createSlide";

const EASE_OUT = [0.16, 1, 0.3, 1];
const ANIMATION_SPEED = 1.5;
const speed = (seconds) => seconds / ANIMATION_SPEED;

const TITLE_SETTLE_DELAY = speed(1.42);
const TITLE_SEQUENCE_DURATION = 1;
const CONTENT_REVEAL_DELAY = TITLE_SEQUENCE_DURATION + 0.08;
const FOOTER_REVEAL_DELAY = CONTENT_REVEAL_DELAY + 4.8;

const CYAN = "#53DBFF";
const LIME = "#B1DC6B";
const GREEN = "#72BF44";
const GREEN_DARK = "#2F8E38";
const GREEN_DEEP = "#1F6F34";
const INK = "#20312D";
const BODY = "rgba(73,86,83,0.78)";

const capabilities = [
  {
    title: "DATA",
    detail: "rentabilizar lo existente",
    color: LIME,
    x: 835,
    y: 94,
    width: 206,
    height: 70,
    path: "M618 210 C688 166 748 130 832 129",
  },
  {
    title: "HÁBITO",
    detail: "reconocer la acción",
    color: LIME,
    x: 835,
    y: 201,
    width: 206,
    height: 70,
    path: "M620 235 C694 232 756 235 832 236",
  },
  {
    title: "BENEFICIO",
    detail: "premiar sin fricción",
    color: LIME,
    x: 835,
    y: 308,
    width: 206,
    height: 70,
    path: "M618 260 C688 306 750 338 832 343",
  },
];

function FloatingDots() {
  const dots = [
    { x: 162, y: 92, r: 4, color: LIME, delay: 0.35 },
    { x: 248, y: 326, r: 3, color: CYAN, delay: 0.7 },
    { x: 808, y: 88, r: 3.5, color: CYAN, delay: 0.95 },
    { x: 966, y: 398, r: 4, color: LIME, delay: 1.2 },
  ];

  return dots.map((dot) => (
    <motion.circle
      key={`${dot.x}-${dot.y}`}
      cx={dot.x}
      cy={dot.y}
      r={dot.r}
      fill={dot.color}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.16, 0.42, 0.22],
        scale: 1,
        y: [0, -6, 0],
      }}
      transition={{
        duration: 6,
        delay: dot.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ));
}

function BasePlatform() {
  return (
    <motion.g
      initial={{
        opacity: 0,
        y: -170,
        rotate: -3.2,
        scaleX: 0.92,
        scaleY: 1.05,
      }}
      animate={{
        opacity: [0, 1, 1, 1],
        y: [-170, 16, -7, 0],
        rotate: [-3.2, 1.2, -0.28, 0],
        scaleX: [0.92, 1.04, 0.99, 1],
        scaleY: [1.05, 0.91, 1.025, 1],
      }}
      transition={{
        duration: 1.06,
        delay: 0.18,
        times: [0, 0.58, 0.82, 1],
        ease: EASE_OUT,
      }}
      style={{ transformOrigin: "540px 310px" }}
    >
      <path
        d="M224 230 C300 198 428 178 520 168 C532 167 548 167 560 168 C656 178 784 200 856 230 C880 240 880 260 856 273 C782 311 654 335 568 348 C550 351 530 351 512 348 C424 335 294 311 224 273 C200 260 200 240 224 230 Z"
        fill="url(#slide06BaseTop)"
        stroke="rgba(255, 255, 255, 0.62)"
        strokeWidth="1.5"
      />

      <path
        d="M224 273 C294 311 424 335 512 348 C524 350 534 351 540 351 V440 C528 440 514 438 498 435 C410 421 286 391 224 357 C210 349 202 338 202 322 V252 C206 260 214 267 224 273 Z"
        fill="url(#slide06BaseLeftSide)"
      />

      <path
        d="M540 351 C548 351 558 350 568 348 C654 335 782 311 856 273 C866 267 874 260 878 252 V322 C878 340 868 350 852 359 C786 391 664 419 582 435 C566 438 552 440 540 440 Z"
        fill="url(#slide06BaseRightSide)"
      />

      <g filter="url(#slide06IntegratedLabelShadow)">
        <path
          d="M224 286 C262 304 318 320 382 331 V404 C316 391 260 372 224 352 C211 344 205 333 205 319 V270 C210 276 216 281 224 286 Z"
          fill="rgba(15,76,38,0.16)"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1.1"
        />

        <path
          d="M224 286 C262 304 318 320 382 331"
          fill="none"
          stroke="rgba(255,255,255,0.34)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <g transform="translate(350 360) skewY(15) scale(2 1.8)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="rgba(255,255,255,0.98)"
            fontSize="20"
            fontWeight="950"
            letterSpacing="0.4"
          >
            LOYALTY
          </text>

          <text
            x="0"
            y="17"
            textAnchor="middle"
            fill="rgba(231,255,209,0.9)"
            fontSize="10.5"
            fontWeight="800"
            letterSpacing="0"
          >
            base existente
          </text>
        </g>
      </g>

      <path
        d="M224 357 C300 394 424 424 518 437"
        fill="none"
        stroke="rgba(255, 255, 255, 0.4)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M878 322 C800 365 674 410 558 437"
        fill="none"
        stroke="rgba(255, 255, 255, 0.32)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M318 266 C396 296 492 315 556 318"
        fill="none"
        stroke="rgba(255,255,255,0.24)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M260 235 C338 208 442 190 524 181 C534 180 546 180 556 181 C638 190 742 208 820 235"
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </motion.g>
  );
}

function LayoLayer() {
  return (
    <motion.g
      initial={{
        opacity: 0,
        y: -116,
        rotate: 2.2,
        scale: 0.92,
      }}
      animate={{
        opacity: 1,
        y: [-116, 16, -5, 0],
        rotate: [2.2, -0.65, 0.22, 0],
        scale: [0.92, 1.045, 0.99, 1],
      }}
      transition={{
        duration: 1,
        delay: 1.08,
        times: [0, 0.66, 0.86, 1],
        ease: EASE_OUT,
      }}
      style={{ transformOrigin: "540px 186px" }}
    >
      <path
        d="M352 126 C394 108 468 94 522 86 C534 84 546 84 558 86 C616 94 690 108 728 126 C750 136 750 151 728 162 C676 188 606 205 558 213 C546 215 534 215 522 213 C474 205 402 188 352 162 C330 151 330 136 352 126 Z"
        fill="url(#slide06LayoTop)"
        stroke="#F2FFD8"
        strokeWidth="1.6"
      />

      <path
        d="M352 162 C402 188 474 205 522 213 C532 215 538 216 540 216 V292 C530 292 520 291 508 289 C458 280 382 258 352 241 C336 232 330 221 330 208 V143 C334 151 342 157 352 162 Z"
        fill="url(#slide06LayoLeftSide)"
      />

      <path
        d="M540 216 C546 216 552 215 558 213 C606 205 676 188 728 162 C738 157 746 151 750 143 V208 C750 224 744 234 728 242 C696 259 622 280 572 289 C560 291 550 292 540 292 Z"
        fill="url(#slide06LayoRightSide)"
      />

      <g filter="url(#slide06IntegratedLabelShadow)">
        <g transform="translate(424 233) skewY(15) scale(1.4 1.9)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="17.5"
            fontWeight="950"
            letterSpacing="0.3"
          >
            LAYO HUELLA
          </text>
        </g>

        <path
          d="M356 171 C394 190 440 203 492 213"
          fill="none"
          stroke="rgba(255,255,255,0.46)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </g>

      <path
        d="M332 208 C404 248 496 273 540 279"
        fill="none"
        stroke="#E8FFC6"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.68"
      />

      <path
        d="M750 208 C680 248 588 273 540 279"
        fill="none"
        stroke="#E8FFC6"
        strokeWidth="1.7"
        strokeLinecap="round"
        opacity="0.3"
      />

      <path
        d="M382 132 C430 116 490 105 532 100 C538 99 546 99 552 100 C596 105 658 116 704 132"
        fill="none"
        stroke="rgba(255,255,255,0.48)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </motion.g>
  );
}

function CapabilityCard({ item, index }) {
  return (
    <motion.g
      initial={{ opacity: 0, x: 30, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: [0.96, 1.03, 1] }}
      transition={{
        duration: 0.5,
        delay: 2.82 + index * 0.14,
        times: [0, 0.72, 1],
        ease: EASE_OUT,
      }}
      style={{
        transformOrigin: `${item.x + item.width / 2}px ${
          item.y + item.height / 2
        }px`,
      }}
    >
      <g filter="url(#slide06GlassCardShadow)">
        <rect
          x={item.x}
          y={item.y}
          width={item.width}
          height={item.height}
          rx="8"
          fill="url(#slide06CardFill)"
          stroke="rgba(255,255,255,0.94)"
          strokeWidth="1"
        />

        <rect
          x={item.x + 0.5}
          y={item.y + 0.5}
          width={item.width - 1}
          height={item.height - 1}
          rx="7.5"
          fill="none"
          stroke="rgba(57,95,74,0.10)"
          strokeWidth="1"
        />

        <path
          d={`M${item.x + 15} ${item.y + 14} V${item.y + item.height - 14}`}
          fill="none"
          stroke={item.color}
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle
          cx={item.x + 39}
          cy={item.y + 35}
          r="17"
          fill="rgba(177,220,107,0.14)"
        />

        <circle cx={item.x + 39} cy={item.y + 35} r="10" fill={item.color} />

        <circle
          cx={item.x + 39}
          cy={item.y + 35}
          r="4"
          fill="#FFFFFF"
          opacity="0.78"
        />

        <text
          x={item.x + 66}
          y={item.y + 30}
          fill={INK}
          fontSize="13.5"
          fontWeight="900"
        >
          {item.title}
        </text>

        <text
          x={item.x + 66}
          y={item.y + 50}
          fill={BODY}
          fontSize="11.2"
          fontWeight="700"
        >
          {item.detail}
        </text>
      </g>
    </motion.g>
  );
}

function ActivationFlows() {
  return (
    <g>
      {capabilities.map((item, index) => (
        <g key={item.path}>
          <path
            d={item.path}
            fill="none"
            stroke="rgba(32,49,45,0.08)"
            strokeWidth={index === 1 ? 7 : 6}
            strokeLinecap="round"
          />

          <motion.path
            d={item.path}
            fill="none"
            stroke={item.color}
            strokeWidth={index === 1 ? 3 : 2.4}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.92, 0.7] }}
            transition={{
              duration: 0.82,
              delay: 2.34 + index * 0.12,
              ease: "easeOut",
            }}
          />

          <motion.circle
            cx={item.x - 3}
            cy={item.y + item.height / 2}
            r="4.5"
            fill="#FFFFFF"
            stroke={item.color}
            strokeWidth="2.4"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.35,
              delay: 2.74 + index * 0.12,
              ease: EASE_OUT,
            }}
          />
        </g>
      ))}
    </g>
  );
}

function IntegrationGraphic() {
  return (
    <svg
      className="h-[430px] w-full max-w-[1090px] overflow-visible"
      viewBox="0 0 1080 452"
      role="img"
      aria-label="Layo Huella se acopla sobre Loyalty y activa capacidades existentes"
    >
      <defs>
        <linearGradient
          id="slide06LayoTop"
          x1="352"
          x2="728"
          y1="96"
          y2="188"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8FE348" />
          <stop offset="58%" stopColor={LIME} />
          <stop offset="100%" stopColor={GREEN} />
        </linearGradient>

        <linearGradient
          id="slide06BaseTop"
          x1="224"
          x2="856"
          y1="186"
          y2="324"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#42A13E" />
          <stop offset="42%" stopColor={GREEN_DARK} />
          <stop offset="100%" stopColor={GREEN_DEEP} />
        </linearGradient>

        <linearGradient
          id="slide06BaseLeftSide"
          x1="202"
          x2="540"
          y1="268"
          y2="432"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#32973B" />
          <stop offset="100%" stopColor="#1C6C32" />
        </linearGradient>

        <linearGradient
          id="slide06BaseRightSide"
          x1="540"
          x2="878"
          y1="268"
          y2="432"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#267E36" />
          <stop offset="100%" stopColor="#174F2C" />
        </linearGradient>

        <linearGradient
          id="slide06LayoLeftSide"
          x1="330"
          x2="540"
          y1="158"
          y2="286"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#83D747" />
          <stop offset="100%" stopColor="#4DA53A" />
        </linearGradient>

        <linearGradient
          id="slide06LayoRightSide"
          x1="540"
          x2="750"
          y1="158"
          y2="286"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#439A38" />
          <stop offset="100%" stopColor="#257035" />
        </linearGradient>

        <radialGradient id="slide06CenterGlow" cx="50%" cy="45%" r="56%">
          <stop offset="0%" stopColor={CYAN} stopOpacity="0.14" />
          <stop offset="56%" stopColor={LIME} stopOpacity="0.08" />
          <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
        </radialGradient>

        <linearGradient id="slide06CardFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="58%" stopColor="#F8FCFB" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#EEF8F0" stopOpacity="0.84" />
        </linearGradient>

        <filter
          id="slide06SoftShadow"
          x="-18%"
          y="-22%"
          width="136%"
          height="158%"
        >
          <feDropShadow
            dx="0"
            dy="18"
            stdDeviation="15"
            floodColor="#232B3A"
            floodOpacity="0.12"
          />
        </filter>

        <filter
          id="slide06GreenShadow"
          x="-18%"
          y="-22%"
          width="136%"
          height="158%"
        >
          <feDropShadow
            dx="0"
            dy="18"
            stdDeviation="13"
            floodColor="#72BF44"
            floodOpacity="0.18"
          />
        </filter>

        <filter
          id="slide06GlassCardShadow"
          x="-30%"
          y="-40%"
          width="180%"
          height="220%"
        >
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="11"
            floodColor="#1B2E28"
            floodOpacity="0.11"
          />
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="2"
            floodColor="#FFFFFF"
            floodOpacity="0.18"
          />
        </filter>

        <filter
          id="slide06IntegratedLabelShadow"
          x="-25%"
          y="-30%"
          width="160%"
          height="180%"
        >
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="5"
            floodColor="#1A1A1A"
            floodOpacity="0.18"
          />
        </filter>
      </defs>

      <ellipse
        cx="540"
        cy="238"
        rx="450"
        ry="214"
        fill="url(#slide06CenterGlow)"
      />

      <ellipse
        cx="540"
        cy="432"
        rx="340"
        ry="20"
        fill="rgba(31,57,48,0.07)"
      />

      <FloatingDots />

      <g filter="url(#slide06SoftShadow)">
        <BasePlatform />
      </g>

      <g filter="url(#slide06GreenShadow)">
        <LayoLayer />
      </g>

      <ActivationFlows />

      {capabilities.map((item, index) => (
        <CapabilityCard key={item.title} item={item} index={index} />
      ))}
    </svg>
  );
}

function StoryTitleImage() {
  return (
    <motion.img
      src={layoHuellaFrugalidadTitle}
      alt="Layo Huella potencia Loyalty"
      className="absolute left-1/2 top-[-6px] z-30 h-[180px] w-[560px] select-none object-contain"
      style={{
        filter: "drop-shadow(0 16px 18px rgba(69,118,36,0.16))",
      }}
      initial={{
        opacity: 0,
        x: "-50%",
        y: 202,
        scale: 0.86,
        filter: "blur(10px) drop-shadow(0 0 0 rgba(69,118,36,0))",
      }}
      animate={{
        opacity: [0, 1, 1, 1],
        x: "-50%",
        y: [202, 202, 202, 0],
        scale: [0.86, 1.04, 1, 0.86],
        filter: [
          "blur(10px) drop-shadow(0 0 0 rgba(69,118,36,0))",
          "blur(0px) drop-shadow(0 22px 24px rgba(69,118,36,0.16))",
          "blur(0px) drop-shadow(0 22px 24px rgba(69,118,36,0.16))",
          "blur(0px) drop-shadow(0 16px 18px rgba(69,118,36,0.16))",
        ],
      }}
      transition={{
        duration: TITLE_SETTLE_DELAY,
        times: [0, 0.3, 0.58, 1],
        ease: EASE_OUT,
      }}
    />
  );
}

function Slide06Component({ slide }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShowContent(true);
    }, CONTENT_REVEAL_DELAY * 1000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative h-full overflow-hidden">
      <StoryTitleImage />

      {showContent ? (
        <motion.div
          className="absolute inset-x-0 bottom-[106px] top-[172px] flex items-center justify-center"
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.58, ease: EASE_OUT }}
        >
          <IntegrationGraphic />
        </motion.div>
      ) : null}

      <motion.p
        className="absolute bottom-[50px] left-0 right-0 mx-auto w-full max-w-[930px] text-center text-[0.98rem] font-semibold leading-[1.42]"
        style={{ color: BODY }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.48,
          delay: FOOTER_REVEAL_DELAY,
          ease: "easeOut",
        }}
      >
        {slide.footer}
      </motion.p>
    </div>
  );
}

export default createSlide({
  id: "slide06",
  title: "Layo Huella potencia Loyalty",
  footer:
    "Layo Huella no crea un ecosistema nuevo; activa el existente para convertir intención sostenible en acción medible.",
  layout: {
    padding: "pt-[4.6%] pb-[24px]",
  },
  Component: Slide06Component,
});
