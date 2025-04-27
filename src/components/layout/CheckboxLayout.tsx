"use client";

import { CommonProps } from "@/types/props/CommonProps";
import clsx from "clsx";

export interface CheckboxLayoutProps extends CommonProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function CheckboxLayout({
  id,
  className,
  checked = false,
  onChange = () => {},
  disabled = false,
}: CheckboxLayoutProps) {
  return (
    <input
      type="checkbox"
      id={id}
      className={clsx(className)}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      disabled={disabled}
    />
  );
}
