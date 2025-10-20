import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from "@mui/material";

import theme from "@theme/index";
import BlockTitle from "@components/BlockTitle";
import { countryDeliveryConfig } from "@common/configs/countryDelivery";

import * as Styled from "./DeliveryCountry.styled";

const DeliveryCountry: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("poland");
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation("country");

  return (
    <Styled.DeliveryCountryWrapper>
      <Styled.Counties>
        <BlockTitle title="Мы доставляем из" />
        <Styled.CountiesList>
          {countryDeliveryConfig.map(({ name, comission }) => (
            <Styled.Country
              $isSelectedCountry={name === selectedCountry}
              key={name}
              onClick={() => setSelectedCountry(name)}
            >
              <span>{t(name)}</span>
              <span style={{ fontWeight: 400 }}>{comission}%</span>
            </Styled.Country>
          ))}
        </Styled.CountiesList>
      </Styled.Counties>
      {matches && (
        <Styled.MapWrapper>
          <Styled.Map $selectedCountry={selectedCountry} />
        </Styled.MapWrapper>
      )}
    </Styled.DeliveryCountryWrapper>
  );
};

export default DeliveryCountry;
