"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/images/about/Optimize.json";

const HowCnWorksex = () => {
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
          {/* <div className="container"> */}
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
                    5. Optimize: Steadily climbing up the Hill
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    The real work starts for us as soon as your business is launched on the web. We keep a close eye on your brand and measure various statistics to know how it is performing on the web. We support and maintain your brand all through its lifetime. We also optimize it to improve lead generation. There are new competitions in the markets every day and we back you up with different strategies to make you Unstoppable!

                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
    </motion.div>
  );
};

export default HowCnWorksex;
