"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/images/about/Testing.json";

const HowCnWorkFive = () => {
  const container = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={variants}
    >
      <section className="pb-[10px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  4. Test & Deliver: Making a successful launch
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  After implementation, it is time to cross check the content, designs and functionality. We rigorously test the website to be mobile ready and cross browser compatibility with the latest browsers apart from ensuring all features as promised have been delivered. We test all database connections and forms to accurately record user inputs and seek your approval for the website before making it live. We finally check for broken links and the website is published for the public.

                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Lottie animationData={animationData} loop={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HowCnWorkFive;
