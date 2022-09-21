import React from "react";
import { Navbar, Slider } from "../../components";
import { motion } from "framer-motion";
const Work = () => {
  return (
    <motion.div className="bg-main text-main">
      <Navbar logobg="white" textl="black"   bg="black" text="white" links="black"/>
        <Slider />
    </motion.div>
  );
};

export default Work;
