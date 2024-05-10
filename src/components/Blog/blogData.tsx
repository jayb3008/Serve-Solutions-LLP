import { Blog, WorkFlow } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export const workFlowData: WorkFlow[] = [
  {
    id: "01.",
    title: "Research",
    paragraph: "Gethering Information from all around",
    icon: <div></div>,
  },
  {
    id: "02.",
    title: "Plan",
    paragraph: "Effective strategies for favorable outcomes",
    icon: <div></div>,
  },
  {
    id: "03.",
    title: "Implements",
    paragraph: "Timely executions as per the plan ",
    icon: <div></div>,
  },
  {
    id: "04.",
    title: "Test and Deliver",
    paragraph: "Making a successful launch",
    icon: <div></div>,
  },
  {
    id: "05.",
    title: "Optimize",
    paragraph: "Steadyily climbing up the Hill",
    icon: <div></div>,
  },
];
export default blogData;
