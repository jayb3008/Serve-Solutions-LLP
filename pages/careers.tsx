import dynamic from "next/dynamic";
const Page = dynamic(() => import("../src/pages/Careers"), { ssr: false });
export default Page;
