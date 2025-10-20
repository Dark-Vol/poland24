import * as React from "react";
import { Drawer } from "@mui/material";
import { useTranslation } from "next-i18next";

import Menu from "public/images/icons/menu.svg";
import Order from "@components/Layout/Header/Order";
import Logo from "public/images/logo/dark/logo.svg";
import Close from "public/images/icons/close-dark.svg";
import LocaleSwitcher from "@components/LocaleSwitcher";
import IconButton from "@components/UI/buttons/IconButton";
import Navigation from "@components/Layout/Header/Navigation";

import * as Styled from "./Drawer.styled";
import Link from "@components/Link";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  const toggleDrawer = () => setState(!state);
  const { t } = useTranslation("header");

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={state} onClose={toggleDrawer}>
        <Styled.Container>
          <Styled.Head>
            <Logo />
            <Order text={t("toOrder")} size="small" />
            <Close onClick={toggleDrawer} />
          </Styled.Head>
          <Styled.Info>
            <Link href="mailto: info@poland24.com.ua">
              info@poland24.com.ua
            </Link>
            <LocaleSwitcher />
          </Styled.Info>
          <Styled.Divider />
          <Navigation onCloseDrawer={toggleDrawer} />
        </Styled.Container>
      </Drawer>
    </>
  );
}
