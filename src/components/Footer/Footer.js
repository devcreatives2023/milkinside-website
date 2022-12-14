import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className=" xl:p-main lg:p-lg
    ">
      <div
        className="flex xl:flex-row 
      md:flex-row
      md:p-[4rem]
      lg:flex-row  flex-wrap 
       xl:justify-between
       md:justify-between
       lg:justify-between justify-center
      gap-9"
      >
        <motion.div className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              delay: 0.5,
              ease: "linear",
              duration: "0.6s",
            }}
            className="text-sm pb-1"
          >
            Development
          </motion.p>
          <div className="xl:w-[190px] lg:w-[190px] w-[100px] md:w-[150px] bg-primary h-[1px] " />
          <p className="text-sm pt-2 border-b-[1px] border-blue-600 w-[50px]">
            KSA,MC
          </p>
        </motion.div>
        <motion.div className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              delay: 1,
              ease: "linear",
              duration: "0.6s",
            }}
            className="text-sm pb-1"
          >
            Development
          </motion.p>
          <div className="xl:w-[190px] lg:w-[190px] w-[100px] md:w-[150px] bg-primary h-[1px] " />
          <p className="text-sm pt-2 border-b-[1px] border-blue-600 w-[50px]">
            KSA,MC
          </p>
        </motion.div>
        <motion.div className="flex flex-col ">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              delay: 1.5,
              ease: "linear",
              duration: "0.6s",
            }}
            className="text-sm pb-1"
          >
            Development
          </motion.p>
          <div className="xl:w-[190px] lg:w-[190px] w-[100px] md:w-[150px] bg-primary h-[1px] " />
          <p className="text-sm pt-2 border-b-[1px] border-blue-600 w-[50px]">
            KSA,MC
          </p>
        </motion.div>
        <motion.div className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              delay: 2,
              ease: "linear",
              duration: "0.6s",
            }}
            className="text-sm pb-1"
          >
            Development
          </motion.p>
          <div className="xl:w-[190px] lg:w-[190px] w-[100px] md:w-[150px] bg-primary h-[1px] " />
          <p className="text-sm pt-2 border-b-[1px] border-blue-600 w-[50px]">
            KSA,MC
          </p>
        </motion.div>
      </div>
      <p
        className="xl:text-center lg:text-center
      md:text-center pb-7 p-5 mt-0
   text-center text-gray-500 xl:mt-16 
       md:mt-10 text-sm"
      >
        copyright reserved@Abrar muthana
      </p>
    </div>
  );
};

export default Footer;
