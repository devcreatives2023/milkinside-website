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

const Navbar = ({ bg, logobg, textl, text, links ,navbarsmall,icon}) => {
  const [show, setshow] = React.useState(false);
  const [active, setActive] = React.useState("home");

  return (
    <div
      className="fixed left-0 xl:w-[100%] xl:p-main
    lg:w-[100%] lg:p-main
      top-0 flex xl:justify-between lg:justify-between  z-40 "
      style={{ background: bg, color: text }}
    >
      <div className="w-[220px] xl:w-[450px]  lg:w-[240px] md:w-[300px] ">
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
        <ul className="flex justify-start items-start mr-10 text-xl text-[gray] gap-[210px]">
          <li
            onClick={() => setActive("work")}
            className={
              active === "work"
                ? "text-[gold] my-0 lg:my-2 xl:my-6 pl-7"
                : "text-gray-400 my-0 lg:my-2 xl:my-6 pl-7"
            }
          >
            <Link to="/work">Work</Link>
          </li>
          <li
            onClick={() => setActive("about")}
            className={
              active === "about"
                ? "text-[gold] my-0 lg:my-2 xl:my-6"
                : "my-0 lg:my-2 xl:my-6 text-gray-400"
            }
          >
            <Link to="/">About</Link>
          </li>
          <li
            onClick={() => setActive("contact")}
            className={
              active === "contact"
                ? "text-[gold] my-0 lg:my-2 xl:my-6"
                : " my-0 lg:my-2 xl:my-6 text-gray-400"
            }
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div
        className="visible  xl:invisible
      lg:hidden md:inline-block"
        style={{ transition: "all 0.5s ease-in" }}
      >
        <icons.HiOutlineMenuAlt4
          onClick={() => setshow(!show)}
          className="  absolute left-[290px] md:left-[600px]
           text-[3rem]  mt-5"
           style={{color:icon}}
        />
        <motion.nav
          initial={false}
          variants={menuVariants}
          animate={show ? "opened" : "closed"}
          className=" bg-main h-[70vh] w-[100%] fixed top-0 p-10 flex flex-col   "
          style={{color:navbarsmall}}
        >
          <motion.button
            className="reltive left-0 top-0 text-[gold]"
            onClick={() => setshow(!show)}
          >
            <icons.GiCrossMark />
          </motion.button>
          <ul className="flex flex-col items-start  leading-[70px]  text-2xl" >
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
