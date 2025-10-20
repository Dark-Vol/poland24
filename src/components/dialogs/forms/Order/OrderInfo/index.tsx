import type { Control, FieldErrors } from "react-hook-form";
import { useTranslation } from "next-i18next";

import type { OrderInitialValues } from "@common/data/defaultOrder";
import Title from "@components/dialogs/Title";
import DialogCheckBox from "@components/dialogs/inputs/Checkbox";
import DialogTextField from "@components/dialogs/inputs/TextField";

import * as Styled from "./OrderInfo";

type OrderInfoProps = {
  control: Control<OrderInitialValues, object>;
  errors: FieldErrors<OrderInitialValues>;
};

const OrderInfo: React.FC<OrderInfoProps> = ({ control, errors }) => {
  const { t } = useTranslation("order");

  return (
    <>
      <Title title={t("customerData")} />
      <Styled.UserInfo>
        <DialogTextField
          control={control}
          name="fullName"
          placeholder={t("fullName")}
          fullWidth
          required
          error={errors.fullName}
        />
        <DialogTextField
          control={control}
          name="phone"
          placeholder={t("phoneNumber")}
          type="tel"
          fullWidth
          required
          error={errors.phone}
        />
        <DialogTextField
          control={control}
          name="email"
          placeholder="Email"
          type="email"
          fullWidth
          required
          error={errors.email}
        />
        <DialogTextField
          control={control}
          name="post"
          placeholder={t("city")}
          fullWidth
          required
          error={errors.post}
        />
        <DialogTextField
          control={control}
          name="reservedPost"
          placeholder={t("reservedPost")}
          fullWidth
        />
      </Styled.UserInfo>
      <Styled.License>
        <DialogTextField
          textArea
          control={control}
          name="comment"
          placeholder={t("comment")}
          fullWidth
        />
        <div
          style={{
            flex: "none",
            display: "flex",
            gap: "8px",
            flexDirection: "column",
          }}
        >
          <DialogCheckBox
            name="isCall"
            control={control}
            label={t("notCall")}
            style={{ fontSize: "12px" }}
          />
          <DialogCheckBox
            name="isLicense"
            control={control}
            label={t("terms")}
            style={{ fontSize: "12px" }}
          />

          <Styled.List>
            {new Array(6).fill(null).map((_, index) => (
              <Styled.ListItem key={index}>
                {t(`info${index + 1}`)}
              </Styled.ListItem>
            ))}
          </Styled.List>
        </div>
      </Styled.License>
    </>
  );
};

export default OrderInfo;
