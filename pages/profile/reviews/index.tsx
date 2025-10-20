import { useTranslation } from "next-i18next";
import { GetServerSideProps, NextPage } from "next";
import { collection, getDocs, query, where } from "@firebase";

import type Review from "@entities/review";
import Error from "@components/Error";
import Reviews from "@components/Reviews";
import BlockTitle from "@components/BlockTitle";
import ReviewForm from "@components/dialogs/forms/Review";
import { UserReviews } from "@components/Reviews/Reviews.styled";

type ReviewsPageProps = { reviewsData: Review[]; errorCode: number };

const ReviewsPage: NextPage<ReviewsPageProps> = ({
  reviewsData,
  errorCode,
}) => {
  const { t } = useTranslation("header");

  return (
    <>
      {errorCode ? (
        <Error statusCode={errorCode} />
      ) : (
        <UserReviews>
          <div style={{ width: "100%" }}>
            <BlockTitle title={t("myReviews")} />
            <Reviews reviewsData={reviewsData} />
          </div>
          <ReviewForm />
        </UserReviews>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.req.cookies.userId as string;

  if (!userId) return { props: { errorCode: 401 } };

  try {
    const reviewsRef = collection("reviews");
    const q = query(reviewsRef, where("userId", "==", userId));
    const reviewsSnapshot = await getDocs(q);

    const reviewsData: Review[] = [];

    reviewsSnapshot.forEach((doc) => {
      reviewsData.push(doc.data() as Review);
    });

    return {
      props: {
        reviewsData,
      },
    };
  } catch (error) {
    return {
      props: { errorCode: error?.status },
    };
  }
};

export default ReviewsPage;
