import theme from "@theme/index";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  gap: 40px;
  padding-left: 12px;
  padding-bottom: 12px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    padding-left: 0;
    gap: 0;
  }
`;

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 35%;

  ${theme.breakpoints.down("md")} {
    width: auto;
  }
`;

export const Articles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

export const BoldText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const Total = styled.span`
  margin-left: auto;
  margin-top: auto;
  font-weight: 700;
  font-size: 16px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;
