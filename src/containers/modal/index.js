import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { Modal } from "../../components";
import { useModalContext } from "../../context";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

export default function ModalContainer() {
  const [{ visible, type, message, list }, { closeModal, confirmModal }] =
    useModalContext();

  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);

    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => modalRoot.removeChild(el);
  }, [visible]);

  return (
    visible &&
    createPortal(
      <Modal data-testid="modal-container">
        <Modal.Overlay onClick={closeModal} data-testid="modal-overlay">
          <Modal.Close data-testid="modal-close" />
        </Modal.Overlay>
        <Modal.Window>
          <Modal.Header type={type} data-testid="modal-header">
            <Modal.Icon />
          </Modal.Header>
          <Modal.Body>
            <Modal.Title>{type.toUpperCase() + " !"} </Modal.Title>
            {message && <Modal.Message>{message}</Modal.Message>}

            {list && (
              <Modal.List>
                {list.map((item) => (
                  <Modal.Item key={item}>{item}</Modal.Item>
                ))}
              </Modal.List>
            )}
            {type === "confirm" && (
              <Modal.Wrapper>
                <Modal.Cancel onClick={closeModal}>CANCEL</Modal.Cancel>
                <Modal.Confirm onClick={confirmModal}>CONFIRM</Modal.Confirm>
              </Modal.Wrapper>
            )}
            {type === "error" && (
              <Modal.Wrapper>
                <Modal.Cancel onClick={closeModal} type={type}>
                  CLOSE
                </Modal.Cancel>
              </Modal.Wrapper>
            )}
          </Modal.Body>
        </Modal.Window>
      </Modal>,
      modalRoot,
    )
  );
}
