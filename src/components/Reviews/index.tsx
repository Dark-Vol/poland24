import { format } from "date-fns";
import { Rating } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import type Review from "@entities/review";
import { FULL_DATE } from "@common/data/dateFormat";

import * as Styled from "./Reviews.styled";

type ReviewsProps = {
  reviewsData: Review[];
};

const Reviews: React.FC<ReviewsProps> = ({ reviewsData }) => {
  const router = useRouter();
  const { t } = useTranslation("reviews");
  const isUserPage = router.asPath.includes("profile");

  return (
    <Styled.ReviewsWrapper>
      <Styled.ReviewsList>
        {!reviewsData.length && (
          <Styled.EmptyList>{t("emptyList")}</Styled.EmptyList>
        )}
        {reviewsData.map(
          ({ id, fullName, createdDate, store, text, rating }) => (
            <Styled.ReviewItem key={id}>
              <Styled.ReviewInfo>
                {!isUserPage && <Styled.UserName>{fullName}</Styled.UserName>}
                <Styled.Date>{format(+createdDate, FULL_DATE)}</Styled.Date>
                {store && (
                  <Styled.Store>
                    <Styled.Date>{t("shoppingInStores")} </Styled.Date>
                    {store}
                  </Styled.Store>
                )}
              </Styled.ReviewInfo>
              <Rating size="large" readOnly value={rating} />
              <Styled.Description>{text}</Styled.Description>
            </Styled.ReviewItem>
          )
        )}
      </Styled.ReviewsList>
    </Styled.ReviewsWrapper>
  );
};

export default Reviews;
