import theme from "@theme/index";
import styled from "styled-components";

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;

  ${theme.breakpoints.down("md")} {
    grid-row-start: 2;
  }
`;
