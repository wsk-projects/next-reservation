import { CommonProps, WrapperProps } from "@/types/props";
import clsx from "clsx";

export interface SelectLayoutProps extends CommonProps, Pick<WrapperProps, "children"> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

export default function SelectLayout({ id, className, children, value, onChange, disabled }: SelectLayoutProps) {
  return (
    <select id={id} className={clsx(className)} value={value} onChange={onChange} disabled={disabled}>
      {children}
    </select>
  );
}
