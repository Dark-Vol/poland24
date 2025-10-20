import { useTranslation } from "next-i18next";

import type Order from "@entities/order";
import OrderTitle from "./Title";
import OrderDescription from "./Description";
import Accordion from "@components/Accordion";
import { calculateTotalCost } from "@common/utils/calculateTotalCost";

import * as Styled from "./Orders.styled";

type OrdersProps = {
  ordersData: Order[];
};

const Orders: React.FC<OrdersProps> = ({ ordersData }) => {
  const { t } = useTranslation("order");

  return (
    <Styled.Wrapper>
      {!ordersData.length && (
        <Styled.NoOrders>{t("emptyList")}</Styled.NoOrders>
      )}
      <Styled.OrdersList>
        {ordersData.map((order) => {
          const total = order.articles
            .reduce(
              (
                acc,
                { price, count, rate, deliveryPrice, currency, isUsed }
              ) => {
                const sum = calculateTotalCost(
                  +price,
                  +deliveryPrice,
                  isUsed,
                  count
                );
                return (acc += sum * rate);
              },
              0
            )
            .toFixed(2);

          return (
            //@ts-ignore
            <Accordion
              key={order.id}
              title={<OrderTitle orderData={order} total={total} />}
              sx={{ padding: "0 16px" }}
            >
              {<OrderDescription orderData={order} total={+total} />}
            </Accordion>
          );
        })}
      </Styled.OrdersList>
    </Styled.Wrapper>
  );
};

export default Orders;
