import Image from "next/image";
import Link from "@components/Link";
import { useTranslation } from "next-i18next";

import * as Styled from "./Contacts.styled";

const Contacts: React.FC = () => {
  const { t } = useTranslation("contacts");

  return (
    <Styled.Contacts>
      <Styled.Column>
        <Styled.ColumnTitle>{t("messengers")}</Styled.ColumnTitle>
        <Styled.Icons>
          <Link href="#">
            <Image
              alt="viber"
              width={32}
              height={32}
              src="/images/icons/socials/014-viber.svg"
            />
          </Link>
          <Link href="#">
            <Image
              alt="telegram"
              width={32}
              height={32}
              src="/images/icons/socials/017-telegram.svg"
            />
          </Link>
        </Styled.Icons>
      </Styled.Column>
      <Styled.Column>
        <Styled.ColumnTitle>{t("adress")}</Styled.ColumnTitle>
        <Styled.ColumnInfo>
          22-600 Томашів
          <br />
          Любельський, вул.
          <br />
          Рольніча 2 Польща
        </Styled.ColumnInfo>
      </Styled.Column>
      <Styled.Column>
        <Styled.ColumnTitle>{t("workTime")}</Styled.ColumnTitle>
        <Styled.ColumnInfo>
          Пн-Пт 9:00 - 17:00
          <br />
          Сб 9:00 - 15:00
          <br />
          {t("weekend")}
        </Styled.ColumnInfo>
      </Styled.Column>

      <Styled.Column>
        <Styled.ColumnTitle>{t("email")}</Styled.ColumnTitle>
        <Styled.ColumnInfo>
          <Link href="mailto: info@poland24.com.ua">info@poland24.com.ua</Link>
        </Styled.ColumnInfo>
        <Styled.ColumnTitle>{t("phone")}</Styled.ColumnTitle>
        <Styled.ColumnInfo>
          <Link href="tel: +38 (093) 496 58 00">+38 (093) 496 58 00</Link>
        </Styled.ColumnInfo>
      </Styled.Column>
    </Styled.Contacts>
  );
};

export default Contacts;
