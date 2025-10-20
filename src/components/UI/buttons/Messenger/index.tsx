import type { ButtonHTMLAttributes } from "react";
import * as Styled from "./Messenger.styled";

type MessengerButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const MessengerButton: React.FC<MessengerButtonProps> = ({
  children,
  ...props
}) => {
  return <Styled.IconButton {...props}>{children}</Styled.IconButton>;
};

export default MessengerButton;
