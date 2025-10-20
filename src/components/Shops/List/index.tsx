import Image from "next/image";
import { useTranslation } from "next-i18next";

import type Store from "@entities/store";

import * as Styled from "./List.styled";

type ShopsListProps = {
  shops: Store[];
};

const ShopsList: React.FC<ShopsListProps> = ({ shops }) => {
  const { t } = useTranslation("shops");

  return (
    <Styled.ShopsList>
      {shops.map((el) => (
        <Styled.ShopCard key={el.name}>
          <Image
            src={el.logo}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "60px",
              objectFit: "contain",
            }}
            priority
            alt={el.name}
          />
          <Styled.ShopName>{el.name}</Styled.ShopName>
          <Styled.ShopInfo>
            <Styled.ColumnText>
              <span>{t("deliveryTerms")}:</span>
              <Styled.BoldText>
                {el.daysDelivery} {t("days")}
              </Styled.BoldText>
            </Styled.ColumnText>
            <Styled.ColumnText>
              <span>{t("deliveryCommission")}:</span>
              <Styled.BoldText>{el.commission}%</Styled.BoldText>
            </Styled.ColumnText>
          </Styled.ShopInfo>
        </Styled.ShopCard>
      ))}
    </Styled.ShopsList>
  );
};

export default ShopsList;
