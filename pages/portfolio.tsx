import dynamic from "next/dynamic";
const Page = dynamic(() => import("../src/pages/Portfolio"), { ssr: false });
export default Page;
