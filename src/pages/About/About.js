import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Icons,
  Navbar,
  TitleAbout,
  Type,
  Text,
  Carousel,
  Carousels,
  Footer,
} from "../../components";

const About = () => {
  return (
    <div className="">
      <Navbar />
      <div className="xl:p-main  md:p-[2rem]  lg:p-main lg:mt-[100px] ">
        <motion.div
          className="xl:h-[80vh] 
          xl:mt-0
          lg:h-[90vh]
          h-[90vh]
          md:h-[50vh]
          mt-[70px]"
        >
          <div
            className="flex flex-col xl:flex-row 
            lg:flex-row md:flex-row
            xl:justify-between lg:justify-between 
            justify-around  xl:mt-[110px]"
          >
            <div
              className="xl:w-[100%]
                
                md:w-[90%] w-[60%] relative left-0 xl:left-0 
                lg:left-0
                right-0 z-10 "
            >
              <div className="relative right-0 w-[410px]">
                <Carousel />
              </div>

              {/* ------------------------------------ */}
              <div
                className="uppercase rotate-[90deg] top-[88px] 
                lg:top-[100px] xl:top-[80px]
                right-[-100px]
                text-[12px]
                xl:right-[-35px]
                lg:right-[-120px] 
                 absolute flex flex-col"
              >
                <Type />
              </div>
            </div>
            {/* ------------------------------------ */}
            <div
              className=" flex flex-col 
            xl:ml-[30px]
            md:ml-[60px] 
            md:mt-[90px]
            lg:ml-[130px]
            lg:mt-[10px]
            tracking-wide mt-[20px] pt-3"
            >
              <TitleAbout title="  The best Lorem Ipsum Generator in all the sea!" />
              {/* ------------------------------------ */}
              <div className="text-[10px] xl:text-lg mt-2 lg:text-lg">
                <Text
                  p1="Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!"
                  p2="Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!"
                  p3="Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!"
                />
              </div>
              {/* ------------------------------------ */}
              <div className="mt-10">
                <Icons />
              </div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
            className="xl:h-[90vh]
          h-[105vh] lg:h-[90vh] md:h-[70vh]"
          >
            <div
              className="flex flex-col 
           xl:flex-row lg:flex-row 
           xl:justify-between lg:justify-between
           md:justify-between
            mt-[70px]
            "
            >
              {/* ------------------------------------ */}
              <div
                className=" flex flex-col  
                tracking-wide mt-[20px] pt-3 "
              >
                <TitleAbout title="Et consectetur ipsa" />
                {/* ------------------------------------ */}
                <div
                  className="text-[10px] xl:text-lg 
                lg:text-lg lg:pr-10 mt-2 "
                >
                  <Text
                    p1="Lemon drops ice cream bear claw sweet roll candy. Chupa chups marzipan jujubes halvah halvah jujubes tiramisu chupa chups chocolate cake. Donut toffee candy sweet cheesecake."
                    p2="Lemon drops ice cream bear claw sweet roll candy. Chupa chups marzipan jujubes halvah halvah jujubes tiramisu chupa chups chocolate cake. Donut toffee candy sweet cheesecake."
                    p3="Lemon drops ice cream bear claw sweet roll candy. Chupa chups marzipan jujubes halvah halvah jujubes tiramisu chupa chups chocolate cake. Donut toffee candy sweet cheesecake."
                  />
                </div>
                {/* ------------------------------------ */}
                <div className="mt-12">
                  <Icons />
                </div>
              </div>
              <div
                className="xl:w-[100%]  relative right-0 xl:left-0 
              lg:left-0 lg:w-[100%] mt-[-100px] xl:mt-0 lg:mt-0 z-10 "
              >
                <div className="absolute right-0 xl:w-[410px]">
                  <Carousels />
                </div>
                <div
                  className="uppercase rotate-[90deg] top-10 
                xl:top-[100px] lg:top-[100px]
                lg:left-[-50px]
                md:top-[100px]
                md:left-[320px]
                xl:left-[-40px]
                left-[43px] absolute text-[12px] flex flex-col"
                >
                  <Type />
                </div>
                {/* ------------------------------------ */}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default About;
