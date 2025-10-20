import theme from "@theme/index";
import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1290px;
  margin: auto;

  ${theme.breakpoints.down("md")} {
    padding: 0 16px;
  }
`;
