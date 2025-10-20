import { InputHTMLAttributes } from "react";
import * as Styled from "./Checkbox.styled";

export type CheckBoxProps = {
  name: string;
  label?: string;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  label = "",
  error = false,
  style,
  ...props
}) => {
  return (
    <Styled.Label style={style} $error={error} id={name}>
      <Styled.Checkbox id={name} type="checkbox" {...props} />
      {label}
    </Styled.Label>
  );
};

export default CheckBox;
