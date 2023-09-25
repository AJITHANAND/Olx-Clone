import { Modal } from "react-bootstrap";
import CloseButton from "../../assets/CloseButton";
import OlxLogo from "../../assets/OlxLogo";
import "./Modal.css";

function HeaderModal({ showModal, handleCloseModal, contentComponent }) {
  return (
    <Modal
      className="header-modal d-flex justify-content-center align-items-center"
      show={showModal}
      onHide={handleCloseModal}
    >
      <Modal.Body style={{ padding: "0.5rem",}}>
        <div className="d-flex justify-content-end align-items-center closeBtnDiv">
          <span data-aut-id="btnClose" onClick={handleCloseModal}>
            <CloseButton />
          </span>
        </div>
        <div className="w-100 text-center">
          <OlxLogo />
        </div>
        {contentComponent(handleCloseModal)  }
      </Modal.Body>
    </Modal>
  );
}

export default HeaderModal;
