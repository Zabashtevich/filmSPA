import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { Modal } from "../../components";
import { useModalContext } from "../../context";

export default function ModalContainer() {
  const [
    { visible, type, message, list },
    { closeModal, confirmModal },
  ] = useModalContext();

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  return (
    visible &&
    createPortal(
      <Modal>
        <Modal.Overlay onClick={closeModal}>
          <Modal.Close />
        </Modal.Overlay>
        <Modal.Window>
          <Modal.Header type={type}>
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
      document.getElementById("root"),
    )
  );
}
