import theme from "@theme/index";
import styled from "styled-components";

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Price = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(3, 1fr) 0.4fr;
  gap: 8px;

  ${theme.breakpoints.down("md")} {
    grid-template-columns: repeat(3, 1fr);

    label:nth-child(1) {
      grid-column: 1 / 3;
    }
  }
`;

export const Currency = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
`;

export const Total = styled.div`
  grid-column: 1 / span 5;
  display: flex;
  gap: 16px;

  ${theme.breakpoints.down("md")} {
    display: grid;

    label:nth-child(1) {
      grid-column: 1 / span 2;
    }

    button {
      margin-left: auto;
    }
  }
`;
