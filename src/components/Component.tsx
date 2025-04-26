import { LayoutCommonProps, LayoutWrapperProps } from "@/types/props";

interface ComponentProps extends LayoutCommonProps, LayoutWrapperProps {}

export default function Component({ as: Tag = "div", id, className, children, ...props }: ComponentProps): JSX.Element {
  return (
    <Tag id={id} className={className} {...props}>
      {children}
    </Tag>
  );
}
