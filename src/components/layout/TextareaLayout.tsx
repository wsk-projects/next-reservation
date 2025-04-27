"use client";

import { CommonProps, InputElementProps } from "@/types/props";
import clsx from "clsx";

export interface TextareaLayoutProps extends CommonProps, InputElementProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}

export default function TextareaLayout({ id, className, value, onChange, placeholder, disabled }: TextareaLayoutProps) {
  return (
    <textarea
      id={id}
      className={clsx(className)}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}
