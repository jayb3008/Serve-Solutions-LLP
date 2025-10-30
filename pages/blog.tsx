import dynamic from "next/dynamic";
const Page = dynamic(() => import("../src/pages/Blog"), { ssr: false });
export default Page;
