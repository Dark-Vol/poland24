import { format } from "date-fns";

import type { TableCell } from "src/types/table";
import type User from "@entities/user";
import Image from "next/image";
import Link from "@components/Link";
import Button from "@components/UI/buttons";
import { FULL_DATE } from "@common/data/dateFormat";
import ClientsActions from "./Actions";

export const clientsConfig: TableCell<User>[] = [
  {
    id: "createdDate",
    render: ({ createdDate }) => createdDate && format(createdDate, FULL_DATE),
  },
  {
    id: "user",
    render: ({ firstName, lastName, email }) => (
      <>
        <span style={{ fontWeight: 700 }}>
          {firstName} {lastName}
        </span>
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
    id: "city",
    render: ({ city }) => city,
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
    id: " ",
    render: (userData) => <ClientsActions {...userData} />,
  },
];
