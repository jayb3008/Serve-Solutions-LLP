import dynamic from "next/dynamic";
const Page = dynamic(() => import("../src/pages/Home"), { ssr: false });
export default Page;
