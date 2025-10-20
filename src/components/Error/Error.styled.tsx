import theme from "@theme/index";
import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1290px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  text-align: center;

  ${theme.breakpoints.down("md")} {
    padding: 16px;
  }
`;

export const StatusCode = styled.h1`
  font-size: 52px;
  font-weight: 700;
`;

export const Description = styled.h3`
  font-size: 38px;

  ${theme.breakpoints.down("md")} {
    font-size: 25px;
  }
`;
