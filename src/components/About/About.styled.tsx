import CustomBlockTitle from "@components/BlockTitle";
import theme from "@theme/index";
import styled from "styled-components";

export const BlockTitle = styled(CustomBlockTitle)`
  ${theme.breakpoints.up("md")} {
    height: fit-content;

    h3 {
      font-weight: 700;
      line-height: 120%;
      font-size: 24px;
      width: 330px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 16px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  max-height: 360px;
  max-width: 800px;
  margin-left: auto;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 65px;

  ${theme.breakpoints.down("md")} {
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    margin: 0 0 16px;
  }
`;
