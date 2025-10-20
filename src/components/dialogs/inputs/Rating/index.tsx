import Rating from "@components/UI/inputs/Rating";
import { RatingProps } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type DialogRatingProps = {
  control: Control<any>;
} & RatingProps;

const DialogRating: React.FC<DialogRatingProps> = ({
  name,
  control,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, name } }) => {
        return (
          <Rating value={+value} onChange={onChange} name={name} {...props} />
        );
      }}
    />
  );
};

export default DialogRating;
