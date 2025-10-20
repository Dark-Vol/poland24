import { format } from "date-fns";
import { useTranslation } from "next-i18next";

import { FULL_DATE } from "@common/data/dateFormat";
import Order, { Status as StatusEnum } from "@entities/order";
import { ORDER_STATUS_LABELS_COLORS } from "@common/configs/colors";

import * as Styled from "./Status.styled";

type StatusProps = Partial<
  Pick<Order, "orderNumber" | "createdDate" | "status">
>;

const Status: React.FC<StatusProps> = ({
  orderNumber,
  createdDate,
  status,
}) => {
  const { t } = useTranslation("order");

  return (
    <div style={{ display: "flex" }}>
      <Styled.Divider $color={ORDER_STATUS_LABELS_COLORS[status]} />
      <Styled.Status>
        {orderNumber && (
          <Styled.Text>
            №{orderNumber} {t("from")} {format(+createdDate, FULL_DATE)}
          </Styled.Text>
        )}
        <Styled.BoldText>{t(StatusEnum[status])}</Styled.BoldText>
      </Styled.Status>
    </div>
  );
};

export default Status;
