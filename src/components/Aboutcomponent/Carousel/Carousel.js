import React from "react";
import { data, icons } from "../../../constants";
import { AnimatePresence, motion } from "framer-motion";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState();
  const slideLength = data.types.length;
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
      <div className=" overflow-hidden mt-10 xl:mt-0 lg:mt-0 w-[100%]">
        {data.types.map((item, index) => {
          return (
              <motion.div
                initial={{ width: "0px" }}
                whileInView={{ width: "100%" }}
                transition={{
                  type: "spring",
                  ease: "linear",
                  delay: 1,
                }}
                viewport={{ once: true }}
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
                      className="h-[45vh]  
                      xl:h-[80vh] lg:h-[80vh] 
                      md:h-[45vh]
                      object-cover 
                      "
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
          className="absolute 
          xl:left-[-40px] xl:bottom-[25px] bg-primary xl:bg-transparent 
          lg:bg-transparent p-5 xl:p-0 lg:p-0
           text-primary xl:text-main
            lg:text-main
             lg:bottom-[25px] lg:left-[-40px]
             md:bottom-[25px] md:left-[-80px]
              text-xl -left-[60px] bottom-[00px] w-[30px] h-[30px] "
        >
          <icons.BsArrowLeftCircle />
        </button>
        <button
          className=" absolute 
          xl:right-[-40px]  xl:bottom-[25px] 
          lg:right-[-40px]  lg:bottom-[25px] 
          md:right-[80px]  md:bottom-[90px] 
          w-[30px] h-[30px] 
          xl:bg-transparent xl:text-main  xl:p-0 lg:bg-transparent
        lg:text-main  lg:p-0 p-5 text-xl 
          right-[200px] bottom-[60px] "
          onClick={forWardSlide}
        >
          <icons.BsArrowRightCircle />
        </button>
      </div>
    </>
  );
};

export default Carousel;
