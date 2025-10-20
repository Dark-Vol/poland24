import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { useTranslation } from "next-i18next";

import { createOrder } from "@gateways/order/save";
import { editOrder } from "@gateways/order/edit";
import Button from "@components/UI/buttons";
import OrderFormInputs from "./Inputs";
import { getInitialValue, OrderInitialValues } from "@common/data/defaultOrder";
import type Order from "@entities/order";

type OrderFormProps = {
  onClose?: () => void;
  orderData?: Order;
};

const OrderForm: React.FC<OrderFormProps> = ({ onClose, orderData }) => {
  const { t } = useTranslation("order");
  const router = useRouter();
  const {
    formState: { errors },
    control,
    watch,
    setValue,
    handleSubmit: onSubmit,
  } = useForm<OrderInitialValues>({
    defaultValues: orderData ? getInitialValue(orderData) : getInitialValue(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(async (data) => {
      try {
        if (!orderData) {
          await createOrder(data);
          enqueueSnackbar("Order added!", { variant: "success" });
        } else {
          await editOrder(data);
          enqueueSnackbar("Order edit!", { variant: "success" });
        }
        onClose();
        router.replace(router.asPath);
      } catch (e) {
        enqueueSnackbar(e.message, { variant: "error" });
      }
    })();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
      <OrderFormInputs
        control={control}
        errors={errors}
        watch={watch}
        setValue={setValue}
      />
      <Button style={{ margin: "auto", marginTop: "16px" }} type="submit">
        {t("send")}
      </Button>
    </form>
  );
};

export default OrderForm;
