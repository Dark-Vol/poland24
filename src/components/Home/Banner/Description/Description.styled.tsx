import theme from "@theme/index";
import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  margin-top: 32px;

  ${theme.breakpoints.up("md")} {
    display: flex;
    margin: 0;
    height: 738px;
    width: 100%;
  }
`;

export const Item = styled.div<{ $right: number; $background: string }>`
  background: ${({ $background }) => $background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 220px;
  padding: 24px 0 24px 24px;

  ${theme.breakpoints.down("md")} {
    &:nth-child(odd) {
      background: #ea0c0c;
    }

    &:nth-child(even) {
      background: #bb0a0a;
    }

    &:nth-child(1) {
      background: #ee3d3d;
    }
  }

  ${theme.breakpoints.up("md")} {
    padding: 0;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 80px;
    box-shadow: 0px 24px 33px -9px rgba(0, 0, 0, 0.1);
    border-radius: 50px 0px 0px 200px;
    width: 800px;
    position: absolute;
    height: 100%;
    right: ${({ $right }) => $right}px;
    transition: 0.3s;

    &:hover {
      right: ${({ $right }) => $right + 300}px;
    }
  }
`;

export const Head = styled.div`
  ${theme.breakpoints.up("md")} {
    height: 100%;
    padding-left: 20px;
    display: flex;
    width: 410px;
    justify-content: space-between;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 120%;

  ${theme.breakpoints.up("md")} {
    // display: flex;
    // flex-direction: column;
    // text-align: left;
    // transform-origin: 0 0;
    // position: relative;
    // bottom: 0;

    font-size: 32px;
    max-height: 270px;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
  }

  ${theme.breakpoints.down("lg")} {
    font-size: 20px;
  }
`;

export const Info = styled.p`
  display: none;

  ${theme.breakpoints.up("md")} {
    display: block;
    max-width: 220px;
    // margin-bottom: auto;
    // position: relative;
    // left: -100px;
  }
`;

export const Logo = styled.div`
  min-width: 160px;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${theme.breakpoints.up("md")} {
    min-width: 300px;
    min-height: 300px;
  }
`;
