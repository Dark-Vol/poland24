import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useTranslation } from "next-i18next";
import { CircularProgress, useMediaQuery } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import { collection, doc, setDoc, addDoc } from "@firebase";
import theme from "@theme/index";
import RequestFormInputs from "./inputs";
import Button from "@components/UI/buttons";
import { defaultRequest } from "@common/data/defaultRequest";
import { filterEmptyParam } from "@common/utils/filterEmpryParams";
import type Request from "@entities/request";

import * as Styled from "./RequestForm.styled";

const RequestForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation("request");

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: defaultRequest,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "articles",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(async (data: Request) => {
      setLoading(true);
      try {
        const requestsCollection = collection("requests");
        const requestData = {
          createdDate: new Date().valueOf(),
          ...data,
          status: "new",
        };
        await addDoc(requestsCollection, requestData);
        enqueueSnackbar("Request added!", { variant: "success" });
        reset(defaultRequest);
      } catch (e) {
        enqueueSnackbar(e.message, { variant: "error" });
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <Styled.FormContainer onSubmit={handleSubmit}>
      <RequestFormInputs
        fields={fields}
        remove={remove}
        errors={errors}
        control={control}
      />
      <Styled.ButtonContainer>
        <Button
          variant="secondary"
          type="button"
          {...(matches && { size: "medium" })}
          onClick={() => append({ articleName: "", comment: "" })}
        >
          {t("addArticle")}
        </Button>
        <Button {...(matches && { size: "medium" })}>
          {loading ? <CircularProgress color="inherit" size={24} /> : t("send")}
        </Button>
      </Styled.ButtonContainer>
    </Styled.FormContainer>
  );
};

export default RequestForm;
