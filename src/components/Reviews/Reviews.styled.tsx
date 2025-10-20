import UserPageLayout from "@components/Layout/UserPage";
import theme from "@theme/index";
import styled from "styled-components";

export const ReviewsWrapper = styled.section`
  height: 100%;
`;

export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  height: 100%;
`;

export const ReviewItem = styled.div`
  padding: 24px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 24px 33px -9px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${theme.breakpoints.down("md")} {
    gap: 8px;
  }
`;

export const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`;

export const Date = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const Store = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const UserReviews = styled(UserPageLayout)`
  gap: 13px;

  ${theme.breakpoints.up("md")} {
    padding-right: 0;
    display: flex;
  }
`;

export const EmptyList = styled.span`
  margin: auto;
  font-weight: 700;
  font-size: 18px;
`;
