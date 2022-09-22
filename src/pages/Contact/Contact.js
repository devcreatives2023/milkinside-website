import React from "react";
import { Footer, Navbar } from "../../components";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
      <div
        className="bg-[#eee] h-[160vh] xl:h-[100vh] lg:h-[120vh]
        w-[100%]
        md:h-[150vh] pt-2 xl:pt-10 text-primary "
      >
        <Navbar
          logobg="black"
          textl="white"
          l="#eee"
          bg="#eee"
          text="black"
          links="white"
          navbarsmall="white"
          icon="black"
        />
        <motion.div
          initial={{ opacity: 0,x:40 }}
          animate={{
            opacity: 1,
            x:0,
            transition: {
              duration: 1,
            },
          }}
          className="flex xl:flex-row lg:flex-row justify-between mt-[140px] xl:p-main lg:p-main 
      px-[1rem]
      flex-col"
        >
          <div className="  mt-10 border-l-2">
            <h1
              className=" xl:text-title lg:text-title md:text-[26px] 
            text-[22px] capitalize font-main"
            >
              the future awaits
            </h1>

            <div className=" w-[30px] bg-main h-[3px] ml-1" />
            <div
              className="xl:w-[50%] tracking-wider mt-[50px] 
          xl:text-[16px] lg:text-[16px] text-[12px] w-[60%] text-[grey]"
            >
              <p>
                Aliqua molestiae and accusantium quasi culpa. Reprehenderit do
                and quisquam but commodo, aut for cillum eaque.
              </p>
              <br />
              <p>
                Reprehenderit sunt for deserunt for anim elit for occaecat
                natus. Nisi eum ullamco. Vel dolor. Nihil consequat eius unde
                but dolores.
              </p>
            </div>
            <div className="flex flex-col mt-[80px] text-sm ">
              <div>
                <span className="xl:ml-[-30px] font-bold"> A:</span>
                <span className="ml-2"> Erbil , Iraq</span>
              </div>
              <div>
                <span className="xl:ml-[-31px] lg:ml-[-31px]  font-bold">
                  {" "}
                  E:
                </span>
                <span className="ml-2 text-blue-700 cursor-pointer">
                  abrar@gmail.com
                </span>
              </div>
              <div className="mt-[30px] flex  items-center">
                <div className="xl:ml-[-31px] lg:ml-[-31px]  font- w-[30px] h-[1px] bg-[gray]  " />
                <p className="ml-2 text-black uppercase text-sm font-semibold">
                  what should we create together ?
                </p>
              </div>
            </div>
          </div>

          <div className="mr-auto border">
            <form className="bg-transparent mt-10 h-[300px] flex flex-col justify-around p-4">
              <div className="flex  xl:flex-row lg:flex-row flex-col">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-b-2 border-gray-500  bg-transparent  lg:placeholder:text-lg xl:placeholder:text-lg p-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Lase Name"
                  className="border-b-2 xl:ml-2 lg:ml-2 border-gray-500 bg-transparent  lg:placeholder:text-lg xl:placeholder:text-lg p-2 outline-none"
                />
              </div>
              <div className="flex xl:flex-row lg:flex-row flex-col">
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b-2 border-gray-500 bg-transparent  lg:placeholder:text-lg xl:placeholder:text-lg p-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="border-b-2 xl:ml-2 lg:ml-2 bg-transparent  lg:placeholder:text-lg xl:placeholder:text-lg p-2 outline-none border-gray-500"
                />
              </div>
              <div className="w-[100%]">
                <input
                  type="text"
                  placeholder="Message"
                  className="border-b-2 bg-transparent placeholder:text-lg p-2 outline-none border-gray-500 w-[100%]"
                />
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      <div className="mt-[20px]"></div>
      <Footer />
    </>
  );
};

export default Contact;
