import React from "react";

function Modal() {
  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <button className="modalCloseButton" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
