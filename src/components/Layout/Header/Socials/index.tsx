import Image from "next/image";
import { useTranslation } from "next-i18next";

import Link from "@components/Link";

import * as Styled from "./Socials.styled";

const Socials: React.FC = () => {
  const { t } = useTranslation("header");

  return (
    <Styled.Socials>
      <Styled.Messangers>
        {t("messengers")}
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
      </Styled.Messangers>
      <Styled.Mail>
        <Image
          alt="mail"
          width={17}
          height={17}
          src="/images/icons/mail_outline_grey.svg"
        />
        info@poland24.com.ua
      </Styled.Mail>
    </Styled.Socials>
  );
};

export default Socials;
