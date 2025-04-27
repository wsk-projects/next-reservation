import { CommonProps, WrapperProps } from "@/types/props";
import clsx from "clsx";

export interface FloatingLayoutProps extends CommonProps, WrapperProps {}

export const FloatingLayout = ({ as: Tag = "div", id, className, children }: FloatingLayoutProps) => {
  return (
    <Tag id={id} className={clsx("fixed", className)}>
      {children}
    </Tag>
  );
};
