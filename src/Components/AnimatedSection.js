import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({
  children,
  delay = 0.1,
  duration = 0.8,
  direction = "up",
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
