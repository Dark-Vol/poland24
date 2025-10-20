import { useTranslation } from "next-i18next";

import { navigation } from "@common/configs/navigation";
import Link from "@components/Link";

import * as Styled from "./Navigations.styled";

const Navigations: React.FC = () => {
  const { t } = useTranslation("navigation");

  return (
    <Styled.Container>
      <Styled.Title>{t("navigation").toLocaleUpperCase()}:</Styled.Title>
      <Styled.Column>
        {navigation
          .filter(({ link }) => link)
          .map(({ link }) => (
            <Styled.ColumnItem key={link}>
              <Link href={`/${link}`}>{t(link)}</Link>
            </Styled.ColumnItem>
          ))}
      </Styled.Column>
    </Styled.Container>
  );
};

export default Navigations;
