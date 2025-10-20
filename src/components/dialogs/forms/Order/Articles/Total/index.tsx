import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from "@mui/material";
import type {
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormWatch,
} from "react-hook-form";

import type { OrderInitialValues } from "@common/data/defaultOrder";
import type { Article } from "@entities/order";
import { calculateTotalCost } from "@common/utils/calculateTotalCost";
import { getInitialtArticle } from "@common/data/defaultArticle";
import Remove from "public/images/icons/remove.svg";
import Add from "public/images/icons/add.svg";
import Button from "@components/UI/buttons";
import theme from "@theme/index";

import * as Styled from "./Total.styled";

type TotalProps = {
  watch: UseFormWatch<OrderInitialValues>;
  index: number;
  rate: number;
  append: UseFieldArrayAppend<OrderInitialValues, "articles">;
  remove: UseFieldArrayRemove;
  setTotalSum: Dispatch<SetStateAction<number>>;
};

const Total: React.FC<TotalProps> = ({
  watch,
  index,
  rate,
  append,
  remove,
  setTotalSum,
}) => {
  const { t } = useTranslation("order");
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [total, setTotal] = useState(0);

  const price = +watch(`articles[${index}].price` as any);
  const currency = watch(`articles[${index}].currency` as any) as string;
  const deliveryPrice = +watch(`articles[${index}].deliveryPrice` as any);
  const isUsed = watch(`articles[${index}].isUsed` as any);
  const count = +watch(`articles[${index}].count` as any);
  const articles = watch("articles") as Article[];

  useEffect(() => {
    const totalArticle = calculateTotalCost(
      +price,
      +deliveryPrice,
      isUsed,
      +count
    );

    const totalSum = articles.reduce((acc, val) => {
      acc += calculateTotalCost(
        +val.price,
        +val.deliveryPrice,
        val.isUsed,
        +val.count
      );
      return acc;
    }, 0);

    setTotal(totalArticle);
    setTotalSum(+totalSum * rate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, deliveryPrice, isUsed, rate, count, watch("articles").length]);

  return (
    <>
      <Styled.Total>
        {t("positionPrice")}
        <span style={{ fontSize: "24px" }}>₴ {(total * rate).toFixed(2)}</span>
        <span style={{ fontSize: "24px" }}>
          {currency} {total.toFixed(2)}
        </span>
      </Styled.Total>
      {index + 1 === watch("articles").length ? (
        <Button
          {...(matches && { size: "medium" })}
          form="circle"
          type="button"
          variant="green"
          onClick={() => append(getInitialtArticle())}
          style={{
            marginTop: "auto",
            flex: "none",
            ...(matches && { gridRowStart: 2 }),
          }}
        >
          <Add />
        </Button>
      ) : (
        <Button
          {...(matches && { size: "medium" })}
          onClick={() => remove(index + 1)}
          form="circle"
          type="button"
          style={{
            marginTop: "auto",
            flex: "none",
            ...(matches && { gridRowStart: 2 }),
          }}
        >
          <Remove />
        </Button>
      )}
    </>
  );
};

export default Total;
