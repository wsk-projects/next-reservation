import { CommonProps, WrapperProps, TextElementProps } from "@/types/props";
import clsx from "clsx";

interface TitleProps extends CommonProps, WrapperProps, TextElementProps {}

function TitleBuilder({
  as: Tag = "h1",
  children,
  className,
  truncate = false,
  nowrap = true,
  bold = true,
  ...props
}: TitleProps) {
  return (
    <Tag
      className={clsx(truncate && "truncate", nowrap && "whitespace-nowrap", bold && "font-bold", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

const baseStyles = {
  h1: "text-2xl",
  h2: "text-xl",
  h3: "text-lg",
  h4: "text-base",
  h5: "text-sm",
  h6: "text-xs",
};

const Title = {
  h1: ({ children, className, truncate, nowrap, bold }: TitleProps) => (
    <TitleBuilder
      as="h1"
      className={clsx(baseStyles.h1, className)}
      children={children}
      truncate={truncate}
      nowrap={nowrap}
      bold={bold}
    />
  ),
  h2: ({ children, className, truncate, nowrap, bold }: TitleProps) => (
    <TitleBuilder
      as="h2"
      className={clsx(baseStyles.h2, className)}
      children={children}
      truncate={truncate}
      nowrap={nowrap}
      bold={bold}
    />
  ),
  h3: ({ children, className, truncate, nowrap, bold }: TitleProps) => (
    <TitleBuilder
      as="h3"
      className={clsx(baseStyles.h3, className)}
      children={children}
      truncate={truncate}
      nowrap={nowrap}
      bold={bold}
    />
  ),
  h4: ({ children, className, truncate, nowrap, bold }: TitleProps) => (
    <TitleBuilder
      as="h4"
      className={clsx(baseStyles.h4, className)}
      children={children}
      truncate={truncate}
      nowrap={nowrap}
      bold={bold}
    />
  ),
  h5: ({ children, className, truncate, nowrap, bold }: TitleProps) => (
    <TitleBuilder
      as="h5"
      className={clsx(baseStyles.h5, className)}
      children={children}
      truncate={truncate}
      nowrap={nowrap}
      bold={bold}
    />
  ),
  h6: ({ children, className, truncate, nowrap, bold }: TitleProps) => (
    <TitleBuilder
      as="h6"
      className={clsx(baseStyles.h6, className)}
      children={children}
      truncate={truncate}
      nowrap={nowrap}
      bold={bold}
    />
  ),
};

export default Title;
