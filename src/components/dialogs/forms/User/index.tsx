import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { useTranslation } from "next-i18next";
import { doc, setDoc, updateProfile } from "@firebase";

import type User from "@entities/user";
import Inputs from "./Inputs";
import Button from "@components/UI/buttons";
import Save from "public/images/icons/save.svg";
import { defaultUser } from "@common/data/defaultUser";
import { filterEmptyParam } from "@common/utils/filterEmpryParams";
import { setUserInLocalStorage } from "@common/utils/setUserInLocalStorage";

import * as Styled from "./Inputs/Inputs.styled";
import { CircularProgress } from "@mui/material";

const UserForm: React.FC<{ userData: User }> = ({ userData }) => {
  const { t } = useTranslation("profile");
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit: onSubmit,
  } = useForm({ defaultValues: defaultUser(userData) });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(async (data: User) => {
      try {
        setLoading(true);
        const userRef = doc(`users/${data.id}`);
        await setDoc(userRef, {
          ...filterEmptyParam(data),
        }).then(async () => {
          await updateProfile({
            displayName: `${data.firstName} ${data.lastName}`,
          });
          setUserInLocalStorage(data);
          router.replace(router.asPath);
          enqueueSnackbar("Save!", { variant: "success" });
        });
      } catch (error) {
        enqueueSnackbar(error.message, { variant: "error" });
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Inputs control={control} errors={errors} />
      <Button
        type="submit"
        size="medium"
        style={{ margin: "auto", marginTop: "16px" }}
      >
        {isLoading ? <CircularProgress color="inherit" size={24} /> : <Save />}
        {t("save")}
      </Button>
    </Styled.Form>
  );
};

export default UserForm;
