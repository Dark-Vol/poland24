import type { FieldError } from "react-hook-form";
import { InputHTMLAttributes } from "react";
import * as Styled from "./TextField.styled";

export type TextFieldProps = {
  name: string;
  label?: string;
  error?: FieldError;
  fullWidth?: boolean;
  placeholder?: string;
  size?: "small" | "large";
  type?: "text" | "number" | "counter" | "password" | "email" | "tel";
  textArea?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">;

const TextField: React.FC<TextFieldProps> = ({
  name,
  label = "",
  error,
  size = "small",
  type = "text",
  placeholder = "",
  fullWidth = false,
  textArea,
  style,
  ...props
}) => {
  return (
    <Styled.Label id={name} $fullWidth={fullWidth} style={style}>
      {label}
      <Styled.TextField
        id={name}
        type={type}
        textArea={textArea}
        $size={size}
        $error={error}
        $fullWidth={fullWidth}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <Styled.ErrorText>
          {error.type === "required" ? "Це поле обов'язкове!" : error.message}
        </Styled.ErrorText>
      )}
    </Styled.Label>
  );
};

export default TextField;
