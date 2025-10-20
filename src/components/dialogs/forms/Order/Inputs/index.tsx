import { useState } from "react";
import { useTranslation } from "next-i18next";
import type {
  Control,
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import type { OrderInitialValues } from "@common/data/defaultOrder";
import DialogCheckBox from "@components/dialogs/inputs/Checkbox";
import Title from "@components/dialogs/Title";
import OrderInfo from "../OrderInfo";
import Articles from "../Articles";

import * as Styled from "./Inputs.styled";

type OrderFormInputsProps = {
  control: Control<OrderInitialValues, object>;
  errors: FieldErrors<OrderInitialValues>;
  watch: UseFormWatch<OrderInitialValues>;
  setValue: UseFormSetValue<OrderInitialValues>;
};

const OrderFormInputs: React.FC<OrderFormInputsProps> = ({
  control,
  errors,
  watch,
  setValue,
}) => {
  const [totalSum, setTotalSum] = useState<number>(0);
  const { t } = useTranslation("order");

  return (
    <>
      <Title title={t("orderCount")} />
      <Articles
        control={control}
        errors={errors}
        watch={watch}
        setValue={setValue}
        setTotalSum={setTotalSum}
      />
      <Styled.Total>
        <Styled.BoldText>{t("deliveryThroughoutUkraine")}</Styled.BoldText>
        <div>
          <Styled.BoldText>{t("feedbackChannel")}</Styled.BoldText>
          <Styled.Checkboxes>
            <DialogCheckBox
              control={control}
              name="isEmail"
              label={t("post")}
            />
            <DialogCheckBox
              control={control}
              name="isViber"
              label={t("viber")}
            />
            <DialogCheckBox
              control={control}
              name="isTelegram"
              label={t("telegram")}
            />
          </Styled.Checkboxes>
        </div>
        <div style={{ display: "flex", gap: "8px", fontWeight: 500 }}>
          <Styled.BoldText>
            {t("approximately")}, ₴
            <span
              style={{ fontSize: "24px", fontWeight: 700, display: "block" }}
            >
              {totalSum.toFixed(2)}
            </span>
          </Styled.BoldText>
        </div>
      </Styled.Total>
      <OrderInfo control={control} errors={errors} />
    </>
  );
};

export default OrderFormInputs;
