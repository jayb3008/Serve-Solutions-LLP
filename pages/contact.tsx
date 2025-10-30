import dynamic from "next/dynamic";
const Page = dynamic(() => import("../src/pages/Contact"), { ssr: false });
export default Page;
