import { useTranslation } from "next-i18next";

import Location from "public/images/icons/location.svg";
import Mail from "public/images/icons/mail_outline.svg";
import Phone from "public/images/icons/phone.svg";
import Clock from "public/images/icons/time.svg";
import Link from "@components/Link";

import * as Styled from "./Contacts.styled";

const Contacts: React.FC = () => {
  const { t } = useTranslation("contacts");

  return (
    <Styled.Contacts>
      <Styled.BlockTitle>{t("contacts").toUpperCase()}:</Styled.BlockTitle>
      <Styled.ContactsColums>
        <Styled.ContactColum>
          <Styled.ContactItem>
            <Styled.Icon>
              <Location />
            </Styled.Icon>
            <span>{t("location")}</span>
          </Styled.ContactItem>
          <Styled.ContactItem>
            <Styled.Icon>
              <Clock />
            </Styled.Icon>
            <span>{t("workTime")} 10:00 - 19:00</span>
          </Styled.ContactItem>
        </Styled.ContactColum>
        <Styled.ContactColum>
          <Styled.PhoneContactItem>
            <Styled.Icon>
              <Phone />
            </Styled.Icon>
            <Link href="tel: +38 (093) 496 58 00">+38 (093) 496 58 00</Link>
          </Styled.PhoneContactItem>
          <Styled.MailContactItem>
            <Styled.Icon>
              <Mail />
            </Styled.Icon>
            <Link href="mailto: info@poland24.com.ua">
              info@poland24.com.ua
            </Link>
          </Styled.MailContactItem>
        </Styled.ContactColum>
      </Styled.ContactsColums>
    </Styled.Contacts>
  );
};

export default Contacts;
