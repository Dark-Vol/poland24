import Order from "@entities/order";
import { useTranslation } from "next-i18next";
import { OrderName } from "../Title/Title.styled";

import * as Styled from "./Table.styled";

type OrderTableProps = {
  orderData: Order;
};

const OrderTable: React.FC<OrderTableProps> = ({ orderData }) => {
  const { t } = useTranslation("order");

  return (
    <Styled.Table>
      <Styled.Head>
        <span></span>
        <span>{t("price")}</span>
        <span>{t("count")}</span>
        <span>{t("sum")}</span>
      </Styled.Head>
      <Styled.Body>
        {orderData.articles.map((el) => (
          <Styled.Row key={el.link}>
            <OrderName href={el.link}>{el.name}</OrderName>
            <Styled.Cell>
              {el.price} {el.currency}
            </Styled.Cell>
            <Styled.Cell>{el.count}</Styled.Cell>
            <Styled.Cell style={{ fontWeight: 500 }}>
              {el.count * el.price} {el.currency}
            </Styled.Cell>
          </Styled.Row>
        ))}
      </Styled.Body>
    </Styled.Table>
  );
};

export default OrderTable;
