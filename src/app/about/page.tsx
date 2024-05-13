import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "This is About Page ",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Serve is a dynamic Software Development and Solutions Agency dedicated to crafting exceptional websites and software applications for our clients. With a deep understanding of the entire development cycle—from concept to coding, testing to release, and ongoing refinement—we ensure unparalleled results beyond launch.

        Our focus is innovation, whether it's developing mobile applications or robust website infrastructure, tailored to meet our clients' needs and demands. At Serve, we are committed to driving growth and success through cutting-edge technology solutions."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
