import theme from "@theme/index";
import styled from "styled-components";

export const UserInfo = styled.div`
  display: grid;
  gap: 8px;

  ${theme.breakpoints.up("md")} {
    grid-template-columns: auto auto auto;
  }
`;

export const License = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  height: 100%;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: rgba(45, 45, 45, 0.6);
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  line-height: 17px;

  &::before {
    content: "";
    display: block;
    background: rgba(45, 45, 45, 0.6);
    width: 3px;
    height: 3px;
    border-radius: 50px;
  }
`;
