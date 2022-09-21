import React from "react";
import { motion } from "framer-motion";
const Type = () => {
  return (
    <motion.div 
    initial={{opacity:0 ,y:15}}
    whileInView={{opacity:1,y:0}}
    transition={{ease:"easeIn",type:"spring",repeat:"Infinite",delay:1}}
    className="flex flex-col ">
      <p className=" flex justify-center items-center">
        designing <div className="w-[50px] xl:w-[50px] 
        lg:w-[50px] ml-2 h-[1px] bg-primary" />
      </p >
      <p className="flex"><span> tommorrow </span> <span className="ml-2"> today</span> </p>
    </motion.div>
    
  );
};

export default Type;
