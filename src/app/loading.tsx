"use client";
import React from "react";
import { motion } from "framer-motion";
const Loader = () => {
  const circles = [...Array(6)];
  return (
    <motion.div
      className="relative w-16 h-16"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
    >
      {circles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-blue-500 rounded-full"
          style={{ transform: `rotate(${i * 60}deg) translateX(2.5rem)` }}
          animate={{ scale: [1, 0.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.1 }}
        ></motion.div>
      ))}
    </motion.div>
  );
};



export default Loader;
