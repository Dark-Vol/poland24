import theme from "@theme/index";
import styled from "styled-components";

export const UserFields = styled.div`
  display: flex;
  gap: 8px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  background: #fff;
  padding: 16px;
  border-radius: 16px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  ${theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const Article = styled.div`
  background: #fff;
  padding: 16px;
`;

export const ArticleComment = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
