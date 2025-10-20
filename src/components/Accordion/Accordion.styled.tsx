import styled from "styled-components";

import { styled as MuiStyled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import theme from "@theme/index";

export const Accordion = MuiStyled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: "none",
  background: "none",
  borderBottom: "1px solid #E0E0E0",
  "&:before": {
    display: "none",
  },
}));

export const AccordionSummary = styled(MuiAccordionSummary)`
  font-size: 24px;
  font-weight: 700;
  padding: 0;
  margin: 0;

  div {
    display: flex;
    justify-content: space-between;

    ${theme.breakpoints.down("md")} {
      align-items: flex-start;
    }
  }

  ${theme.breakpoints.down("md")} {
    font-size: 16px;
  }
`;

export const AccordionDetails = styled(MuiAccordionDetails)`
  padding: 0;
  margin: 0;
  font-size: 16px;
  padding-bottom: 12px;
`;
