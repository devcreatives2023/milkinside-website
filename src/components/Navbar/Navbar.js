import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../constants";
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
      <div
        className="visible  xl:invisible
      fixed top-0 left-0  right-0 
      lg:hidden md:inline-block  
      w-[100%]
"
      >
        <icons.HiOutlineMenuAlt4
          onClick={() => setToggleNav(!toggleNav)}
          className="absolute right-[40px] text-main 
           text-[3rem] flex mt-5 mr-10"
        />
        {toggleNav ? (
          <ul
            className={
              toggleNav
                ? " bg-black w-[99%] h-[100%] flex text-[32px] leading-[40px]    justify-center items-center  flex-col  fixed left-0 top-0 transition-[350ms] z-50 "
                : " bg-black w-0 h-0 flex justify-center fixed flex-col top-0 transition-[350ms] z-50 "
            }
          >
            <li className="mt-[-400px]">
              <button
                onClick={() => setToggleNav()}
                className="absolute right-5 top-5 "
              >
                <icons.GiCrossMark />
              </button>
            </li>
            <li
              onClick={() => setActive("work")}
              className={
                active === "work"
                  ? "border-b-3 pb-2 border-[gold] hover:text-[#5f551c]  transition-[0.6s] text-[silver]"
                  : "text-gray-400"
              }
            >
              <Link to="/work">Work</Link>
            </li>
            <li
              onClick={() => setActive("about")}
              className={
                active === "about"
                  ? "border-b-3 border-[gold] hover:text-[#5f551c]  transition-[0.6s]  pb-2 text-[silver]"
                  : "text-gray-400"
              }
            >
              <Link to="/">About</Link>
            </li>
            <li
              onClick={() => setActive("contact")}
              className={
                active === "contact"
                  ? "border-b-3 border-[gold]  transition-[0.6s] hover:text-[#5f551c]  pb-2 text-[silver]"
                  : "text-gray-400"
              }
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
