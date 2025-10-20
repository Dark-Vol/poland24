import { useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { useTranslation } from "next-i18next";
import { CircularProgress } from "@mui/material";
import { collection, doc, setDoc, addDoc } from "@firebase";

import type Review from "@entities/review";
import ReviewFormInputs from "./inputs";
import Button from "@components/UI/buttons";
import BlockTitle from "@components/BlockTitle";
import { defaultReview } from "@common/data/defaultreview";

import * as Styled from "./Review.styled";

const ReviewForm: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const {
    control,
    handleSubmit: onSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultReview(),
  });

  const { t } = useTranslation("reviews");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(async ({ rating, ...data }: Review) => {
      const userId = getCookie("userId");
      const reviewsCollection = collection("reviews");

      try {
        setLoading(true);
        const reviewData = {
          ...(userId && { userId }),
          ...data,
          rating: +rating,
          createdDate: new Date().valueOf(),
        };
        await addDoc(reviewsCollection, reviewData);
        router.replace(router.asPath);
        reset(defaultReview());
        enqueueSnackbar("Review added!", { variant: "success" });
      } catch (e) {
        enqueueSnackbar(e.message, { variant: "error" });
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <BlockTitle title={t("saveReview")} />
      <Styled.Form onSubmit={handleSubmit}>
        <ReviewFormInputs control={control} errors={errors} />
        <Button type="submit" size="medium">
          {isLoading ? (
            <CircularProgress color="inherit" size={17} />
          ) : (
            t("send")
          )}
        </Button>
      </Styled.Form>
    </div>
  );
};

export default ReviewForm;
