import dynamic from "next/dynamic";
const Page = dynamic(() => import("../src/pages/Process"), { ssr: false });
export default Page;
