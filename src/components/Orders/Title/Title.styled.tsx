import Link from "@components/Link";
import { Status } from "@entities/order";
import theme from "@theme/index";
import styled from "styled-components";

export const Content = styled.div`
  width: 100%;

  ${theme.breakpoints.down("md")} {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Info = styled.div`
  ${theme.breakpoints.down("md")} {
    width: 100%;
    display: flex;
  }
`;

export const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 16px;
  margin-left: 8px;
  margin-right: 30px;

  ${theme.breakpoints.down("md")} {
    margin: 0;
  }
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
  display: flex;
`;

export const BoldText = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const OrderName = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  text-decoration-line: underline;
  color: #9d7b6d !important;
`;
