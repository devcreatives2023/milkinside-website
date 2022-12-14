import React from "react";
import { data, icons } from "../../constants";
import { AnimatePresence, motion } from "framer-motion";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const sliderLength = data.sliderWork.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1);
  };

  React.useEffect(() => {
    setCurrentSlide(0);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className=" h-[120vh] xl:h-[80vh] lg:h-[80vh] 
       relative top-[100px]  w-[100%] overflow-hidden "
      >
        {data.sliderWork.map((items, index) => {
          return (
            <motion.div key={items.id}>
              {index === currentSlide && (
                <div key={items.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 1,
                      },
                    }}
                    className="relative"
                  >
                    <motion.video
                      autoPlay={true}
                      controls={false}
                      muted
                      style={{ transformOrigin: "top left" }}
                      className="w-[100%] opacity-[0.5]"
                    >
                      <source src={items.video} />
                    </motion.video>
                  </motion.div>

                  <>
                    <motion.div
                          initial={{ opacity: 0,x:-100 }}
                          animate={{
                            opacity: 1,
                            x:0,
                            transition: {
                              duration: 2,
                            },
                          }}
                        
                      className="absolute p-4 h-[500px] lg:h-[230px] xl:h-[230px] 
                      left-[12%] xl:left-[20%]
                      top-[8%]  xl:top-[25%] w-[70%] 
                      lg:top-[23%]
                      lg:w-[50%]
                      xl:w-[40%]
                      bg-slidertext py-6"
                    >
                      <h1 className=" xl:text-[36px] lg:text-[36px] capitalize font-serif ">
                        {items.title}
                      </h1>
                      <p
                        className="text-[12px] xl:text-[16px] lg:text-[16px]
                     mt-5 "
                      >
                        {items.text}
                      </p>
                    </motion.div>
                  </>
                  <div
                    className="absolute top-[34%]
                  xl:top-[67%] md:top-[60%]
                   lg:top-[65%]
                   left-[10%]
                   lg:left-[11%]
                   text-[19px] xl:text-[52px] 
                   lg:text-[40px]"
                  >
                    <button onClick={nextSlide}>
                      <icons.RiArrowRightSLine />
                    </button>
                    <button onClick={prevSlide}>
                      <icons.RiArrowLeftSLine />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default Slider;
