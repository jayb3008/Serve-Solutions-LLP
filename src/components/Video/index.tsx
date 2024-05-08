"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";
import SingleFeature from "../Features/SingleFeature";
import featuresData from "../Features/featuresData";

const Video = ({
  type
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {
          type!=="page"?
          <SectionTitle
            title="What we do"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
            mb="80px"
          />:null
        }

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4"
              data-wow-delay=".15s"
            >
              {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"> */}
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-no-repeat"></div>
    </section>
  );
};

export default Video;
