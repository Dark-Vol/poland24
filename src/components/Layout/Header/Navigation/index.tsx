import Help from "public/images/icons/help_outline.svg";
import { useTranslation } from "next-i18next";

import Button from "@components/UI/buttons";
import Link from "@components/Link";
import { navigation } from "@common/configs/navigation";
import Order from "../Order";

import * as Styled from "./Navigation.styled";

type NavigationProps = {
  onCloseDrawer?: () => void;
  isHiddenHeader?: boolean;
};

const Navigation: React.FC<NavigationProps> = ({
  onCloseDrawer,
  isHiddenHeader,
}) => {
  const { t } = useTranslation("navigation");
  const { t: tHeader } = useTranslation("header");

  return (
    <Styled.Navigation>
      {navigation.map(({ link, hash }, index) => (
        <Link
          {...(onCloseDrawer && { onClick: onCloseDrawer })}
          onClick={onCloseDrawer}
          key={index}
          href={{
            pathname: link ? `/${link}` : "/",
            ...(hash && { hash }),
          }}
        >
          <Styled.NavLink>{t(link || hash)}</Styled.NavLink>
        </Link>
      ))}
      {isHiddenHeader && <Order text={tHeader("toOrder")} size="small" />}
      <Link href="/request" {...(onCloseDrawer && { onClick: onCloseDrawer })}>
        <Button size="small" variant="green">
          <Help />
          {t("request")}
        </Button>
      </Link>
    </Styled.Navigation>
  );
};

export default Navigation;
