import styled from "styled-components";
import { Menu as MuiMenu, MenuItem as MuiMenuItem } from "@mui/material";
import theme from "@theme/index";

export const Avatar = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;

  &:hover {
    opacity: 0.7;
  }
`;

export const Circle = styled.span`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  background: #9b51e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  outline: 2px solid rgb(253, 110, 106);
  border: 1px solid #fff;
`;

export const PhotoCircle = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  outline: 2px solid rgb(253, 110, 106);
  border: 1px solid #fff;
`;

export const FullName = styled.span`
  font-size: 14px;
  font-weight: 500;
  text-align: left;

  ${theme.breakpoints.down("md")} {
    display: none;
  }
`;

export const Email = styled.div`
  font-weight: 400;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Menu = styled(MuiMenu)`
  top: 10px;

  .MuiPaper-root {
    border-radius: 10px;
  }

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const MenuItem = styled(MuiMenuItem)<{ $isActive: boolean }>`
  font-size: 14px;
  font-weight: 700;
  padding: 6px 8px;
  color: #2d2d2d;
  gap: 16px;
  ${({ $isActive }) => $isActive && "background: #eaedee;"}

  &:hover {
    background: #eaedee;
  }
`;

export const Icon = styled.span`
  background: #eaedee;
  height: 24px;
  width: 24px;
  border-radius: 50px;
  padding: 8px;
  box-sizing: content-box;
`;
