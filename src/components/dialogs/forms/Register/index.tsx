import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { CircularProgress, useMediaQuery } from "@mui/material";

import theme from "@theme/index";
import Button from "@components/UI/buttons";
import useCreateUser from "@common/hooks/useCreateUser";
import DialogCheckBox from "@components/dialogs/inputs/Checkbox";
import DialogTextField from "@components/dialogs/inputs/TextField";

const Form: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation("common");
  const { saveUser, isLoading } = useCreateUser();

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      repeatPassword: "",
      license: true,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (watch("password") !== watch("repeatPassword")) {
      setError("repeatPassword", {
        type: "custom",
        message: "Паролі не співпадають",
      });
      return;
    }

    onSubmit(async ({ license, repeatPassword, ...data }: any) => {
      if (!watch("license")) {
        setError("license", { type: "custom", message: "custom message" });
        return;
      }

      await saveUser(data);
    })();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "24px",
          marginBottom: "16px",
        }}
      >
        <DialogTextField
          control={control}
          fullWidth
          name="fullName"
          {...(matches && { size: "large" })}
          type="text"
          placeholder={t("fullName")}
          error={errors.fullName}
          required
        />
        <DialogTextField
          control={control}
          fullWidth
          name="email"
          {...(matches && { size: "large" })}
          type="email"
          placeholder={t("eMail")}
          error={errors.email}
          required
        />
        <DialogTextField
          control={control}
          fullWidth
          name="phone"
          {...(matches && { size: "large" })}
          type="tel"
          placeholder={t("phoneNumber")}
          error={errors.phone}
          required
        />
        <DialogTextField
          control={control}
          fullWidth
          name="password"
          {...(matches && { size: "large" })}
          type="password"
          placeholder={t("password")}
          error={errors.password}
          required
        />
        <DialogTextField
          control={control}
          fullWidth
          name="repeatPassword"
          {...(matches && { size: "large" })}
          type="password"
          placeholder={t("confirmPassword")}
          error={errors.repeatPassword}
          required
        />
        <DialogCheckBox
          control={control}
          name="license"
          label={t("agreeToTermsOfService")}
        />
      </div>
      <Button size="medium" fullwidth>
        {isLoading ? <CircularProgress color="inherit" /> : t("register")}
      </Button>
    </form>
  );
};

export default Form;
