import Link from "@components/Link";
import theme from "@theme/index";
import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h5`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;

  ${theme.breakpoints.up("md")} {
    text-align: left;
    margin-top: 0;
  }
`;

export const Column = styled.ul`
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 8px 18px;
  margin-top: 8px;
`;

export const ColumnItem = styled.li`
  font-size: 14px;
  font-weight: 400;
`;
