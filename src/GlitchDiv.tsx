import { animate, motion } from "framer-motion";
import { useState } from "react";
import menuGlitchImage from "./assets/menuglitch.png";
import menuGlitchGif from "./assets/menuglitch.gif";
import "./GlitchDiv.css";

export const GlitchDiv = () => {
  const [animateState, setAnimateState] = useState("initial");

  const childVariant = {
    initial: {
      opacity: 0,
      transition: { duration: 0.1 },
    },
    hover: ({ x, y, delayMul, blink }: any) => ({
      translateX: `${5 * x}rem`,
      translateY: `${5 * y}rem`,
      opacity: 1,
      transition: {
        opacity: {
          repeat: Infinity,
          duration: delayMul * 0.0025,
          delay: 0.6,
        },
        default: {
          delay: delayMul * 0.025 + 0.6,
          type: "linear",
          duration: 0.1,
        },
      },
    }),
    exit: {
      opacity: 0,
    },
  };

  const parentVariant = {
    initial: {
      backgroundImage: `url(${menuGlitchImage})`,
    },
    hover: {
      backgroundImage: `url(${menuGlitchGif})`,
    },
  };

  const positions = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 2, y: 2 },
    { x: 2, y: 1 },
    { x: 1, y: 2 },
    { x: 0, y: 2 },
    { x: 3, y: 1 },
    { x: 0, y: 3 },
    { x: 2, y: 3 },
    { x: 3, y: 2 },
    { x: 3, y: 3, blink: true },
    { x: 1, y: 3 },
    { x: 3, y: 0 },
    { x: 4, y: 0, blink: true },
    { x: 4, y: 2, blink: true },
    { x: 1, y: 4, blink: true },
    { x: 4, y: 4, blink: true },
    { x: 3, y: 4 },
    { x: 4, y: 1 },
  ];

  return (
    <motion.div
      className="glitchdiv-root"
      animate={animateState}
      onClick={() => {
        setAnimateState(animateState == "initial" ? "hover" : "initial");
        console.log(animateState);
      }}
      variants={parentVariant}
    >
      {positions.map(({ x, y, blink }, i) => (
        <motion.div
          className="glitchdiv-child"
          variants={childVariant}
          key={i}
          custom={{ x: x, y: y, delayMul: i, blink: blink }}
        />
      ))}
    </motion.div>
  );
};
