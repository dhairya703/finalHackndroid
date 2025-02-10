import { motion } from "framer-motion";
import { useState } from "react";

const HoverTextAnimation = ({ default: defaultText, hover }: { default: string; hover: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
      <motion.div
        className={`flex size-32 cursor-pointer text-center items-center justify-center rounded-2xl border-4 border-primary font-secondary ${hovered? "text-xl" : "text-xl"} font-bold transition-all duration-100 ease-in hover:border-secondary md:size-40 `}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {hovered ? hover : defaultText}
        </motion.span>
      </motion.div>
  );
};

export default HoverTextAnimation;
