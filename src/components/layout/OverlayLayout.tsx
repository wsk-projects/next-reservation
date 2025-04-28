"use client";

import { CommonProps, WrapperProps } from "@/types/props";
import clsx from "clsx";

export interface OverlayLayoutProps extends CommonProps, WrapperProps {
  onClick?: () => void;
}

export default function OverlayLayout({
  as: Tag = "div",
  id,
  className,
  children,
  onClick = () => {},
}: OverlayLayoutProps) {
  return (
    <Tag id={id} className={clsx("flex flex-col justify-center fixed inset-0 z-40", className)} onClick={onClick}>
      <div className="flex flex-col justify-center" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </Tag>
  );
}
