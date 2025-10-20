import { useTranslation } from "next-i18next";

import BlockTitle from "@components/BlockTitle";
import RequestForm from "@components/dialogs/forms/Request";

import * as Styled from "./Request.styled";

const Request: React.FC = () => {
  const { t } = useTranslation("request");

  return (
    <Styled.RequestPageWrapper>
      <Styled.Content>
        <Styled.Head>
          <BlockTitle title={t("title")} />
          <Styled.Description>{t("description")}</Styled.Description>
        </Styled.Head>
        <Styled.RequestImage
          alt="request"
          src="/images/icons/request.png"
          width={0}
          height={0}
          sizes="100vw"
          priority
        />
      </Styled.Content>
      <RequestForm />
    </Styled.RequestPageWrapper>
  );
};

export default Request;
