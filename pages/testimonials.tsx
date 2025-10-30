import dynamic from "next/dynamic";
const Page = dynamic(() => import("../src/pages/Testimonials"), { ssr: false });
export default Page;
