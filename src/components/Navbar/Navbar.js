import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../constants";

const Navbar = ({bg,logobg,textl,text,links}) => {
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div
      className="fixed left-0 xl:w-[100%] xl:p-main
    lg:w-[100%] lg:p-main
      top-0 flex xl:justify-between lg:justify-between  z-40 "
      style={{background:bg,color:text}}
      >

      <div
        className="w-[220px] xl:w-[450px]  lg:w-[240px] md:w-[300px] "
        >
        <p
        className="xl:w-[50%]  text-center
        text-sm  p-[35px]
        xl:py-10 uppercase font-bold font-sans flex justify-center 
        items-center"
        style={{background:logobg ,color:textl}}

        >
          Lorem.
        </p>
      </div>
      <div className="py-3 hidden xl:inline-block lg:inline-block md:hidden mr-4" style={{background:links}}>
        <ul className="flex justify-start items-start mr-10 text-xl text-[gray] gap-[210px]">
          <li className="my-0 lg:my-2 xl:my-6 pl-3">
            <Link to="/work">Work</Link>
          </li>
          <li className=" my-0 lg:my-2 xl:my-6">
            <Link to="/">About</Link>
          </li>
          <li className=" my-0 lg:my-2 xl:my-6">
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
          className="absolute right-10 text-main 
           text-[3rem] flex mt-5"
        />
        {toggleNav ? (
          <ul
            className=" fixed top-0 right-0 
            flex flex-col justify-start items-start
             p-10
             transition-all duration-[0.6s] ease-in-out overflow-hidden
             bg-main"
          >
            <li>
              <button
                onClick={() => setToggleNav()}
                className="absolute left-0 "
              >
                <icons.BsArrowLeftCircle />
              </button>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
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
