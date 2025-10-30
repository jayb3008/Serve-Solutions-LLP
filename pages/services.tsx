import dynamic from "next/dynamic";
const Page = dynamic(() => import("../src/pages/Services"), { ssr: false });
export default Page;
