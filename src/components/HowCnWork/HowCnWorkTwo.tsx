"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from '../../../public/images/about/Research.json';

const HowCnWorkTwo = () => {
  const container = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  
  // useEffect(() => {
  //   // Initialize Lottie animation
  //   Lottie.loadAnimation({
  //     container: container.current,
  //     // renderer: 'svg', // or 'canvas', 'html'
  //     loop: true,
  //     autoplay: true,
  //     animationData: animationData,
  //   });
  // }, []);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={variants}
    >
      <section className="pb-[10px]">
        <div className="container">
          <div className="-mx-4 mb-9 flex flex-wrap justify-center">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              The Process - Described In Detail
            </h2>
          </div>
          <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
               <Lottie animationData={animationData} loop={true} />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                1. Research: Gathering Information from all around
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Webaartz values each business as unique and we spend time with you in understanding your working model. In this first phase, we appreciate your business goals and discuss your expectations about your web presence. With extensive research and analysis, we figure out the bigger picture of your market and competition for it on the web. Using all congregated information, we are set to prepare the plan for desired outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HowCnWorkTwo;
