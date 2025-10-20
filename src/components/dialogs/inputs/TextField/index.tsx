import TextField, {
  type TextFieldProps,
} from "@components/UI/inputs/TextField";
import { Control, Controller } from "react-hook-form";

type DialogTextField = {
  control: Control<any>;
} & TextFieldProps;

const DialogTextField: React.FC<DialogTextField> = ({
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
          <TextField
            label={label}
            value={value}
            onChange={onChange}
            name={name}
            {...props}
          />
        );
      }}
    />
  );
};

export default DialogTextField;
