import dynamic from "next/dynamic";
const Page = dynamic(() => import("../src/pages/Privacy"), { ssr: false });
export default Page;
