import theme from "@theme/index";
import styled from "styled-components";

export const Table = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: 3fr 0.5fr 0.5fr 0.5fr;
  font-weight: 500;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px 0;

  ${theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr 0.5fr 0.4fr 0.5fr;
  }
`;

export const Body = styled.div``;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 0.5fr 0.5fr 0.5fr;
  padding: 8px 0;

  ${theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr 0.5fr 0.4fr 0.5fr;
  }
`;

export const Cell = styled.div`
  padding: 0px 4px;
`;
