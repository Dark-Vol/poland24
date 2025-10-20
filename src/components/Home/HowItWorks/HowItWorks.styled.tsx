import theme from "@theme/index";
import styled from "styled-components";

export const Wrapper = styled.section`
  min-width: 100%;
`;

export const Container = styled.div`
  padding: 32px 17px 0px 17px;

  ${theme.breakpoints.up("lg")} {
    padding: 0;
    padding-top: 64px;
    max-width: 1290px;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

export const InfoList = styled.div`
  margin-top: 32px;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(1, 1fr);

  ${theme.breakpoints.up("sm")} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${theme.breakpoints.up("lg")} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const Order = styled.div`
  margin: auto;
  margin-top: 48px;

  ${theme.breakpoints.down("md")} {
    margin-top: 16px;
  }
`;
