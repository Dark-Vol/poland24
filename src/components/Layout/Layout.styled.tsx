import styled from "styled-components";
import { Box } from "@mui/material";
import theme from "@theme/index";

export const Main = styled(Box)`
  flex: 1 1 auto;
  padding-top: 56px;

  ${theme.breakpoints.up("md")} {
    padding-top: 128px;
  }
`;
