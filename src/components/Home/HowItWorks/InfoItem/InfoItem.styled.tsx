import theme from "@theme/index";
import styled from "styled-components";

export const Container = styled.article`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 16px 16px 0px rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  padding-right: 0px;

  ${theme.breakpoints.up("md")} {
    padding: 24px 16px;
    padding-top: 13px;
    padding-right: 11px;
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export const Number = styled.span`
  font-family: Rubik;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  color: #fbd5d5;

  ${theme.breakpoints.up("md")} {
    font-size: 80px;
  }
`;

export const Title = styled.h5`
  font-family:
    "SF Pro Text",
    -apple-system,
    BlinkMacSystemFont,
    Roboto,
    "Segoe UI",
    Helvetica,
    Arial,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  margin: 0;
  padding: 0;
  word-spacing: -1px;
  letter-spacing: 0px;

  ${theme.breakpoints.up("md")} {
    font-family: Rubik;
    position: absolute;
    font-size: 16px;
    font-weight: 800;
    background-color: #fff;
    left: 26px;
  }
`;

export const Text = styled.p`
  margin-top: 8px;
  font-family: Rubik;
  font-size: 14px;
  font-style: normal;
  letter-spacing: 0;
  line-height: normal;
  font-weight: 400;

  ${theme.breakpoints.up("md")} {
    margin-top: 4px;
    font-size: 16px;
    line-height: 22px;
  }
`;
