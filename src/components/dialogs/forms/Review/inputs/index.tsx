import { useTranslation } from "next-i18next";

import DialogTextField from "@components/dialogs/inputs/TextField";
import DialogRating from "@components/dialogs/inputs/Rating";

import * as Styled from "./ReviewFormInputs.styled";

const ReviewFormInputs = ({ control, errors }) => {
  const { t } = useTranslation("reviews");

  return (
    <>
      <DialogTextField
        control={control}
        name="fullName"
        placeholder={t("userName")}
        error={errors.fullName}
        fullWidth
        required
      />
      <DialogTextField
        control={control}
        name="email"
        placeholder={t("userEmail")}
        error={errors.email}
        fullWidth
      />
      <DialogTextField
        control={control}
        name="text"
        placeholder={t("userReview")}
        error={errors.text}
        fullWidth
        textArea
        required
      />
      <DialogTextField
        control={control}
        name="store"
        placeholder={t("store")}
        error={errors.store}
        fullWidth
      />
      <Styled.Rating>
        {t("rating")} <DialogRating name="rating" control={control} />
      </Styled.Rating>
    </>
  );
};

export default ReviewFormInputs;
