import { IconFidgetSpinner } from "@tabler/icons-react";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../src/pages/About"), {
  ssr: false,
  loading: () => <IconFidgetSpinner className="animate-spin" />,
});
export default Page;
