import styled from "styled-components";

import theme from "@theme/index";

export const Wrapper = styled.section`
  padding: 0 16px;
  font-family: Rubik;

  ${theme.breakpoints.up("md")} {
    padding: 64px;
  }
`;

export const Container = styled.div`
  background: #ea0c0c;
  border-radius: 16px;
  padding: 24px 16px;
  color: #fff;

  ${theme.breakpoints.up("md")} {
    display: flex;
    max-width: 1290px;
    margin: auto;
    padding: 48px;
    padding-left: 138px;
    justify-content: space-between;
  }
`;

export const Title = styled.h5`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 28.8px;
  margin-bottom: 12px;

  ${theme.breakpoints.up("md")} {
    font-size: 40px;
    font-weight: 800;
    line-height: 48px;
    margin-bottom: 27px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  ${theme.breakpoints.up("md")} {
    max-width: 520px;
  }
`;

export const DescriptionItem = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  letter-spacing: initial;

  &::before {
    content: "";
    display: block;
    height: 8px;
    min-width: 8px;
    background: #fff;
    border-radius: 50px;
    margin-top: 6px;
  }
`;

export const Calculator = styled.div`
  width: 100%;

  ${theme.breakpoints.up("md")} {
    max-width: 532px;
    position: relative;
    margin-top: 15px;
  }
`;

export const Tabs = styled.div<{ $activeTab: "€" | "zł" }>`
  display: flex;
  box-shadow: 0px -1px 0px 0px #c4c4c4 inset;
  position: relative;
  margin-top: 12px;

  &::before {
    content: "";
    display: block;
    width: 50%;
    height: 4px;
    background: #fff;
    position: absolute;
    bottom: 0;
    transition: 0.2s;
    left: ${({ $activeTab }) => ($activeTab === "zł" ? 0 : "50%")};

    ${theme.breakpoints.up("md")} {
      background: #ed2e2e;
    }
  }

  ${theme.breakpoints.up("md")} {
    width: 177px;
    position: absolute;
    right: 24px;
    top: 5px;
    box-shadow: 0px -1px 0px 0px #c4c4c4 inset;
    z-index: 1;
  }
`;

export const Tab = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: #fff;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  ${theme.breakpoints.up("md")} {
    color: rgba(45, 45, 45, 0.9);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 10px;
  margin-top: 16px;

  ${theme.breakpoints.up("md")} {
    margin-top: 0px;
    margin-bottom: 26px;
  }
`;

export const Divider = styled.div`
  height: 2px;
  background: #ee3d3d;
  margin: 16px 0px;
`;

export const Sum = styled.div`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const CurrencySum = styled.span`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const Total = styled.span`
  margin-left: 8px;
  font-size: 24px;
  font-weight: 700;
`;
