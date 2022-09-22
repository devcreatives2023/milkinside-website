import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../constants";
import { motion } from "framer-motion";
const menuVariants = {
  opened: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: 100,
  },
};

const Navbar = ({ bg, logobg, textl, text, links, navbarsmall, icon }) => {
  const [show, setshow] = React.useState(false);

  return (
    <div
      className="fixed left-0 xl:w-[100%] xl:p-main
    lg:w-[100%] lg:p-main md:px-[2rem]
      top-0 flex xl:justify-between lg:justify-between  z-40 "
      style={{ background: bg, color: text }}
    >
      <div className="w-[390px] xl:w-[450px]  lg:w-[210px] md:w-[440px] ">
        <p
          className="xl:w-[50%]  text-center
        text-sm  p-[35px]
        xl:py-10 uppercase font-bold font-sans flex justify-center 
        items-center"
          style={{ background: logobg, color: textl }}
        >
          Lorem.
        </p>
      </div>
      <div
        className="py-3 hidden xl:inline-block lg:inline-block md:hidden mr-4"
        style={{ background: links }}
      >
        <ul className="flex justify-start items-start mr-10 text-xl text-[gray] lg:gap-[150px] xl:gap-[210px]">
          <li className="text-gray-400  hover:text-[gold] my-0 lg:my-2 xl:my-6 pl-7">
            <Link to="/work">Work</Link>
          </li>
          <li className="text-gray-400  hover:text-[gold] my-0 lg:my-2 xl:my-6 pl-7">
            <Link to="/">About</Link>
          </li>
          <li className="text-gray-400  hover:text-[gold] my-0 lg:my-2 xl:my-6 pl-7">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div
        className="visible  xl:invisible
      lg:hidden md:inline-block w-[100%] h-[100%]"
        style={{ transition: "all 0.5s ease-in" }}
      >
        <icons.HiOutlineMenuAlt4
          onClick={() => setshow(!show)}
          className="absolute -right-[0px] 
           text-[3rem] mt-5"
          style={{ color: icon }}
        />
        <motion.nav
          initial={false}
          variants={menuVariants}
          animate={show ? "opened" : "closed"}
          className=" bg-main h-screen w-[400px] fixed top-0 p-10 flex flex-col   "
          style={{ color: navbarsmall }}
        >
          <motion.button
            className="reltive left-0 top-0 text-[gold]"
            onClick={() => setshow(!show)}
          >
            <icons.GiCrossMark />
          </motion.button>
          <ul className="flex flex-col items-start  leading-[70px]  text-2xl">
            <li className=" hover:text-[gold] hover:opacity-[0.8]">
              <Link to="/work">work</Link>
            </li>
            <li className=" hover:text-[gold] hover:opacity-[0.8]">
              <Link to="/">about</Link>
            </li>
            <li className=" hover:text-[gold] hover:opacity-[0.8]">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;
