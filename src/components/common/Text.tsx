import { CommonProps, WrapperProps, TextElementProps } from "@/types/props";
import clsx from "clsx";

interface TextBuilderProps extends CommonProps, WrapperProps, TextElementProps {}

function TextBuilder({ children, className, truncate = false, nowrap = false, ...props }: TextBuilderProps) {
  return (
    <p className={clsx(truncate && "truncate", nowrap && "whitespace-nowrap", className)} {...props}>
      {children}
    </p>
  );
}

const baseStyles = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const Text = {
  xs: ({ children, className, truncate, nowrap, ...props }: TextBuilderProps) => (
    <TextBuilder
      children={children}
      className={clsx(baseStyles.xs, className)}
      truncate={truncate}
      nowrap={nowrap}
      {...props}
    />
  ),
  sm: ({ children, className, truncate, nowrap, ...props }: TextBuilderProps) => (
    <TextBuilder
      children={children}
      className={clsx(baseStyles.sm, className)}
      truncate={truncate}
      nowrap={nowrap}
      {...props}
    />
  ),
  base: ({ children, className, truncate, nowrap, ...props }: TextBuilderProps) => (
    <TextBuilder
      children={children}
      className={clsx(baseStyles.base, className)}
      truncate={truncate}
      nowrap={nowrap}
      {...props}
    />
  ),
  lg: ({ children, className, truncate, nowrap, ...props }: TextBuilderProps) => (
    <TextBuilder
      children={children}
      className={clsx(baseStyles.lg, className)}
      truncate={truncate}
      nowrap={nowrap}
      {...props}
    />
  ),
  xl: ({ children, className, truncate, nowrap, ...props }: TextBuilderProps) => (
    <TextBuilder
      className={clsx(baseStyles.xl, className)}
      children={children}
      truncate={truncate}
      nowrap={nowrap}
      {...props}
    />
  ),
};

export default Text;
