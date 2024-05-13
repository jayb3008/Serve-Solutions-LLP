import Breadcrumb from "@/components/Common/Breadcrumb";
import HowCnWork from "@/components/HowCnWork/HowCnWork";
import HowCnWorkFive from "@/components/HowCnWork/HowCnWorkFive";
import HowCnWorkFor from "@/components/HowCnWork/HowCnWorkFor";
import HowCnWorkTwo from "@/components/HowCnWork/HowCnWorkTwo";
import HowCnWorksex from "@/components/HowCnWork/HowCnWorksex";
import HowCnWorkThree from "@/components/HowCnWork/HowCnWorkthree";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How it's work block ",
  description: "This is How it's work block ",
  // other metadata
};

const WorkingProcess = () => {
  return (
    <>
      <Breadcrumb pageName="How it's work block" description="" />
      <HowCnWork />
      <HowCnWorkTwo />
      <HowCnWorkThree/>
      <HowCnWorkFor/>
      <HowCnWorkFive/>
      <HowCnWorksex />
    </>
  );
};

export default WorkingProcess;
