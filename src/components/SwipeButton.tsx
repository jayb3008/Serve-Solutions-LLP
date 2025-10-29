import React from "react";

import { cn } from "@/lib/utils";

interface SwipeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  firstText?: string;
  secondText?: string;
  firstContent?: React.ReactNode;
  secondContent?: React.ReactNode;
  className?: string;
  firstClass?: string;
  secondClass?: string;
}

export default function SwipeButton({
  className = "",
  secondText = "Get access",
  firstText = "Get access",
  firstContent,
  secondContent,
  firstClass = "bg-orange-500 text-white",
  secondClass = "bg-black text-white",
  ...props
}: SwipeButtonProps) {
  const common = "block duration-300 ease-in-out";
  return (
    <button
      {...props}
      className={cn(
        "group relative min-w-fit overflow-hidden rounded-md",
        className
      )}
    >
      <span
        className={cn(
          "absolute inset-0 translate-y-full group-hover:translate-y-0",
          common,
          secondClass
        )}
      >
        {secondContent ?? secondText}
      </span>
      <span className={cn("group-hover:-translate-y-full", common, firstClass)}>
        {firstContent ?? firstText}
      </span>
    </button>
  );
}
