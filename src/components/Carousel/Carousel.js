import React from "react";
import { data, icons } from "../../constants";
import { motion } from "framer-motion";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState();
  const slideLength = data.design.length;
  const forWardSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const backwardSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };
  React.useEffect(() => {
    setCurrentSlide(0);
  }, []);
  return (
    <>
      {/* slider */}
      <div className=" overflow-hidden mt-10 xl:mt-0 lg:mt-0 ">
        {data.design.map((item, index) => {
          return (
            <motion.div
              initial={{ width: "0px" }}
              whileInView={{ width: "100%" }}
              transition={{
                type: "spring",
                ease: "linear",
                delay: 1,
              }}
              key={index}
            >
            
              {index === currentSlide && (
                <div>
                  <motion.img
                    src={item.img}
                    initial={{ opacity: 2, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 1 }}
                    transition={{
                      ease: [0, 0.71, 0.2, 1.01],
                      duration: 1,
                    }}
                    style={{ transformOrigin: "top left" }}
                    className="h-[45vh]  xl:h-[80vh] lg:h-[80vh]  object-cover xl:w-[99%]  lg:w-[100%]"
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      <div>
        <button
          onClick={backwardSlide}
          className="absolute xl:left-[-40px] xl:bottom-[25px] lg:left-[-60px] 
          lg:bottom-[65px] bg-primary xl:bg-transparent lg:bg-transparent  p-5 xl:p-0
          lg:text-main text-primary xl:text-main  text-xl -right-[75px] bottom-[00px]
          "
        >
          <icons.BsArrowLeftCircle />
        </button>
        <button
          className=" uppercase  absolute xl:right-[-40px] xl:bottom-[25px] 
          lg:right-[-60px] lg:bottom-[65px] 
          xl:bg-transparent lg:bg-transparent lg:text-main xl:text-main p-5 xl:p-0
          text-xl
          -right-[75px]
          bottom-[50px]
          "
          onClick={forWardSlide}
        >
          <icons.BsArrowRightCircle />
        </button>
      </div>
    </>
  );
};

export default Carousel;
