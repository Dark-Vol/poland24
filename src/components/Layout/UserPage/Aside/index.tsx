import type User from "@entities/user";
import Avatar from "@components/UI/Avatar";
import { Icon, MenuItem } from "@components/UI/Avatar/Avatar.styled";
import * as Styled from "./Aside.styled";
import Link from "@components/Link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { menuRoutes, adminMenuRoutes } from "@common/configs/menu";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

type AsideProps = {
  userData: User;
};

const Aside: React.FC<AsideProps> = ({ userData }) => {
  const { t } = useTranslation("header");
  const router = useRouter();

  const routes =
    getCookie("role") === "ADMIN" ? adminMenuRoutes : menuRoutes;

  return (
    <Styled.Aside>
      <Styled.Card>
        <Styled.User>
          <Avatar {...userData} />
        </Styled.User>
        <Styled.Divider />
        <Styled.Navigation>
          {routes.map(({ link, label, icon }) => (
            <Link key={link} href={link}>
              <MenuItem $isActive={link === router.asPath}>
                <Icon>
                  <Image src={icon} width={24} height={24} alt="order" />
                </Icon>
                {t(label)}
              </MenuItem>
            </Link>
          ))}
        </Styled.Navigation>
        <p
          style={{ margin: 0, padding: "8px", fontWeight: 500, lineHeight: 1 }}
        >
          {t("asideMessengers")}
        </p>
        <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
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
        </div>
      </Styled.Card>
    </Styled.Aside>
  );
};

export default Aside;
