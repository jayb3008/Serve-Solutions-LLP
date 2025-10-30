import dynamic from "next/dynamic";
const Page = dynamic(() => import("../src/pages/FAQ"), { ssr: false });
export default Page;
