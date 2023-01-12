import styles from "./Modal.module.css";

interface BackDropProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Backdrop = ({ onClose, children }: BackDropProps) => {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      {children}
    </div>
  );
};

interface ModalOverlayProps {
  children: React.ReactNode;
}

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <>
      <Backdrop onClose={onClose} />
      <ModalOverlay>{children}</ModalOverlay>
    </>
  );
};

export default Modal;
