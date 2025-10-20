import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";

import type Order from "@entities/order";
import theme from "@theme/index";
import Status from "@components/UI/Status";

import * as Styled from "./Title.styled";

type OrderTitleProps = {
  orderData: Order;
  total: string;
};

const OrderTitle: React.FC<OrderTitleProps> = ({ orderData, total }) => {
  const { articles, status, createdDate, orderNumber } = orderData;
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation("order");

  const totalBlock = (
    <Styled.ColumnText style={{ marginLeft: "auto" }}>
      <Styled.Text>{t("orderSum")}</Styled.Text>
      <Styled.BoldText>{total}</Styled.BoldText>
    </Styled.ColumnText>
  );

  return (
    <Styled.Content>
      <Styled.Info>
        <Status
          createdDate={createdDate}
          orderNumber={orderNumber}
          status={status}
        />
        {matches && totalBlock}
      </Styled.Info>
      <Styled.OrderName href={articles[0].link}>
        {articles[0].name}
      </Styled.OrderName>
      {!matches && totalBlock}
    </Styled.Content>
  );
};

export default OrderTitle;
