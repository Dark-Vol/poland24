import { useRouter } from "next/router";
import type User from "@entities/user";
import Image from "next/image";
import Button from "@components/UI/buttons";
import useModal from "@common/hooks/useModal";
import Modal from "@components/Modal";
import { deleteDoc, doc } from "@firebase";
import { enqueueSnackbar } from "notistack";

const ClientsActions: React.FC<User> = ({ firstName, lastName, id }) => {
  const { open, handleOpen, handleClose } = useModal();
  const router = useRouter();

  const handleDeleteUser = async () => {
    try {
      await deleteDoc(doc(`users/${id}`));
      enqueueSnackbar(`User ${firstName} ${lastName} deleted!`, {
        variant: "success",
      });
      handleClose();
      router.replace(router.asPath);
    } catch (e) {
      enqueueSnackbar(e.message, { variant: "error" });
    }
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <div style={{ textAlign: "center" }}>
          Видалити користувача <br />
          <b>
            {firstName} {lastName}
          </b>
          ?
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              justifyContent: "space-around",
              marginTop: "8px",
            }}
          >
            <Button onClick={handleDeleteUser} variant="subtle" size="small">
              Так
            </Button>
            <Button onClick={handleClose} variant="subtle" size="small">
              Ні
            </Button>
          </div>
        </div>
      </Modal>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Button size="small" form="circle" variant="secondary">
          <Image
            src="/images/icons/edit-two.svg"
            height={14}
            width={14}
            alt="delete user"
          />
        </Button>
        <Button
          size="small"
          form="circle"
          variant="secondary"
          onClick={handleOpen}
        >
          <Image
            src="/images/icons/delete.svg"
            height={14}
            width={14}
            alt="delete user"
          />
        </Button>
      </div>
    </>
  );
};

export default ClientsActions;
