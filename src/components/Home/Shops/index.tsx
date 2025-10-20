/* eslint-disable @next/next/no-img-element */
import type Store from "@entities/store";
import { useState } from "react";
import * as Styled from "./Shops.styled";
import { Pagination } from "swiper/modules";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BlockTitle from "@components/BlockTitle";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import Button from "@components/UI/buttons";
import ArrowLeft from "public/images/icons/ArrowLeft.svg";
import ArrowRight from "public/images/icons/ArrowRight.svg";
import Link from "@components/Link";

type ShopsSwiperProps = {
  shopsData: Store[];
};

const ShopsSwiper: React.FC<ShopsSwiperProps> = ({ shopsData }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation("shops");

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <BlockTitle title={t("shopsTitle")} />
        {!matches && (
          <>
            <Styled.CustomButtons>
              <Button
                size="medium"
                variant="subtle"
                style={{ padding: "16px" }}
                onClick={() => swiperRef.slidePrev()}
              >
                <ArrowLeft />
              </Button>
              {activeSlide} / {shopsData.length - 4}
              <Button
                size="medium"
                variant="subtle"
                style={{ padding: "16px" }}
                onClick={() => swiperRef.slideNext()}
              >
                <ArrowRight />
              </Button>
            </Styled.CustomButtons>
            <Link href="/shops">
              <Button size="medium" variant="subtle">
                {t("allShops")}
              </Button>
            </Link>
          </>
        )}
      </Styled.Content>

      <Swiper
        onSwiper={setSwiperRef}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1366: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={30}
        pagination={{
          type: "bullets",
        }}
        {...(matches && { modules: [Pagination] })}
        className="mySwiper"
        onSlideChange={(el) => setActiveSlide(el.activeIndex + 1)}
      >
        {shopsData.map((el) => (
          <SwiperSlide
            key={el.name}
            style={{
              padding: "40px 32px",
              background: "#fff",
              borderRadius: "10px",
            }}
          >
            <img
              src={el.logo}
              alt={el.name}
              height={56}
              style={{ maxWidth: "100%", objectFit: "contain" }}
            />
            <Styled.ShopName>{el.name}</Styled.ShopName>
            <Styled.ShopDescription>
              {t("descriptionStart")} {el.name} {t("descriptionEnd")}
            </Styled.ShopDescription>
            <Styled.DaysDelivery>
              {t("deliveryTerms")}:{" "}
              <span style={{ fontSize: "16px", fontWeight: 700 }}>
                {el.daysDelivery} {t("days")}
              </span>
            </Styled.DaysDelivery>
            <span style={{ fontSize: "14px" }}>
              {t("deliveryCommission")}:{" "}
              <span style={{ fontSize: "16px", fontWeight: 700 }}>
                {el.commission}%
              </span>
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Wrapper>
  );
};

export default ShopsSwiper;
