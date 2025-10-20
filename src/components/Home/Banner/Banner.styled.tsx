import { Typography } from "@mui/material";
import theme from "@theme/index";
import styled from "styled-components";

export const Wrapper = styled.section`
  background: #fff;
  position: relative;
  max-width: 100vw;
  overflow: hidden;

  ${theme.breakpoints.up("md")} {
    box-shadow: 0px 8px 11px -3px rgba(0, 0, 0, 0.08) inset;
  }
`;

export const Container = styled.div`
  ${theme.breakpoints.up("md")} {
    display: flex;
    justify-content: space-between;
    max-width: 1290px;
    margin: auto;
  }
`;

export const Info = styled.div`
  ${theme.breakpoints.up("md")} {
    width: 100%;
    max-width: 515px;
    display: flex;
    flex-direction: column;
  }
`;

export const Text = styled.div`
  padding: 16px 22px 0px 29px;

  ${theme.breakpoints.up("lg")} {
    margin-top: 124px;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: Rubik;
  letter-spacing: inherit;
  line-height: initial;
  max-width: 515px;

  ${theme.breakpoints.up("md")} {
    font-size: 40px;
    font-weight: 800;
  }
`;

export const Subtitle = styled(Typography)`
  font-family: Rubik;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  margin-top: 24px;

  ${theme.breakpoints.up("md")} {
    font-size: 24px;
    margin-top: 36px;
    line-height: 140%;
  }
`;
