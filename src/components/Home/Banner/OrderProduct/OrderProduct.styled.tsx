import theme from "@theme/index";
import styled from "styled-components";

export const Container = styled.div`
  margin: 16px 14px 0px 21px;
  padding: 8px;
  border-radius: 15px;
  outline: 8px solid #fbcece;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${theme.breakpoints.up("md")} {
    margin: 0;
    margin-top: 176px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
