import { LinkProps } from "next/link";

import * as Styled from "./Link.styled";

type CustomLinkProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
} & LinkProps;

const Link: React.FC<CustomLinkProps> = ({ children, ...props }) => {
  return <Styled.Link {...props}>{children}</Styled.Link>;
};

export default Link;
