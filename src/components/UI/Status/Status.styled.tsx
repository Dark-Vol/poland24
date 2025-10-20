import theme from "@theme/index";
import styled from "styled-components";
import { Status as StatusEnum } from "@entities/order";

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 16px;
  margin-left: 8px;
  margin-right: 30px;
  min-width: 145px;

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

export const Divider = styled.div<{ $color: StatusEnum }>`
  width: 3px;
  background-color: ${({ $color }) => $color};

  ${theme.breakpoints.down("md")} {
    height: 30px;
    margin-right: 4px;
  }
`;
