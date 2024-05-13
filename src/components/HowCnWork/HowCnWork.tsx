"use client";
import { motion } from "framer-motion";
import { workFlowData } from "../Blog/blogData";

const HowCnWork = () => {
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
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 mb-9 flex flex-wrap justify-center">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Our Working Process
            </h2>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            {workFlowData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/5"
              >
                <div className="w-full">
                  <div className="wow fadeInUp" data-wow-delay=".15s">
                    <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                      {blog.id}
                    </div>
                    <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      {blog.title}
                    </h3>
                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                      {blog.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HowCnWork;
