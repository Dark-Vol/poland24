import Image from "next/image";
import { useState } from "react";
import { AccordionProps as AccordionPropsType } from "@mui/material";

import * as Styled from "./Accordion.styled";

type AccordionProps = {
  title: React.ReactNode | any;
  children: React.ReactNode;
} & AccordionPropsType;

const Accordion: React.FC<AccordionProps> = ({ title, children, ...props }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Styled.Accordion expanded={expanded} onChange={handleChange} {...props}>
      <Styled.AccordionSummary>
        {title}
        <Image
          alt="icon"
          width={25}
          height={25}
          style={{ width: "auto", height: "auto" }}
          src={
            expanded
              ? "/images/icons/remove_black.svg"
              : "/images/icons/add_black.svg"
          }
        />
      </Styled.AccordionSummary>
      <Styled.AccordionDetails>{children}</Styled.AccordionDetails>
    </Styled.Accordion>
  );
};

export default Accordion;
