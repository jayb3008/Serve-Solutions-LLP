import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Video from "@/components/Video";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Page | Free Next.js Template for Startup and SaaS",
  description: "This is Service Page for Startup Nextjs Template",
  // other metadata
};

const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Service Page"
        description="Serve are here to establish your brand identity by providing you with the best solutions for your business. With the aim to transform your requirement into reality, NinjaTech is bound for your services."
      />
      <Video type="page"/>

      {/* <Contact /> */}
    </>
  );
};

export default ServicePage;
