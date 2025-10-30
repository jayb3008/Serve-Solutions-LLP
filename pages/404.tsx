import dynamic from "next/dynamic";
const Page = dynamic(() => import("../src/pages/NotFound"), { ssr: false });
export default Page;
