import theme from "@theme/index";
import styled from "styled-components";

export const FormContainer = styled.form`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${theme.breakpoints.down("md")} {
    gap: 8px;
    flex-direction: column;
  }
`;
