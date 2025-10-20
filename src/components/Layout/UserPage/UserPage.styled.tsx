import theme from "@theme/index";
import styled from "styled-components";
import { MenuItem as CustomMenuItem } from "@components/UI/Avatar/Avatar.styled";

export const Wrapper = styled.section`
  max-width: 1290px;
  margin: auto;
  display: flex;
  height: 100%;

  h3 {
    font-size: 24px;
  }

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  padding: 13px;
  width: 100%;
  height: 100%;
`;

export const NavBar = styled.nav<{ $routesCount: number }>`
  position: sticky;
  bottom: 0;
  background: #fff;
  height: 58px;
  display: grid;
  grid-template-columns: repeat(${({ $routesCount }) => $routesCount + 1}, 1fr);
`;

export const MenuItem = styled(CustomMenuItem)`
  flex-direction: column;
  padding: 0;
  gap: 0;
  font-size: 12px;
  opacity: 0.6;
  align-items: center;
  justify-content: center;
`;
