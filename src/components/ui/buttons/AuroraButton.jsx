import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";

// Using colors from tailwind config primary and secondary palettes
const COLORS = ["#2563EB", "#1D4ED8", "#F97316", "#EA580C"];

const AuroraButton = ({ children }) => {
  const color = useMotionValue(COLORS[0]);
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.button
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      style={{
        border,
        boxShadow,
      }}
      className="w-fit rounded-full bg-white px-4 py-2 font-bold uppercase text-black transition-colors hover:bg-gray-100"
    >
      {children}
    </motion.button>
  );
};
export default AuroraButton;
