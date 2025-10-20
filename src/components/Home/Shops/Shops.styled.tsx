import theme from "@theme/index";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 65px 0;
  margin: auto;

  .swiper-pagination-bullet-active {
    background-color: #ea0c0c;
  }

  ${theme.breakpoints.down("lg")} {
    padding: 32px 16px;
  }
`;

export const Content = styled.div`
  max-width: 1290px;
  margin: auto;
  margin-bottom: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${theme.breakpoints.down("md")} {
    margin-bottom: 24px;
  }
`;

export const ShopName = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
  display: block;
`;

export const ShopDescription = styled.p`
  margin-top: 16px;
  font-weight: 400;
  font-size: 16px;
`;

export const DaysDelivery = styled.span`
  font-size: 14px;
  display: block;
  margin-top: 16px;
`;

export const CustomButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  font-size: 20px;
  font-weight: 700;
  min-width: 220px;
  justify-content: space-between;
`;
