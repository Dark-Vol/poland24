import type User from "@entities/user";

import * as Styled from "./Avatar.styled";
import { signOut } from "@firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { adminMenuRoutes, menuRoutes } from "@common/configs/menu";
import Link from "@components/Link";
import { getCookie } from "cookies-next";

type AvatarProps = { photoUrl?: string } & Partial<
  Pick<User, "firstName" | "lastName" | "email">
>;

const Avatar: React.FC<AvatarProps> = ({
  firstName,
  lastName,
  email,
  photoUrl,
}) => {
  const router = useRouter();
  const { t } = useTranslation("header");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace('/');
    } catch (error) {
      console.error("Помилка виходу:", error);
    }
  };

  const routes = getCookie("role") === "ADMIN" ? adminMenuRoutes : menuRoutes;

  return (
    <>
      <Styled.Avatar
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(e) => {
          email ? router.push("/profile") : handleClick(e);
        }}
      >
        {photoUrl ? (
          <Styled.PhotoCircle src={photoUrl} />
        ) : (
          <Styled.Circle>
            {firstName[0]}
            {lastName[0]}
          </Styled.Circle>
        )}

        <Styled.FullName>
          {lastName} {firstName}
          {email && <Styled.Email>{email}</Styled.Email>}
        </Styled.FullName>
      </Styled.Avatar>
      <Styled.Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Styled.MenuItem
          onClick={() => {
            handleClose();
            router.push("/profile");
          }}
        >
          <Styled.Icon>
            <Image
              src="/images/icons/settings_input_composite.svg"
              width={24}
              height={24}
              alt="setting"
            />
          </Styled.Icon>
          {t("editProfile")}
        </Styled.MenuItem>
        {routes.map(({ link, label, icon }) => (
          <Link key={link} href={link}>
            <Styled.MenuItem>
              <Styled.Icon>
                <Image src={icon} width={24} height={24} alt="order" />
              </Styled.Icon>
              {t(label)}
            </Styled.MenuItem>
          </Link>
        ))}
        <Styled.MenuItem
          onClick={handleLogout}
          sx={{
            justifyContent: "space-between",
            paddingLeft: "16px !important",
          }}
        >
          {t("logout")}{" "}
          <Image
            src="/images/icons/exit_to_app.svg"
            width={24}
            height={24}
            alt="logout"
          />
        </Styled.MenuItem>
      </Styled.Menu>
    </>
  );
};

export default Avatar;
