import { animate, delay, motion, Variant } from "framer-motion";
import { useState } from "react";
import menuGlitchImage from "./assets/menuglitch.png";
import menuGlitchGif from "./assets/glitchmenu.gif";
import { useIsMd } from "./hooks/utils";

export const GlitchDiv = () => {
  const [animateState, setAnimateState] = useState("initial");
  const isMedium = useIsMd();
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
    { x: 3, y: 3 },
    { x: 1, y: 3 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 4, y: 2 },
    { x: 1, y: 4 },
    { x: 4, y: 4 },
    { x: 3, y: 4 },
    { x: 4, y: 1 },
    { x: 0, y: 4 },
    { x: 2, y: 4 },
    { x: 4, y: 3 },
    { x: 0, y: 5 },
    { x: 3, y: 5 },
    { x: 1, y: 6 },
    { x: 4, y: 5 },
    { x: 2, y: 6 },
    { x: 0, y: 6 },
    { x: 4, y: 6 },
    { x: 2, y: 5 },
    { x: 3, y: 6 },
    { x: 1, y: 5 },
    { x: 4, y: 8 },
    { x: 2, y: 7 },
    { x: 3, y: 8 },
    { x: 0, y: 7 },
    { x: 3, y: 7 },
    { x: 1, y: 8 },
    { x: 4, y: 7 },
    { x: 2, y: 8 },
    { x: 1, y: 7 },
    { x: 0, y: 8 },

    { x: 0, y: 9 },
    { x: 3, y: 9 },
    { x: 1, y: 10 },
    { x: 4, y: 9 },
    { x: 2, y: 10 },
    { x: 0, y: 10 },
    { x: 4, y: 10 },
    { x: 2, y: 9 },
    { x: 3, y: 10 },
    { x: 1, y: 9 },

    { x: 4, y: 12 },
    { x: 2, y: 11 },
    { x: 3, y: 12 },
    { x: 0, y: 11 },
    { x: 3, y: 11 },
    { x: 1, y: 12 },
    { x: 4, y: 11 },
    { x: 2, y: 12 },
    { x: 1, y: 11 },
    { x: 0, y: 12 },

    { x: 0, y: 14 },
    { x: 3, y: 14 },
    { x: 1, y: 13 },
    { x: 4, y: 14 },
    { x: 2, y: 13 },
    { x: 0, y: 13 },
    { x: 4, y: 13 },
    { x: 2, y: 14 },
    { x: 3, y: 13 },
    { x: 1, y: 14 },

    { x: 0, y: 15 },
    { x: 3, y: 15 },
    { x: 1, y: 16 },
    { x: 4, y: 15 },
    { x: 2, y: 16 },
    { x: 0, y: 16 },
    { x: 4, y: 16 },
    { x: 2, y: 15 },
    { x: 3, y: 16 },
    { x: 1, y: 15 },
  ];

  const childVariant = isMedium
    ? {
        initial: {
          opacity: 0,
          transition: { duration: 0.1 },
        },
        hover: ({ x, y, delayMul, blink }: any) => ({
          translateX: `${3.5 * x}rem`,
          translateY: `${3.5 * y}rem`,
          opacity: 1,
          transition: {
            opacity: {
              repeat: Infinity,
              duration: x * 0.012 * Math.random(),
              delay: 0.6,
            },
            default: {
              delay: delayMul * 0.01 + 0.6,
              type: "linear",
              duration: 0.1,
            },
          },
        }),
      }
    : {
        initial: {
          opacity: 0,
          transition: { duration: 0.1 },
        },
        hover: ({ x, y, delayMul, blink }: any) => ({
          translateX: `${20 * x}vw`,
          translateY: `${20 * y}vw`,
          opacity: 1,
          transition: {
            opacity: {
              repeat: Infinity,
              duration: x * 0.005 * Math.random(),
              delay: 0.6,
            },
            default: {
              delay: delayMul * 0.01 + 0.6,
              type: "linear",
              duration: 0.1,
            },
          },
        }),
      };

  const parentVariant = isMedium
    ? {
        initial: {
          width: "2rem",
          height: "2rem",
          transition: { type: "linear" },
        },
        hover: {
          width: "17.5rem",
          height: "100vh",
          transition: { duration: 0 },
        },
      }
    : {
        initial: {
          width: "2rem",
          height: "2rem",
          transition: { type: "linear" },
        },
        hover: {
          width: "100vw",
          height: "100vh",
          transition: { duration: 0 },
        },
      };

  return (
    <motion.div
      className="absolute left-0 top-0 w-8 h-8 overflow-hidden"
      animate={animateState}
      variants={parentVariant}
    >
      {positions.map(({ x, y }, i) => (
        <motion.div
          className="absolute w-[21vw] sm:w-14 aspect-square top-0 left-0 bg-black opacity-0"
          variants={childVariant}
          key={i}
          custom={{ x: x, y: y, delayMul: i }}
        />
      ))}
      <motion.div className="absolute left-0 top-0 w-8 h-8 cursor-pointer">
        <img
          className="absolute left-0 top-0 w-8 h-8 cursor-pointer"
          src={animateState == "initial" ? menuGlitchImage : menuGlitchGif}
        />
        <button
          className="absolute left-0 top-0 w-8 h-8 cursor-pointer"
          onClick={() => {
            setAnimateState(animateState == "initial" ? "hover" : "initial");
            console.log(animateState);
          }}
        />
      </motion.div>
    </motion.div>
  );
};
