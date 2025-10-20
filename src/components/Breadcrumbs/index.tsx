import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Arrow from "public/images/icons/down.svg";

import * as Styled from "./Breadcrumbs.styled";

const Breadcrumbs: React.FC = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation("navigation");

  return (
    <Styled.Breadcrumbs>
      <Styled.Link href="/">{t("home")}</Styled.Link>
      <Arrow />
      <Styled.Item>{t(`${pathname.split("/")[1]}`)}</Styled.Item>
    </Styled.Breadcrumbs>
  );
};

export default Breadcrumbs;
