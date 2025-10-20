import theme from "@theme/index";
import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  color: #2d2d2d;
  border-radius: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 22px;
  max-height: calc(100% - 50px);
  width: max-content;
  max-width: 1280px;

  ${theme.breakpoints.down("md")} {
    padding: 8px;
    width: calc(100% - 12px);
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  font-weight: 800;

  ${theme.breakpoints.down("md")} {
    font-size: 24px;
  }
`;

export const Content = styled.div`
  max-height: calc(100vh - 150px);
  overflow: auto;
  padding: 10px;
  position: relative;

  ${theme.breakpoints.down("md")} {
    padding-top: 0;
    margin-top: 20px;
  }
`;
