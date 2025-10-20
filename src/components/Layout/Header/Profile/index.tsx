import { getCookie } from "cookies-next";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "@theme/index";
import Modal from "@components/Modal";
import Avatar from "@components/UI/Avatar";
import ExchangeRate from "../ExchangeRate";
import Button from "@components/UI/buttons";
import useModal from "@common/hooks/useModal";
import TemporaryDrawer from "@components/Drawer";
import User from "public/images/icons/white-user.svg";
import OrderForm from "@components/dialogs/forms/Order";
import IconButton from "@components/UI/buttons/IconButton";
import Authorization from "@components/Modal/Authorization";

const Profile = () => {
  const userId = getCookie("userId");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation("header");

  const Desktop = () => {
    const { open, handleOpen, handleClose } = useModal();
    return (
      <>
        {!!userData && !!userId ? (
          <Avatar
            firstName={userData.firstName}
            lastName={userData.lastName}
            photoUrl={userData.photoUrl}
          />
        ) : (
          <Button
            style={{ color: "#2D2D2D" }}
            size="medium"
            variant="text"
            onClick={handleOpen}
          >
            {t("signin")}
          </Button>
        )}
        <Modal isOpen={open} onClose={handleClose}>
          <Authorization onClose={handleClose} />
        </Modal>
      </>
    );
  };

  const Mobile = () => {
    const { open, handleOpen, handleClose } = useModal();
    const { t } = useTranslation("order");

    return (
      <>
        {matches && (
          <div style={{ display: "flex", gap: "6px" }}>
            <ExchangeRate />
            {userId ? (
              <Avatar
                firstName={userData.firstName}
                lastName={userData.lastName}
                photoUrl={userData.photoUrl}
              />
            ) : (
              <IconButton onClick={handleOpen}>
                <User style={{ height: "24px" }} />
              </IconButton>
            )}
            <TemporaryDrawer />
          </div>
        )}
        <Modal
          isOpen={open}
          onClose={handleClose}
          {...(userId && { title: t("makeOrder") })}
        >
          {!userId ? (
            <Authorization onClose={handleClose} />
          ) : (
            <OrderForm onClose={handleClose} />
          )}
        </Modal>
      </>
    );
  };

  return { Desktop, Mobile };
};

export default Profile;
