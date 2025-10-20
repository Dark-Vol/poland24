import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from "@mui/material";
import { sendPasswordResetEmail } from "@firebase";

import theme from "@theme/index";
import { login } from "@gateways/signIn";
import Button from "@components/UI/buttons";
import { emailPattern } from "@common/data/pattern";
import CheckBox from "@components/UI/inputs/Checkbox";
import DialogTextField from "@components/dialogs/inputs/TextField";
import { ButtonText } from "@components/Modal/Authorization/Authorization.styled";

type FormProps = {
  onClose: () => void;
};

const Form: React.FC<FormProps> = ({ onClose }) => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation("common");

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm({
    defaultValues: { email: "", password: "", remember: false },
  });

  const email = watch("email");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      setError("email", { type: "custom", message: "Невірний формат" });
    }
    onSubmit(async (data) => {
      try {
        await login(data);
        onClose();
        enqueueSnackbar("Login!", { variant: "success" });
      } catch (e) {
        enqueueSnackbar(`${e.message}`, { variant: "error" });
      }
    })();
  };

  const handleResetPassword = async () => {
    if (!emailPattern.test(email)) {
      setError("email", { type: "custom", message: "Невірний формат" });
      return;
    }

    sendPasswordResetEmail(email)
      .then(() => {
        enqueueSnackbar(
          `Лист для оновлення пароля відправлено на пошту ${email}!`,
          {
            variant: "success",
          }
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        enqueueSnackbar(errorMessage, { variant: "error" });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <DialogTextField
          control={control}
          fullWidth
          name="email"
          {...(matches && { size: "large" })}
          type="email"
          placeholder={t("enterE-mail")}
          required
          error={errors.email}
        />
        <DialogTextField
          control={control}
          fullWidth
          name="password"
          {...(matches && { size: "large" })}
          type="password"
          placeholder={t("enterPassword")}
          required
          error={errors.password}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "16px 0px",
        }}
      >
        <CheckBox name="remember" label={t("rememberMe")} />
        <ButtonText onClick={handleResetPassword} type="button">
          {t("forgotYourPassword")}
        </ButtonText>
      </div>

      <Button size="medium" fullwidth type="submit">
        {t("logIn")}
      </Button>
    </form>
  );
};

export default Form;
