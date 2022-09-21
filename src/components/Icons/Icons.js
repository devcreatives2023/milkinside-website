import React from "react";
import { icons } from "../../constants";
import { motion } from "framer-motion";
const Icons = () => {
  return (
    <motion.div 
    className="invisible xl:visible lg:visible ml-2">
      <p className=" text-[#808080bd] mt-[15px]  text-sm uppercase">
        recent parteners
      </p>
      <ul className="flex justify-between w-[90%] 
      text-xl items-center  text-main mt-5">
        <li><icons.BsTwitter /> </li>
        <li><icons.GiEchoRipples /> </li>
        <li> <icons.IoLogoVk /></li>
        <li><icons.IoLogoXing /> </li>
        <li><icons.BsGoogle /> </li>
        <li className="text-[47px]"> <icons.SiAirbus/></li>
        <li className="text-[47px]"> <icons.SiRoku/></li>
      </ul>
    </motion.div>
  );
};

export default Icons;
