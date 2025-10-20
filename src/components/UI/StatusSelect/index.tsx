import Select from "@components/UI/inputs/Select";

type StatusSelect = {
  data: Record<string, unknown>;
  background: string;
  locale: string;
  options: object;
};

const StatusSelect: React.FC<StatusSelect> = ({
  data,
  background,
  locale,
  options,
}) => {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      <div
        style={{
          minWidth: "3px",
          background: background,
        }}
      />
      <Select options={options} locale={locale} data={data} />
    </div>
  );
};

export default StatusSelect;
