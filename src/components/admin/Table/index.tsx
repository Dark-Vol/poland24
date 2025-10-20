import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTranslation } from "next-i18next";

import type { AdminTableProps, BaseEntity } from "src/types/table";

const AdminTable = <TEntity extends BaseEntity>({
  data,
  cellsConfig,
}: AdminTableProps<TEntity>): JSX.Element => {
  const { t } = useTranslation("admin");

  return (
    <TableContainer
      component={Paper}
      style={{
        borderRadius: "10px",
        marginTop: "16px",
        boxShadow: "none",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {cellsConfig.map((cell) => (
              <TableCell key={cell.id} style={{ fontWeight: 700 }}>
                {t(cell.id)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {cellsConfig.map((el) => (
                <TableCell
                  sx={{ padding: "4px 16px" }}
                  key={el.id}
                  component="th"
                  scope="row"
                >
                  {el.render(item) || "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
