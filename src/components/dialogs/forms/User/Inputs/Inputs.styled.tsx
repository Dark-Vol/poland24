import theme from "@theme/index";
import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  ${theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;

export const Messengers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const Messanger = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 16px;
  font-weight: 700;
`;
