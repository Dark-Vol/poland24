import type { TableCellProps } from "@mui/material";

export type TableCell<TEntity = Record<string, unknown>> = {
  id: string;
  render: (entityData: TEntity) => React.ReactNode;
  cellProps?: TableCellProps;
};

export type BaseEntity = { id: string; [key: string]: unknown };

export type AdminTableProps<TEntity extends BaseEntity> = {
  cellsConfig: TableCell[];
  data: TEntity[];
};
