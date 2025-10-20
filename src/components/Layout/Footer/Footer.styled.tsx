import theme from "@theme/index";
import styled from "styled-components";

export const Footer = styled.footer`
  background: #1e2122;
`;

export const Container = styled.div`
  color: rgba(255, 255, 255, 0.8);
  padding: 16px;
  display: flex;
  flex-direction: column;
  font-family: Rubik;
  justify-content: center;

  ${theme.breakpoints.up("md")} {
    max-width: 1290px;
    margin: auto;
    padding: 64px 0px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: auto;
`;

export const BlockTitle = styled.h5`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-top: 16px;
  color: #fff;
`;

export const ContactsColums = styled.div`
  display: flex;
  margin-top: 11px;
`;

export const ContactColum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

export const Socials = styled.div`
  display: flex;
  gap: 24px;
  margin: auto;
  margin-top: 17px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;

  ${theme.breakpoints.up("md")} {
    margin: 0px;
    flex-direction: column;
    gap: 8px;
  }
`;

export const SocialsIcons = styled.div`
  display: flex;
  gap: 8px;
`;

export const Divider = styled.div`
  background: #e0e0e0;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 16px;
`;

export const Copyright = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 400;

  ${theme.breakpoints.up("md")} {
    max-width: 260px;
    text-align: left;
    margin-top: 32px;
  }
`;
