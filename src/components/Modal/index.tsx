import { Backdrop, Fade, Modal as MuiModal } from "@mui/material";

import Close from "public/images/icons/close-small.svg";
import Button from "@components/UI/buttons";

import * as Styled from "./Modal.styled";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <MuiModal
      sx={{ overflow: "scroll" }}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Styled.Container>
          {title && (
            <Styled.Head>
              {title}{" "}
              <Button
                size="medium"
                form="circle"
                style={{ flex: "none" }}
                onClick={onClose}
                variant="secondary"
              >
                <Close />
              </Button>
            </Styled.Head>
          )}
          <Styled.Content>{children}</Styled.Content>
        </Styled.Container>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
