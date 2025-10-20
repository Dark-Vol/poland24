import NextLink from "next/link";
import styled from "styled-components";

export const Link = styled(NextLink)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  line-height: 0;

  &:visited {
    color: inherit;
  }
`;
