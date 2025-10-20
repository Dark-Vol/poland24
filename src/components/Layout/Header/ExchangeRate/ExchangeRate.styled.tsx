import theme from "@theme/index";
import styled from "styled-components";

export const ExchangeRate = styled.div`
  min-width: 60px;

  ${theme.breakpoints.down("md")} {
    display: none;
  }
`;

export const Currency = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-right: 8px;
`;
