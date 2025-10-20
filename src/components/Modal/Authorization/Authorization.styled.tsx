import theme from "@theme/index";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  text-align: center;

  ${theme.breakpoints.up("md")} {
    min-width: 460px;
  }
`;

export const ButtonText = styled.button`
  background: none;
  color: #9d7b6d;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
`;
