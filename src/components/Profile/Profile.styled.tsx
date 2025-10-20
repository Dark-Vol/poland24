import theme from "@theme/index";
import styled from "styled-components";

export const Content = styled.div`
  border-radius: 10px;
  background: #fff;
  padding: 16px;
  padding-top: 8px;
  margin-top: 16px;
  width: 100%;

  ${theme.breakpoints.up("md")} {
    max-width: 750px;
  }
`;
