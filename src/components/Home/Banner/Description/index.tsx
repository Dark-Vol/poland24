import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "@theme/index";
import { bannerPromoConfig } from "@common/configs/banner";

import * as Styled from "./Description.styled";

const Description: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const { t } = useTranslation("banner");

  return (
    <Styled.Container>
      {bannerPromoConfig.map(
        ({ desktopSpacing, mobileSpacing, index, logo, background }) => (
          <Styled.Item
            key={index}
            $right={matches ? mobileSpacing : desktopSpacing}
            $background={background}
            style={{ zIndex: index }}
          >
            <Styled.Head>
              <Styled.Title>{t(`promoItemTitle${index}`)}</Styled.Title>
              <Styled.Info>{t(`promoItemDescription${index}`)}</Styled.Info>
            </Styled.Head>
            <Styled.Logo>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src={logo}
                priority
                alt="icon"
              />
            </Styled.Logo>
          </Styled.Item>
        )
      )}
    </Styled.Container>
  );
};

export default Description;
