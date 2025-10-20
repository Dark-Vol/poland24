import React from "react";
import { format } from "date-fns";

import type { TableCell } from "src/types/table";
import type Request from "@entities/request";
import { FULL_DATE } from "@common/data/dateFormat";
import Link from "@components/Link";
import StatusSelect from "@components/UI/StatusSelect";
import { Status } from "@entities/request";
import { REQUEST_STATUS_LABELS_COLORS } from "@common/configs/colors";

export const requestsConfig: TableCell<Request>[] = [
  {
    id: "createdDate",
    render: ({ createdDate }) => format(createdDate, FULL_DATE),
  },
  {
    id: "user",
    render: ({ name, email }) => (
      <>
        <span style={{ fontWeight: 700 }}>{name}</span>
        <br />
        <Link href={`mailto: ${email}`}>{email}</Link>
      </>
    ),
  },
  {
    id: "phoneNumber",
    render: ({ phoneNumber }) =>
      phoneNumber && <Link href={`tel: ${phoneNumber}`}>{phoneNumber}</Link>,
  },
  {
    id: "articles",
    render: ({ articles }) => {
      if (articles.length > 1) {
        return (
          <div
            style={{
              maxWidth: "200px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {articles.map(({ articleName }) => (
              <React.Fragment key={articleName}>
                <Link href={articleName}>{articleName}</Link>
                <br />
              </React.Fragment>
            ))}
          </div>
        );
      } else {
        return (
          <div
            style={{
              maxWidth: "200px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <Link href={articles[0].articleName}>
              {articles[0].articleName}
            </Link>
          </div>
        );
      }
    },
  },
  {
    id: "comment",
    render: ({ comment }) => comment && comment,
  },
  {
    id: "status",
    render: (request) => (
      <StatusSelect
        data={request}
        background={REQUEST_STATUS_LABELS_COLORS[request.status]}
        options={Status}
        locale={"request"}
      />
    ),
  },
];
