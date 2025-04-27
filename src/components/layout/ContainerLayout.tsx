import { CommonProps, WrapperProps } from "@/types/props";
import clsx from "clsx";

export interface ContainerLayuoutProps extends CommonProps, WrapperProps {}

export default function ContainerLayout({ as: Tag = "div", id, className, children, ...props }: ContainerLayuoutProps) {
  return (
    <Tag id={id} className={clsx("w-full", className)} {...props}>
      {children}
    </Tag>
  );
}
