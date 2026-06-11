import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import personSilhouette from "../assets/person-silhouette.png";
import { createSlide } from "./shared/createSlide";

const COLORS = Object.freeze({
  gray: "#939B9A",
  grayDark: "#697371",
  grayLight: "#BBC2BE",
  green: "#72BF44",
  greenDark: "#3E852D",
  greenLight: "#B8F06A",
  river: "#54D6F7",
  riverDeep: "#168FBD",
  riverFoam: "#DDF9FF",
  bank: "#F2F9E8",
  bankDeep: "#CFE9B4",
  meadow: "#DFF2C2",
  wood: "#C5864B",
  woodDark: "#70411F",
  woodLight: "#F2C078",
  hand: "#F3C59B",
  handShade: "#D99A6C",
  sleeve: "#7AC943",
});

const SCENE_DURATION = 10.6;
const ENTER_DURATION = 1.15;
const ENTER_STAGGER = 0.06;
const LEAVER_START_DELAY = 2.15;
const LEAVER_EXIT_DURATION = 1.18;
const JUMPER_START_DELAY = 3.72;
const JUMPER_STAGGER = 0.58;
const JUMP_DURATION = 1.18;
const BRIDGE_DELAY = 6.12;
const BRIDGE_CROSS_START_DELAY = 7.52;
const BRIDGE_CROSS_STAGGER = 0.2;
const BRIDGE_CROSS_DURATION = 1.28;
const COLOR_DURATION = 1.05;
const NARRATION_DELAY = 9.35;
const TYPEWRITER_INTERVAL_MS = 42;
const NARRATION_LINES = ["Seamos", "el puente", "entre la", "intención", "y la acción"];

const jumpers = [
  { id: "jump-1", entry: { x: -142, y: 250 }, bank: { x: 374, y: 244 }, end: { x: 840, y: 202 }, enterDelay: ENTER_STAGGER * 3, jumpDelay: JUMPER_START_DELAY, scale: 1.02 },
  { id: "jump-2", entry: { x: -132, y: 350 }, bank: { x: 408, y: 342 }, end: { x: 920, y: 314 }, enterDelay: ENTER_STAGGER * 4, jumpDelay: JUMPER_START_DELAY + JUMPER_STAGGER, scale: 0.98 },
  { id: "jump-3", entry: { x: -148, y: 456 }, bank: { x: 366, y: 448 }, end: { x: 930, y: 458 }, enterDelay: ENTER_STAGGER * 5, jumpDelay: JUMPER_START_DELAY + JUMPER_STAGGER * 2, scale: 1.0 },
];

const leavers = [
  { id: "leave-1", entry: { x: -150, y: 224 }, bank: { x: 280, y: 214 }, exit: { x: -120, y: 134 }, enterDelay: ENTER_STAGGER * 0, leaveDelay: LEAVER_START_DELAY, rotate: -18, scale: 0.92 },
  { id: "leave-2", entry: { x: -136, y: 366 }, bank: { x: 258, y: 348 }, exit: { x: -132, y: 344 }, enterDelay: ENTER_STAGGER * 1, leaveDelay: LEAVER_START_DELAY + 0.16, rotate: -10, scale: 0.92 },
  { id: "leave-3", entry: { x: -154, y: 512 }, bank: { x: 292, y: 494 }, exit: { x: -116, y: 608 }, enterDelay: ENTER_STAGGER * 2, leaveDelay: LEAVER_START_DELAY + 0.32, rotate: 14, scale: 0.92 },
];

const bridgeCrossers = [
  { id: "bridge-1", entry: { x: -128, y: 228 }, bank: { x: 468, y: 226 }, bridge: { x: 614, y: 326 }, end: { x: 1020, y: 210 }, enterDelay: ENTER_STAGGER * 6, crossDelay: BRIDGE_CROSS_START_DELAY, scale: 0.94 },
  { id: "bridge-2", entry: { x: -150, y: 322 }, bank: { x: 492, y: 318 }, bridge: { x: 648, y: 342 }, end: { x: 1090, y: 330 }, enterDelay: ENTER_STAGGER * 7, crossDelay: BRIDGE_CROSS_START_DELAY + BRIDGE_CROSS_STAGGER, scale: 0.94 },
  { id: "bridge-3", entry: { x: -138, y: 418 }, bank: { x: 472, y: 412 }, bridge: { x: 682, y: 386 }, end: { x: 1010, y: 450 }, enterDelay: ENTER_STAGGER * 8, crossDelay: BRIDGE_CROSS_START_DELAY + BRIDGE_CROSS_STAGGER * 2, scale: 0.94 },
  { id: "bridge-4", entry: { x: -158, y: 520 }, bank: { x: 500, y: 510 }, bridge: { x: 716, y: 410 }, end: { x: 1090, y: 536 }, enterDelay: ENTER_STAGGER * 9, crossDelay: BRIDGE_CROSS_START_DELAY + BRIDGE_CROSS_STAGGER * 3, scale: 0.94 },
];

function PersonGlyph({ initialColor = COLORS.gray, animateColor, colorDelay = 0, colorDuration = COLOR_DURATION }) {
  const colorTransition = { duration: colorDuration, delay: colorDelay, ease: "easeOut" };
  const fillAnimate = animateColor ? { backgroundColor: animateColor } : undefined;

  return (
    <g>
      <motion.ellipse
        cx="0"
        cy="82"
        rx="31"
        ry="8"
        fill="rgba(38,53,45,0.15)"
      />
      <foreignObject x="-40" y="-82" width="80" height="164" overflow="visible">
        <motion.div
          xmlns="http://www.w3.org/1999/xhtml"
          className="h-full w-full"
          style={{
            backgroundColor: initialColor,
            WebkitMaskImage: `url(${personSilhouette})`,
            maskImage: `url(${personSilhouette})`,
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            filter: "drop-shadow(0 10px 7px rgba(26,26,26,0.12))",
          }}
          animate={fillAnimate}
          transition={colorTransition}
        />
      </foreignObject>
    </g>
  );
}

function Jumper({ person }) {
  const enterStart = person.enterDelay;
  const enterEnd = enterStart + ENTER_DURATION;
  const jumpStart = person.jumpDelay;
  const jumpPeak = jumpStart + JUMP_DURATION * 0.48;
  const jumpLand = jumpStart + JUMP_DURATION;

  return (
    <motion.g
      initial={{ x: person.entry.x, y: person.entry.y, scale: person.scale, rotate: -4, opacity: 0 }}
      animate={{
        x: [person.entry.x, person.entry.x, person.bank.x, person.bank.x, person.bank.x + 126, person.bank.x + 292, person.end.x, person.end.x],
        y: [person.entry.y, person.entry.y, person.bank.y, person.bank.y, person.bank.y - 92, person.bank.y - 126, person.end.y, person.end.y],
        rotate: [-4, -4, 0, 0, 12, -10, 0, 0],
        scale: [person.scale, person.scale, person.scale, person.scale, person.scale * 1.06, person.scale * 0.96, person.scale, person.scale],
        opacity: [0, 0, 1, 1, 1, 1, 1, 1],
      }}
      transition={{
        duration: SCENE_DURATION,
        times: [0, enterStart, enterEnd, jumpStart, jumpPeak, jumpStart + JUMP_DURATION * 0.74, jumpLand, SCENE_DURATION].map((time) => time / SCENE_DURATION),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.g
        animate={{ rotate: [0, -4, 4, 0] }}
        transition={{ duration: 0.48, repeat: 3, repeatDelay: 0.05, ease: "easeInOut" }}
      >
      <PersonGlyph
        initialColor={COLORS.gray}
        animateColor={[COLORS.gray, COLORS.green]}
        colorDelay={jumpStart + 0.48}
      />
      </motion.g>
    </motion.g>
  );
}

function Leaver({ person }) {
  const enterStart = person.enterDelay;
  const enterEnd = enterStart + ENTER_DURATION;
  const leaveStart = person.leaveDelay;
  const leaveMid = leaveStart + LEAVER_EXIT_DURATION * 0.58;
  const leaveEnd = leaveStart + LEAVER_EXIT_DURATION;

  return (
    <motion.g
      initial={{ x: person.entry.x, y: person.entry.y, rotate: -4, opacity: 0, scale: person.scale }}
      animate={{
        x: [person.entry.x, person.entry.x, person.bank.x, person.bank.x, person.bank.x - 88, person.exit.x, person.exit.x],
        y: [person.entry.y, person.entry.y, person.bank.y, person.bank.y, person.bank.y + 4, person.exit.y, person.exit.y],
        rotate: [-4, -4, 0, 0, person.rotate * 0.55, person.rotate, person.rotate],
        opacity: [0, 0, 1, 1, 0.62, 0, 0],
        scale: [person.scale, person.scale, person.scale, person.scale, person.scale * 0.84, person.scale * 0.68, person.scale * 0.68],
      }}
      transition={{
        duration: SCENE_DURATION,
        times: [0, enterStart, enterEnd, leaveStart, leaveMid, leaveEnd, SCENE_DURATION].map((time) => time / SCENE_DURATION),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.g
        animate={{ rotate: [0, -7, 7, 0] }}
        transition={{ duration: 0.52, repeat: 3, repeatDelay: 0.03, ease: "easeInOut" }}
      >
        <PersonGlyph initialColor={COLORS.gray} />
      </motion.g>
    </motion.g>
  );
}

function BridgeCrosser({ person }) {
  const enterStart = person.enterDelay;
  const enterEnd = enterStart + ENTER_DURATION;
  const crossStart = person.crossDelay;
  const crossMid = crossStart + BRIDGE_CROSS_DURATION * 0.54;
  const crossEnd = crossStart + BRIDGE_CROSS_DURATION;

  return (
    <motion.g
      initial={{ x: person.entry.x, y: person.entry.y, rotate: -4, scale: person.scale, opacity: 0 }}
      animate={{
        x: [person.entry.x, person.entry.x, person.bank.x, person.bank.x, person.bridge.x, person.end.x, person.end.x],
        y: [person.entry.y, person.entry.y, person.bank.y, person.bank.y, person.bridge.y, person.end.y, person.end.y],
        rotate: [-4, -4, 0, 0, -2, 0, 0],
        scale: [person.scale, person.scale, person.scale, person.scale, person.scale * 1.03, person.scale, person.scale],
        opacity: [0, 0, 1, 1, 1, 1, 1],
      }}
      transition={{
        duration: SCENE_DURATION,
        times: [0, enterStart, enterEnd, crossStart, crossMid, crossEnd, SCENE_DURATION].map((time) => time / SCENE_DURATION),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.g
        animate={{ rotate: [0, -4, 4, 0] }}
        transition={{ duration: 0.5, repeat: 3, repeatDelay: 0.04, ease: "easeInOut" }}
      >
      <PersonGlyph
        initialColor={COLORS.gray}
        animateColor={[COLORS.gray, COLORS.green]}
        colorDelay={crossStart + BRIDGE_CROSS_DURATION * 0.68}
      />
      </motion.g>
      <motion.circle
        cx="0"
        cy="-6"
        r="44"
        fill="none"
        stroke={COLORS.greenLight}
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 0.42, 0], scale: [0.5, 1.18, 1.45] }}
        transition={{ duration: 0.72, delay: crossStart + BRIDGE_CROSS_DURATION * 0.74, ease: "easeOut" }}
      />
      {[0, 1, 2, 3, 4].map((spark) => (
        <motion.path
          key={spark}
          d="M0 -5 L0 5 M-5 0 L5 0"
          stroke="#EAFE9A"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{
            opacity: 0,
            x: Math.cos(spark * 1.26) * 16,
            y: -20 + Math.sin(spark * 1.26) * 14,
            scale: 0.2,
            rotate: spark * 36,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: Math.cos(spark * 1.26) * 50,
            y: -20 + Math.sin(spark * 1.26) * 42,
            scale: [0.2, 1, 0.35],
            rotate: spark * 36 + 90,
          }}
          transition={{ duration: 0.72, delay: crossStart + BRIDGE_CROSS_DURATION * 0.76 + spark * 0.04, ease: "easeOut" }}
        />
      ))}
    </motion.g>
  );
}

function River() {
  const wave = {
    animate: { x: [-90, 90] },
    transition: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  };

  return (
    <g>
      <path
        d="M486 -24 C574 70 584 154 548 246 C514 334 526 414 592 498 C652 574 666 650 626 744 L842 744 C886 648 872 560 812 476 C750 390 742 326 782 230 C826 124 812 44 734 -24 Z"
        fill="url(#riverGradient)"
      />
      <path
        d="M470 -20 C548 82 556 150 522 240 C490 330 502 420 568 506 C622 576 632 646 594 740"
        fill="none"
        stroke="rgba(255,255,255,0.50)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M856 -20 C918 76 910 154 876 244 C844 330 848 408 906 492 C962 574 974 650 936 740"
        fill="none"
        stroke="rgba(30,126,151,0.18)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      {[150, 250, 350, 450, 550].map((y, index) => (
        <motion.path
          key={y}
          d={`M552 ${y} C600 ${y - 20} 646 ${y + 20} 694 ${y} C742 ${y - 18} 786 ${y + 16} 830 ${y - 2}`}
          fill="none"
          stroke={index % 2 === 0 ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.32)"}
          strokeWidth="4"
          strokeLinecap="round"
          {...wave}
        />
      ))}
    </g>
  );
}

function Bridge() {
  const bridgeDelay = BRIDGE_DELAY;

  return (
    <>
      <motion.g
        initial={{ x: 0, y: -300, opacity: 0 }}
        animate={{ x: 0, y: [-300, -300, 0, 0, -250], opacity: [0, 1, 1, 1, 0] }}
        transition={{ duration: 2.15, delay: bridgeDelay, times: [0, 0.18, 0.5, 0.72, 1], ease: [0.16, 1, 0.3, 1] }}
      >
        <g transform="translate(615 88)">
          <rect x="-39" y="-150" width="78" height="74" rx="18" fill={COLORS.sleeve} />
          <rect x="-33" y="-92" width="66" height="122" rx="28" fill={COLORS.hand} />
          <path d="M-26 -82 C-7 -70 10 -70 30 -84" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="8" strokeLinecap="round" />
          <path d="M-34 -8 C-62 -10 -66 32 -38 42 L-14 50 L30 38 C54 32 50 -6 24 -2 Z" fill={COLORS.hand} />
          <path d="M-52 28 C-72 40 -62 68 -38 62" fill="none" stroke={COLORS.handShade} strokeWidth="11" strokeLinecap="round" />
          <path d="M-16 42 C-14 68 18 68 20 42" fill="none" stroke={COLORS.handShade} strokeWidth="10" strokeLinecap="round" />
          <path d="M20 35 C30 58 58 48 47 24" fill="none" stroke={COLORS.handShade} strokeWidth="10" strokeLinecap="round" />
        </g>
      </motion.g>

      <motion.g
        initial={{ y: -300, opacity: 0, rotate: -2 }}
        animate={{ y: [-300, -300, 0, 0], opacity: [0, 1, 1, 1], rotate: [-2, -2, 0.5, 0] }}
        transition={{ duration: 1.35, delay: bridgeDelay + 0.1, times: [0, 0.22, 0.82, 1], ease: [0.16, 1, 0.3, 1] }}
      >
        <g transform="translate(424 338)">
          <motion.ellipse
            cx="214"
            cy="86"
            rx="260"
            ry="22"
            fill="rgba(32,42,40,0.12)"
            initial={{ opacity: 0, scaleX: 0.52 }}
            animate={{ opacity: [0, 0.8, 0.42], scaleX: [0.52, 1.08, 1] }}
            transition={{ duration: 0.52, delay: bridgeDelay + 1.0 }}
          />
          <path d="M4 34 C126 4 302 4 424 34 L396 86 C290 58 138 58 30 86 Z" fill="url(#bridgeGradient)" />
          <path d="M30 86 C138 58 290 58 396 86 L382 108 C282 82 148 82 44 108 Z" fill={COLORS.woodDark} opacity="0.72" />
          {[48, 104, 160, 216, 272, 328, 376].map((x) => (
            <path
              key={x}
              d={`M${x} 28 L${x + 14} 98`}
              stroke="rgba(76,45,24,0.54)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          ))}
          <path d="M12 28 C136 -8 294 -8 416 28" fill="none" stroke={COLORS.woodLight} strokeWidth="8" strokeLinecap="round" />
          <path d="M32 84 C142 52 284 52 394 84" fill="none" stroke={COLORS.woodLight} strokeWidth="7" strokeLinecap="round" opacity="0.92" />
        </g>
      </motion.g>
    </>
  );
}

function SceneDecor() {
  return (
    <>
      <motion.path
        d="M140 612 C280 570 420 590 556 612"
        fill="none"
        stroke="rgba(120,190,67,0.14)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.path
        d="M770 118 C900 86 1036 100 1140 154"
        fill="none"
        stroke="rgba(90,212,244,0.14)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, delay: 0.35 }}
      />
      {[{ x: 212, y: 148 }, { x: 1078, y: 194 }, { x: 998, y: 560 }, { x: 174, y: 514 }].map((dot, index) => (
        <motion.circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r={index % 2 === 0 ? 8 : 6}
          fill={index % 2 === 0 ? COLORS.green : COLORS.river}
          opacity="0.34"
          animate={{ y: [0, -8, 0], opacity: [0.22, 0.42, 0.22] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {[{ x: 96, y: 612 }, { x: 238, y: 618 }, { x: 1070, y: 610 }, { x: 1136, y: 646 }].map((flower, index) => (
        <g key={`${flower.x}-${flower.y}`} transform={`translate(${flower.x} ${flower.y})`}>
          {[0, 1, 2, 3, 4].map((petal) => (
            <ellipse
              key={petal}
              cx={Math.cos(petal * 1.26) * 7}
              cy={Math.sin(petal * 1.26) * 7}
              rx="4"
              ry="7"
              fill={index % 2 === 0 ? "#AEE75C" : "#7AD9F1"}
              transform={`rotate(${petal * 72})`}
              opacity="0.78"
            />
          ))}
          <circle r="4" fill="#F9D66A" />
        </g>
      ))}
    </>
  );
}

function StorybookTrees() {
  const trees = [
    { x: 76, y: 500, s: 1.04 },
    { x: 1118, y: 138, s: 0.92 },
    { x: 1160, y: 514, s: 0.82 },
    { x: 130, y: 128, s: 0.72 },
  ];

  return (
    <>
      {trees.map((tree) => (
        <g key={`${tree.x}-${tree.y}`} transform={`translate(${tree.x} ${tree.y}) scale(${tree.s})`}>
          <rect x="-7" y="12" width="14" height="42" rx="6" fill="#B98A54" />
          <circle cx="-18" cy="5" r="25" fill="#BFE983" />
          <circle cx="12" cy="-4" r="30" fill="#9EDB5F" />
          <circle cx="28" cy="14" r="22" fill="#77C64A" />
          <circle cx="4" cy="24" r="29" fill="#8ED357" />
          <path d="M-26 24 C-4 36 26 34 44 22" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}
    </>
  );
}

function ClosingNarration() {
  const fullText = useMemo(() => NARRATION_LINES.join("\n"), []);
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    let intervalId;

    const timeoutId = window.setTimeout(() => {
      setVisibleChars(0);

      intervalId = window.setInterval(() => {
        setVisibleChars((current) => {
          if (current >= fullText.length) {
            window.clearInterval(intervalId);
            return current;
          }

          return current + 1;
        });
      }, TYPEWRITER_INTERVAL_MS);
    }, NARRATION_DELAY * 1000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [fullText]);

  const visibleLines = fullText.slice(0, visibleChars).split("\n");
  const isTyping = visibleChars < fullText.length;

  return (
    <g>
      <motion.foreignObject
        x="0"
        y="0"
        width="650"
        height="894"
        overflow="visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: NARRATION_DELAY - 0.8,
          ease: "easeOut",
        }}
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "30px",
            background: "rgba(255, 255, 255, 1)",
            backdropFilter: "blur(7px)",
            WebkitBackdropFilter: "blur(7px)",
            boxShadow:
              "0 28px 70px rgba(38,53,45,0.12), inset 0 0 0 1px rgba(255,255,255,0.62)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 65%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, black 0%, black 65%, transparent 100%)",
          }}
        />
      </motion.foreignObject>

      <motion.foreignObject
        x="88"
        y="174"
        width="362"
        height="150"
        overflow="visible"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.86,
          delay: NARRATION_DELAY,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            color: "#26362F",
            fontFamily:
              "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: "65px",
            fontWeight: 900,
            letterSpacing: "0",
            lineHeight: 1.08,
            textAlign: "left",
            textWrap: "balance",
          }}
        >
          {NARRATION_LINES.map((line, index) => {
            const renderedLine = visibleLines[index] ?? "";
            const isCursorLine =
              index ===
              Math.min(visibleLines.length - 1, NARRATION_LINES.length - 1);

            return (
              <div key={`${line}-${index}`} style={{ minHeight: "40px" }}>
  {line === "intención" ? (
    <span style={{ color: COLORS.green }}>{renderedLine}</span>
  ) : line === "y la acción" ? (
    <>
      {renderedLine.includes("acción") ? (
        <>
          y la <span style={{ color: COLORS.river }}>acción</span>
        </>
      ) : (
        renderedLine
      )}
    </>
  ) : (
    renderedLine
  )}
  {isTyping && isCursorLine ? (
                  <motion.span
                    aria-hidden="true"
                    style={{
                      display: "inline-block",
                      width: "3px",
                      height: "0.82em",
                      marginLeft: "5px",
                      transform: "translateY(5px)",
                      backgroundColor: COLORS.green,
                    }}
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{
                      duration: 0.72,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </motion.foreignObject>
    </g>
  );
}

function Slide05Component() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[#F9FCF6]">
      <svg className="h-full w-full" viewBox="0 0 1280 720" role="img" aria-label="Diez personajes llegan a un rio; algunos saltan y otros cruzan por un puente">
        <defs>
          <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="720" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF9DF" />
            <stop offset="46%" stopColor="#F9FCF6" />
            <stop offset="100%" stopColor="#EAF6DC" />
          </linearGradient>
          <linearGradient id="riverGradient" x1="545" y1="0" x2="805" y2="720" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9AE9FF" />
            <stop offset="44%" stopColor={COLORS.river} />
            <stop offset="100%" stopColor={COLORS.riverDeep} />
          </linearGradient>
          <linearGradient id="bridgeGradient" x1="10" y1="20" x2="260" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E0A05C" />
            <stop offset="48%" stopColor={COLORS.wood} />
            <stop offset="100%" stopColor="#9A5D2F" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DDF7A8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#DDF7A8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1280" height="720" fill="url(#skyGradient)" />
        <circle cx="110" cy="90" r="190" fill="url(#sunGlow)" />
        <path d="M0 582 C180 524 280 596 446 552 C548 526 628 516 720 552 C854 604 1014 560 1280 618 V720 H0 Z" fill={COLORS.meadow} opacity="0.74" />
        <path d="M0 634 C174 588 338 640 492 600 C596 574 654 590 746 618 C878 660 1068 628 1280 666 V720 H0 Z" fill={COLORS.bankDeep} opacity="0.66" />
        <path d="M0 88 C142 34 252 118 410 78 C520 50 616 50 728 80 C902 128 1034 64 1280 92 V0 H0 Z" fill={COLORS.bank} opacity="0.78" />
        <StorybookTrees />
        <SceneDecor />
        <River />

        <g>
          {leavers.map((person) => (
            <Leaver key={person.id} person={person} />
          ))}
          {jumpers.map((person) => (
            <Jumper key={person.id} person={person} />
          ))}
        </g>

        <Bridge />

        <g>
          {bridgeCrossers.map((person) => (
            <BridgeCrosser key={person.id} person={person} />
          ))}
        </g>

        <ClosingNarration />
      </svg>
    </div>
  );
}

export default createSlide({
  id: "slide05",
  frame: "fullBleed",
  Component: Slide05Component,
});
