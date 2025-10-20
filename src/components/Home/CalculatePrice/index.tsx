import { useState } from "react";
import { useMediaQuery } from "@mui/material";

import Button from "@components/UI/buttons";
import theme from "@theme/index";

import * as Styled from "./CalculatePrice.styled";
import { useForm } from "react-hook-form";
import DialogTextField from "@components/dialogs/inputs/TextField";
import DialogCheckBox from "@components/dialogs/inputs/Checkbox";
import { calculateTotalCost } from "@common/utils/calculateTotalCost";
import { useTranslation } from "next-i18next";

const CalculatePrice: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"€" | "zł">("zł");
  const [total, setTotal] = useState<number>(0);

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { price: "", delivery: "", vat: false },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(({ price, delivery }: { price: number; delivery: number }) => {
      const result = calculateTotalCost(+price, +delivery, false, 1);
      setTotal(result);
    })();
  };

  const { pln, eur } = JSON.parse(localStorage.getItem("rate"));

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const deliveryOfcurrency = activeTab === "zł" ? 250 : 50;
  const { t } = useTranslation("home");

  return (
    <Styled.Wrapper id="calculator">
      <Styled.Container>
        <Styled.Description>
          <Styled.Title>{t("calculatorTitle")}</Styled.Title>
          <Styled.DescriptionItem>
            {t("calculatorListItem1")} {deliveryOfcurrency}
            {activeTab}: 16,38%
          </Styled.DescriptionItem>
          <Styled.DescriptionItem>
            {t("calculatorListItem2")} {deliveryOfcurrency}
            {activeTab} (VAT/ без VAT): {activeTab === "zł" ? 250 : 10}
            {activeTab}.
          </Styled.DescriptionItem>
          <Styled.DescriptionItem>
            {t("calculatorListItem3")} {deliveryOfcurrency}
            {activeTab}: 15%
          </Styled.DescriptionItem>
        </Styled.Description>
        <Styled.Calculator>
          <Styled.Tabs $activeTab={activeTab}>
            <Styled.Tab
              onClick={() => {
                setTotal(null);
                setActiveTab("zł");
              }}
            >
              zł
            </Styled.Tab>
            <Styled.Tab
              onClick={() => {
                setTotal(null);
                setActiveTab("€");
              }}
            >
              €
            </Styled.Tab>
          </Styled.Tabs>
          <Styled.Form onSubmit={handleSubmit}>
            <DialogTextField
              control={control}
              fullWidth
              name="price"
              type="number"
              placeholder={`${t("calculatorPrice")}*, ${activeTab}`}
              {...(!matches && { size: "large" })}
              required
              error={errors.price}
            />
            <DialogTextField
              control={control}
              fullWidth
              name="delivery"
              type="number"
              placeholder={`${t("calculatorDelivery")}*, ${activeTab}`}
              {...(!matches && { size: "large" })}
              error={errors.delivery}
              required
            />
            <DialogCheckBox
              control={control}
              name="vat"
              label={t("vat")}
              style={{ color: "#fff" }}
            />
            <Button
              variant="secondary"
              {...(matches && { fullwidth: true, size: "medium" })}
            >
              {t("send")}
            </Button>
          </Styled.Form>
          <Styled.Divider />
          {!!+total && (
            <Styled.Sum>
              Сумма,
              <div style={{ display: "flex", alignItems: "center" }}>
                <Styled.CurrencySum>
                  ₴
                  <Styled.Total>
                    {(total * (activeTab === "zł" ? pln : eur)).toFixed(2)}
                  </Styled.Total>
                </Styled.CurrencySum>
                <Styled.CurrencySum>
                  {activeTab}
                  <Styled.Total>{total.toFixed(2)}</Styled.Total>
                </Styled.CurrencySum>
              </div>
            </Styled.Sum>
          )}
        </Styled.Calculator>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default CalculatePrice;
