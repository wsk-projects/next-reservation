import clsx from "clsx";
import FlexLayout, { FlexLayoutProps } from "@/components/layout/flex/FlexLayout";

interface StackProps extends Omit<FlexLayoutProps, "direction"> {
  wrap?: boolean;
  defaultStyle?: boolean;
}

const baseStyle = "gap-2";

const Stack = {
  H: ({ justify = "start", align = "center", defaultStyle = true, ...props }: StackProps) => (
    <FlexLayout
      {...props}
      className={clsx(defaultStyle && baseStyle, props.className)}
      justify={justify}
      align={align}
      horizontal
    />
  ),
  V: ({ justify = "start", align = "start", defaultStyle = true, ...props }: StackProps) => (
    <FlexLayout
      {...props}
      className={clsx(defaultStyle && baseStyle, props.className)}
      justify={justify}
      align={align}
    />
  ),
};

export default Stack;
