import type { ButtonHTMLAttributes } from "react";

import * as Styled from "./Button.styled";

type ButtonProps = {
  variant?: "primary" | "secondary" | "subtle" | "text" | "green";
  size?: "large" | "medium" | "small";
  fullwidth?: boolean;
  form?: "default" | "circle";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "large",
  fullwidth = false,
  form = "default",
  ...props
}) => {
  return (
    <Styled.Button
      $variant={variant}
      $size={size}
      $fullwidth={fullwidth}
      $form={form}
      {...props}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
