import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "next-i18next";
import type {
  Control,
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import type { OrderInitialValues } from "@common/data/defaultOrder";
import DialogTextField from "@components/dialogs/inputs/TextField";
import DialogCheckBox from "@components/dialogs/inputs/Checkbox";
import DialogSwitch from "@components/dialogs/inputs/Switch";
import Total from "../Total";

import * as Styled from "./Article.styled";

type ArticleProps = {
  control: Control<OrderInitialValues, object>;
  errors: FieldErrors<OrderInitialValues>;
  index: number;
  field: FieldArrayWithId<OrderInitialValues, "articles", "id">;
  watch: UseFormWatch<OrderInitialValues>;
  setValue: UseFormSetValue<OrderInitialValues>;
  append: UseFieldArrayAppend<OrderInitialValues, "articles">;
  remove: UseFieldArrayRemove;
  setTotalSum: Dispatch<SetStateAction<number>>;
};

const Article: React.FC<ArticleProps> = ({
  control,
  errors,
  index,
  watch,
  setValue,
  append,
  remove,
  setTotalSum,
}) => {
  const { t } = useTranslation("order");
  const { pln, eur } = JSON.parse(localStorage.getItem("rate"));

  const currency = watch(`articles[${index}].currency` as any) as string;
  const rate = currency === "€" ? pln : eur;

  const toggleCurrency = () => {
    const changedArticles = watch("articles").map((article, articleIndex) => {
      if (articleIndex !== index) return article;
      else {
        return {
          ...article,
          currency: currency === "€" ? "zł" : "€",
          rate,
        };
      }
    });
    setValue("articles", changedArticles);
  };

  return (
    <Styled.Article>
      <Styled.Price>
        <DialogTextField
          control={control}
          name={`articles[${index}].link`}
          label={`Товар ${index + 1}`}
          placeholder={t("articleLink")}
          fullWidth
          required
          error={errors.articles && errors.articles[index]?.link}
        />
        <DialogTextField
          control={control}
          name={`articles[${index}].count`}
          label={t("articleCount")}
          type="counter"
          fullWidth
          required
          error={errors.articles && errors.articles[index]?.count}
        />
        <DialogTextField
          control={control}
          name={`articles[${index}].price`}
          label={`${t("articlePrice")}, ${currency}`}
          type="number"
          fullWidth
          required
          error={errors.articles && errors.articles[index]?.price}
        />
        <DialogTextField
          control={control}
          name={`articles[${index}].deliveryPrice`}
          label={`${t("delivery")}, ${currency}`}
          type="number"
          fullWidth
          required
          error={errors.articles && errors.articles[index]?.deliveryPrice}
        />
        <Styled.Currency>
          <span>
            {t("priceIn")} {currency}
          </span>
          <DialogSwitch
            control={control}
            name={`articles[${index}].currency`}
            checked={currency === "zł"}
            onChange={toggleCurrency}
            style={{ margin: "auto 0 !important" }}
          />
        </Styled.Currency>
      </Styled.Price>
      <DialogTextField
        style={{ gridColumn: "1 / span 5" }}
        control={control}
        name={`articles[${index}].name`}
        placeholder={t("productName")}
        fullWidth
        required
        error={errors.articles && errors.articles[index]?.name}
      />
      <DialogCheckBox
        control={control}
        name={`articles[${index}].isUsed`}
        label={t("usedArticle")}
      />
      <Styled.Total>
        <DialogTextField
          control={control}
          name={`articles[${index}].description`}
          label={t("articleComment")}
          placeholder={t("commentDescription")}
          textArea
          fullWidth
          style={{ height: "100%" }}
          required
          error={errors.articles && errors.articles[index]?.description}
        />
        <Total
          watch={watch}
          index={index}
          rate={+watch("articles")[index].rate}
          append={append}
          remove={remove}
          setTotalSum={setTotalSum}
        />
      </Styled.Total>
    </Styled.Article>
  );
};

export default Article;
