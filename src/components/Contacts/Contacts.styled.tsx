import theme from "@theme/index";
import styled from "styled-components";

export const Contacts = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 24px 0px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    margin: 0;
    gap: 24px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ColumnTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const ColumnInfo = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
`;
