import theme from "@theme/index";
import styled from "styled-components";

export const Contacts = styled.div``;

export const BlockTitle = styled.h5`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-top: 16px;
  color: #fff;

  ${theme.breakpoints.up("md")} {
    text-align: left;
    margin-top: 0px;
  }
`;

export const ContactsColums = styled.div`
  display: flex;
  margin-top: 8px;

  ${theme.breakpoints.up("md")} {
    flex-direction: column;
    gap: 8px;
  }
`;

export const ContactColum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${theme.breakpoints.up("md")} {
    gap: 8px;
  }
`;

export const ContactItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: initial;
`;

export const PhoneContactItem = styled(ContactItem)`
  font-size: 14px;
  font-weight: 700;
`;
export const MailContactItem = styled(ContactItem)`
  color: #9d7b6d;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
