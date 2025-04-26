import { CommonProps, WrapperProps } from "@/types/props";

interface ComponentProps extends CommonProps, WrapperProps {}

export default function Component({ as: Tag = "div", id, className, children, ...props }: ComponentProps): JSX.Element {
  return (
    <Tag id={id} className={className} {...props}>
      {children}
    </Tag>
  );
}
