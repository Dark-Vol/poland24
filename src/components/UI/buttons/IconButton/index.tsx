import type { ButtonHTMLAttributes } from "react";

import * as Styled from "./IconButton.styled";

type IconButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: React.FC<IconButtonProps> = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

export default IconButton;
