"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  iconLists: string[];
  livelink?: string;
  github?: string;
  projectIcon?:string;
  id: number;

};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 8000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="mx-auto  px-4 py-20 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-8 sm:gap-15 md:grid-cols-2">
        <div>
          <div className="relative  h-80 md:h-full w-full ">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  {/* <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={700}
                    height={700}
                    draggable={false}
                    className=" rounded-3xl object-cover object-center border-2 border-gray-200 dark:border-neutral-700"
                  /> */}

                  <div className="rounded-3xl p-[0.7px] bg-gradient-to-r from-pink-300 via-purple-400 to-blue-500">
                      <Image
                        src={testimonial.src}
                        alt={testimonial.name}
                        width={700}
                        height={700}
                        draggable={false}
                        className="rounded-3xl object-cover object-center"
                      />
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4 ">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white flex justify-center items-center gap-2">
              <div>
                <Image src={testimonials[active].projectIcon||""} alt='logo' width={40} height={40} 
                className=''/>
              </div>
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-base text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
              {/*iconlist*/}
              <div className="flex items-center justify-start mt-10 ">
                {testimonials[active].iconLists.map((icon, i) => (
                  <div key={i} className="border border-white/[0.2] rounded-full
                  bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{transform:`translateX(-${5*i*2}px)`}}>

                    <Image
                      src={icon}
                      alt="icon"
                      width={40}
                      height={40}
                      className="p-2"
                    />
                  </div>
                ))}
              </div> 


          <div className="flex items-center justify-between mt-6">
              <div className="p-[0.8px] rounded-lg bg-gradient-to-r from-blue-700 to-cyan-600">
                <div className="flex items-center justify-center bg-gray-900 px-4 py-2 rounded-lg
                 hover:bg-gray-800 transition duration-500">
                    <a
                      href={testimonials[active].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[12px]
                      sm:text-sm  text-[#a0d8d1] hover:text-white transition-colors font-semibold"
                    >
                      <FaGithub size={24} className="w-5 h-5 sm:w-6 sm:h-6 "/>  
                    View on GitHub
                  </a>
                </div>
              </div>

            <div className="flex justify-end items-center ">
            <a href={testimonials[active].livelink} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 text-sm font-bold  flex">
            
               <p> Explore Live Project</p>
                     <motion.span
                        animate={{ x: [0, 5, 0] }}   
                        transition={{
                          repeat: Infinity,        
                          repeatType: "loop",
                          duration: 1.2,
                          ease: "easeInOut"
                        }}
                        className="inline-block"
                      >
                        <HiArrowRight className="text-2xl mr-3" />
                    </motion.span>         
            </a>      
          </div>
          </div>     
            
  

          </motion.div>



          <div className="flex gap-4 pt-12 md:pt-0 mt-6 justify-center">
            <button
              onClick={handlePrev}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 cursor-pointer"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 cursor-pointer"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
