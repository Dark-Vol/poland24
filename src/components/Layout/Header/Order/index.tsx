import useModal from "@common/hooks/useModal";
import Button from "@components/UI/buttons";
import Modal from "@components/Modal";
import { getCookie } from "cookies-next";
import Authorization from "@components/Modal/Authorization";
import OrderForm from "@components/dialogs/forms/Order";
import type OrderType from "@entities/order";
import { useTranslation } from "next-i18next";

type OrderProps = {
  text: string;
  size?: "small" | "medium" | "large";
  defaultValues?: OrderType;
  disabled?: boolean;
  fullwidth?: boolean;
};

const Order: React.FC<OrderProps> = ({
  text,
  size = "large",
  defaultValues,
  ...props
}) => {
  const { open, handleOpen, handleClose } = useModal();
  const userId = getCookie("userId");
  const { t } = useTranslation("order");

  return (
    <>
      <Button onClick={handleOpen} size={size} {...props}>
        {text}
      </Button>
      <Modal
        {...(userId && { title: t("makeOrder") })}
        isOpen={open}
        onClose={handleClose}
      >
        {!userId ? (
          <Authorization onClose={handleClose} />
        ) : (
          <OrderForm onClose={handleClose} orderData={defaultValues} />
        )}
      </Modal>
    </>
  );
};

export default Order;
