import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';

interface IModalWindowProps {
  text: string;
  isError: boolean;
  showModalWindow: boolean;
  onHideModalWindow: (hideWindow: boolean) => void;
}

function ModalWindow({
  text,
  isError,
  showModalWindow,
  onHideModalWindow,
}: IModalWindowProps) {
  const classNameModal = isError ? 'bg-danger' : '';
  const title = isError ? 'Помилка' : '';
  return (
    <Modal
      size="sm"
      show={showModalWindow}
      onHide={() => onHideModalWindow(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton className={classNameModal}>
        <Modal.Title id="example-modal-sizes-title-sm">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={classNameModal}>{text}</Modal.Body>
    </Modal>
  );
}

export default ModalWindow;
