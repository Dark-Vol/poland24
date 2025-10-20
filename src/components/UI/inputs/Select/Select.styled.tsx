import styled from "styled-components";
import MuiSelect from "@mui/material/Select";

export const Select = styled(MuiSelect)`
  input {
    padding: 0;
  }

  &::before {
    display: none;
  }

  &::after {
    display: none;
  }
  div {
    background: #fff !important;
  }
`;
