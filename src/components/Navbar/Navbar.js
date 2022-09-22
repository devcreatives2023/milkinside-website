import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../constants";
import { motion } from "framer-motion";
const menuVariants = {
  opened: {
    top: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5
    }
  },
  closed: {
    top: "-80vh"
  }
};

const Navbar = ({ bg, logobg, textl, text, links }) => {
  const [toggleNav, setToggleNav] = React.useState(false);
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


      {/* navbar for small screen  */}
      <div
        className="visible  xl:invisible
      fixed top-0 left-0  right-10 
      lg:hidden md:inline-block"
        style={{ transition: "all 0.5s ease-in" }}
      >
        <icons.HiOutlineMenuAlt4
          onClick={() => setToggleNav(!toggleNav)}
          className="absolute right-[20px] md:right-[69px] text-main 
           text-[3rem] flex mt-5"
        />
        {toggleNav ? (
          <motion.ul
          initial={false}
          variants={menuVariants}
          animate={toggleNav ? "opened" : "closed"}

            className="bg-black h-[90vh] w-[100vh] fixed top-0 flex right-[1px]  flex-col justify-center items-center"
            // style={{
            //   transition: "all 0.5s ease-in-out",
            //   transformOrigin: "right top",
            // }}
          >
            <li className="mt-[-200px]">
              <button
                onClick={() => setToggleNav()}
                className="absolute right-[55px] top-5  text-[gold]"
              >
                <icons.GiCrossMark />
              </button>
            </li>
            <li
              onClick={() => setActive("work")}
              className={
                active === "work"
                  ? "border-b-2 pb-2 border-[gold] hover:text-[gold]  transition-[0.6s] text-[silver]"
                  : "text-[silver]"
              }
            >
              <Link to="/work">Work</Link>
            </li>
            <li
              onClick={() => setActive("about")}
              className={
                active === "about"
                  ? "border-b-2 border-[gold] hover:text-[#5f551c]  transition-[0.6s]  pb-2 text-[silver]"
                  : "text-[silver]"
              }
            >
              <Link to="/">About</Link>
            </li>
            <li
              onClick={() => setActive("contact")}
              className={
                active === "contact"
                  ? "border-b-2 border-[gold]  transition-[0.6s] hover:text-[#5f551c]  pb-2 text-[silver]"
                  : "text-[silver]"
              }
            >
              <Link to="/contact">Contact</Link>
            </li>
          </motion.ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
