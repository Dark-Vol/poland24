import { SwitchProps } from "@mui/material/Switch";
import Switch from "@components/UI/inputs/Switch";

import { Control, Controller } from "react-hook-form";

type DialogSwitchPropsProps = {
  control: Control<any>;
} & SwitchProps;

const DialogSwitch: React.FC<DialogSwitchPropsProps> = ({
  name,
  control,
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
          <Switch
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

export default DialogSwitch;
