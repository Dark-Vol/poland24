import { FULL_DATE } from "@common/data/dateFormat";
import Link from "@components/Link";
import type Order from "@entities/order";
import { format } from "date-fns";
import type { TableCell } from "src/types/table";
import { Status } from "@entities/order";
import { ORDER_STATUS_LABELS_COLORS } from "@common/configs/colors";
import StatusSelect from "@components/UI/StatusSelect";

export const ordersConfig: TableCell<Order>[] = [
  {
    id: "createdDate",
    render: ({ createdDate }) => createdDate && format(createdDate, FULL_DATE),
  },
  {
    id: "orderNumber",
    render: ({ orderNumber }) => orderNumber,
  },
  {
    id: "user",
    render: ({ fullName, email }) => (
      <>
        <span style={{ fontWeight: 700 }}>{fullName}</span>
        <br />
        <Link href={`mailto: ${email}`}>{email}</Link>
      </>
    ),
  },
  {
    id: "phoneNumber",
    render: ({ phone }) => phone && <Link href={`tel: ${phone}`}>{phone}</Link>,
  },
  {
    id: "post",
    render: ({ post }) => post,
  },
  {
    id: "comment",
    render: ({ comment }) => comment && comment,
  },
  {
    id: "status",
    render: (order) => {
      return (
        <StatusSelect
          data={order}
          background={ORDER_STATUS_LABELS_COLORS[order.status]}
          options={Status}
          locale={"order"}
        />
      );
    },
  },
];
