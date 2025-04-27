import { CommonProps } from "@/types/props/CommonProps";

import { WrapperProps } from "@/types/props/WrapperProps";
import clsx from "clsx";

export interface CircleLayoutProps extends CommonProps, WrapperProps {}

export default function CircleLayout({ as: Tag = "div", id, className, children }: CircleLayoutProps) {
  return (
    <Tag id={id} className={clsx("flex items-center justify-center rounded-full", className)}>
      {children}
    </Tag>
  );
}
