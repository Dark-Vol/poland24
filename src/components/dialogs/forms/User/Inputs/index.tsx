import Title from "@components/dialogs/Title";
import DialogTextField from "@components/dialogs/inputs/TextField";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import * as Styled from "./Inputs.styled";

type InputsProps = {
  control: any;
  errors: any;
};

const Inputs: React.FC<InputsProps> = ({ control, errors }) => {
  const { t } = useTranslation("profile");

  return (
    <>
      <Title title={t("userData")} />
      <Styled.Inputs>
        <DialogTextField
          control={control}
          name="firstName"
          placeholder={t("firstName")}
          error={errors.firstName}
          fullWidth
          required
        />
        <DialogTextField
          control={control}
          name="lastName"
          placeholder={t("lastName")}
          error={errors.lastName}
          fullWidth
          required
        />
        <DialogTextField
          control={control}
          name="email"
          placeholder={t("email")}
          error={errors.email}
          fullWidth
          required
        />
        <DialogTextField
          control={control}
          name="phone"
          placeholder={t("phone")}
          error={errors.phone}
          type="tel"
          fullWidth
          required
        />
        <DialogTextField
          control={control}
          name="city"
          placeholder={t("city")}
          error={errors.city}
          fullWidth
        />
        <DialogTextField
          control={control}
          name="post"
          placeholder={t("post")}
          error={errors.post}
          fullWidth
        />
      </Styled.Inputs>
      <Title title={t("messengers")} />
      <Styled.Messengers>
        <Styled.Messanger>
          <Image
            alt="viber"
            width={32}
            height={32}
            src="/images/icons/socials/014-viber.svg"
          />
          Viber
        </Styled.Messanger>
        <DialogTextField
          control={control}
          name="viber"
          placeholder={t("userName")}
          error={errors.viber}
          fullWidth
        />
        <Styled.Messanger>
          <Image
            alt="telegram"
            width={32}
            height={32}
            src="/images/icons/socials/017-telegram.svg"
          />
          Telegram
        </Styled.Messanger>
        <DialogTextField
          control={control}
          name="telegram"
          placeholder={t("userName")}
          error={errors.telegram}
          fullWidth
        />
      </Styled.Messengers>
    </>
  );
};

export default Inputs;
