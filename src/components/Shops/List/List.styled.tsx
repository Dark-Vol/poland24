import theme from "@theme/index";
import styled from "styled-components";

export const ShopsList = styled.div`
  display: grid;
  gap: 16px 8px;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;

  ${theme.breakpoints.down("lg")} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${theme.breakpoints.down("md")} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ShopCard = styled.div`
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0 6px 7px -2px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ShopName = styled.span`
  margin: auto;
  margin-top: 14px;
  margin-bottom: 8px;
  font-weight: 700;
`;

export const ShopInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoldText = styled.span`
  font-weight: 700;
`;
