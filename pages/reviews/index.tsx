import { useTranslation } from "next-i18next";
import { GetServerSideProps, NextPage } from "next";
import { collection, getDocs } from "@firebase";

import type Review from "@entities/review";
import Reviews from "@components/Reviews";
import PageLayout from "@components/Layout/Page";
import ReviewForm from "@components/dialogs/forms/Review";

type ReviewsPageProps = {
  reviewsData: Review[];
};

const ReviewsPage: NextPage<ReviewsPageProps> = ({ reviewsData }) => {
  const { t } = useTranslation("navigation");

  return (
    <PageLayout title={t("reviews")}>
      <Reviews reviewsData={reviewsData} />
      <ReviewForm />
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const reviewsRef = collection("reviews");
  const reviewsSnapshot = await getDocs(reviewsRef);

  const reviewsData: Review[] = [];

  reviewsSnapshot.forEach((doc) => {
    reviewsData.push(doc.data() as Review);
  });

  return {
    props: {
      reviewsData,
    },
  };
};

export default ReviewsPage;
