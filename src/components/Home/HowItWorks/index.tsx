import { useTranslation } from "next-i18next";

import InfoItem from "./InfoItem";
import BlockTitle from "@components/BlockTitle";
import Order from "@components/Layout/Header/Order";

import * as Styled from "./HowItWorks.styled";

const HowItWorks: React.FC = () => {
  const { t } = useTranslation("howItWorks");

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <BlockTitle title={t("title")} />
        <Styled.InfoList>
          {new Array(6).fill(null).map((_, index) => (
            <InfoItem
              key={index}
              index={`0${index + 1}`}
              title={t(`itemTitle${index + 1}`)}
              text={t(`itemDescription${index + 1}`)}
            />
          ))}
        </Styled.InfoList>
        <Styled.Order>
          <Order text={t("order")} />
        </Styled.Order>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default HowItWorks;
