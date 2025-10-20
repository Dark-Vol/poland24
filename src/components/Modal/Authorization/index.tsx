import { useState } from "react";
import { useTranslation } from "next-i18next";

import Login from "./Login";
import Register from "./Register";
import Button from "@components/UI/buttons";
import Close from "public/images/icons/close-small.svg";

import * as Styled from "./Authorization.styled";

type AuthorizationProps = {
  onClose: () => void;
};

const Authorization: React.FC<AuthorizationProps> = ({ onClose }) => {
  const [modalType, setModalType] = useState("login");
  const isLoginType = modalType === "login";
  const { t } = useTranslation("common");

  return (
    <Styled.Container>
      <Styled.Head>
        {isLoginType ? t("entry") : t("sign-up")}
        <Button
          size="medium"
          form="circle"
          style={{ flex: "none" }}
          onClick={onClose}
          variant="secondary"
        >
          <Close />
        </Button>
      </Styled.Head>
      <Styled.Content>
        {isLoginType ? (
          <Login
            onClose={onClose}
            onChangeType={() => setModalType("register")}
          />
        ) : (
          <Register
            onClose={onClose}
            onChangeType={() => setModalType("login")}
          />
        )}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Authorization;
