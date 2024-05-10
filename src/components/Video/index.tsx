"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";
import SingleFeature from "../Features/SingleFeature";
import featuresData from "../Features/featuresData";
import { motion } from "framer-motion";

const Video = ({ type }) => {
  const [isOpen, setOpen] = useState(false);
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
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          {type !== "page" ? (
            <SectionTitle
              title="What we do"
              paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
              center
              mb="80px"
            />
          ) : null}

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4"
                data-wow-delay=".15s"
              >
                {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"> */}
                {featuresData.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <SingleFeature key={feature.id} feature={feature} />
                  </motion.div>
                ))}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-no-repeat"></div>
      </section>
    </motion.div>
  );
};

export default Video;
