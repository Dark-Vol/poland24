import type { Dispatch, SetStateAction } from "react";
import type {
  Control,
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { useFieldArray } from "react-hook-form";

import type { OrderInitialValues } from "@common/data/defaultOrder";
import Article from "./Article";

type ArticlesProps = {
  control: Control<OrderInitialValues, object>;
  errors: FieldErrors<OrderInitialValues>;
  watch: UseFormWatch<OrderInitialValues>;
  setValue: UseFormSetValue<OrderInitialValues>;
  setTotalSum: Dispatch<SetStateAction<number>>;
};

const Articles: React.FC<ArticlesProps> = ({
  control,
  errors,
  watch,
  setValue,
  setTotalSum,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "articles",
  });

  return (
    <>
      {fields.map((field, index: number) => (
        <Article
          key={index}
          control={control}
          errors={errors}
          index={index}
          field={field}
          watch={watch}
          setValue={setValue}
          append={append}
          remove={remove}
          setTotalSum={setTotalSum}
        />
      ))}
    </>
  );
};

export default Articles;
