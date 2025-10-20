import CheckBox, { type CheckBoxProps } from "@components/UI/inputs/Checkbox";

import { Control, Controller } from "react-hook-form";

type DialogCheckBoxProps = {
  control: Control<any>;
} & CheckBoxProps;

const DialogCheckBox: React.FC<DialogCheckBoxProps> = ({
  name,
  control,
  label,
  required,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      render={({ field: { onChange, value, name } }) => {
        return (
          <CheckBox
            label={label}
            value={value}
            checked={value}
            onChange={onChange}
            name={name}
            {...props}
          />
        );
      }}
    />
  );
};

export default DialogCheckBox;
