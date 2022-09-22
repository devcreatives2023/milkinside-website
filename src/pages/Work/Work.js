import React from "react";
import { Navbar, Slider } from "../../components";
import { motion } from "framer-motion";
const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
        },
      }}
    >
      <Navbar
        logobg="white"
        textl="black"
        bg="black"
        text="white"
        links="black"
      />
      <motion.div className="bg-main text-main">
        <Slider />
      </motion.div>
    </motion.div>
  );
};

export default Work;
