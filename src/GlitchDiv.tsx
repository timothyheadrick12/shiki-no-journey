import {motion} from 'framer-motion';
import './GlitchDiv.css';

export const GlitchDiv = () => {
  const variantOne = {
    hover: ({x, y, delayMul, blink}: any) => ({
      translateX: `${5 * x}rem`,
      translateY: `${5 * y}rem`,
      opacity: 9 / delayMul,
      transition: {
        opacity: {
          repeat: Infinity,
          duration: Math.random() * 0.05 + 0.05,
        },
        default: {delay: delayMul * 0.01, type: 'linear', duration: 0.1},
      },
    }),
  };

  const positions = [
    {x: 1, y: 1},
    {x: 0, y: 1},
    {x: 1, y: 0},
    {x: 2, y: 0},
    {x: 2, y: 2},
    {x: 2, y: 1},
    {x: 1, y: 2},
    {x: 0, y: 2},
    {x: 3, y: 1},
    {x: 0, y: 3},
    {x: 2, y: 3},
    {x: 3, y: 2},
    {x: 3, y: 3, blink: true},
    {x: 1, y: 3},
    {x: 3, y: 0},
    {x: 4, y: 0, blink: true},
    {x: 4, y: 2, blink: true},
    {x: 1, y: 4, blink: true},
    {x: 4, y: 4, blink: true},
    {x: 3, y: 4},
    {x: 4, y: 1},
  ];

  return (
    <motion.div className="glitchdiv-root" whileHover="hover">
      {positions.map(({x, y, blink}, i) => (
        <motion.div
          className="glitchdiv-child"
          variants={variantOne}
          key={i}
          custom={{x: x, y: y, delayMul: i, blink: blink}}
        />
      ))}
    </motion.div>
  );
};
