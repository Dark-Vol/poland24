import theme from "@theme/index";
import styled from "styled-components";

export const Checkboxes = styled.div`
  display: flex;
  gap: 16px;
  font-weight: 400;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: 12px;
  }
`;

export const BoldText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
