import { useTranslation } from "next-i18next";
import { useMediaQuery } from "@mui/material";

import Instagram from "public/images/icons/socials/instagram.svg";
import VK from "public/images/icons/socials/vk.svg";
import Navigations from "./Navigations";
import Logo from "@components/UI/Logo";
import Contacts from "./Contacts";
import theme from "@theme/index";

import * as Styled from "./Footer.styled";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Styled.Footer>
      <Styled.Container>
        {!matches && (
          <div style={{ margin: "auto" }}>
            <Logo size="medium" variant="dark" />
          </div>
        )}
        <Contacts />
        <Styled.Socials>
          <span>{t("inSocials")}:</span>
          <Styled.SocialsIcons>
            <VK />
            <Instagram />
          </Styled.SocialsIcons>
        </Styled.Socials>
        <Navigations />
        <Styled.Divider />
        <div>
          {matches && <Logo size="medium" variant="dark" />}
          <Styled.Copyright>
            Copyright © 2022 Poland24.com.ua. {t("copyright")}.
          </Styled.Copyright>
        </div>
      </Styled.Container>
    </Styled.Footer>
  );
};

export default Footer;
