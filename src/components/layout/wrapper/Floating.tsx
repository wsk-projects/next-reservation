import { LayoutCommonProps, LayoutWrapperProps } from "@/types/props";
import clsx from "clsx";

export interface FloatingLayoutProps extends LayoutCommonProps, LayoutWrapperProps {}

export const FloatingLayout = ({ as: Tag = "div", id, className, children }: FloatingLayoutProps) => {
  return (
    <Tag id={id} className={clsx("fixed", className)}>
      {children}
    </Tag>
  );
};
