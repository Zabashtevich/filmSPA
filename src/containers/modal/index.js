import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { useModalContext } from "./../../context";
import { Modal } from "../../components";

export default function ModalContainer() {
  const [
    { visible, type, message },
    { closeModal, confirmModal },
  ] = useModalContext();

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, []);

  return (
    visible &&
    createPortal(
      <Modal visible={visible}>
        <Modal.Backdrop onClick={closeModal}>
          <Modal.Close />
        </Modal.Backdrop>
        <Modal.Window>
          <Modal.Header type={type}>
            {type === "error" && (
              <>
                <Modal.Title type={type}>ERROR</Modal.Title>
                <Modal.Error />
              </>
            )}
            {type === "confirm" && (
              <>
                <Modal.Title type={type}>CONFIRM</Modal.Title>
                <Modal.Warning />
              </>
            )}
          </Modal.Header>
          <Modal.Message>{message}</Modal.Message>
          {type === "error" && (
            <Modal.Wrapper>
              <Modal.Confirm type={type} onClick={closeModal}>
                OK
              </Modal.Confirm>
            </Modal.Wrapper>
          )}
          {type === "confirm" && (
            <Modal.Wrapper>
              <Modal.Decline type={type} onClick={closeModal}>
                DECLINE
              </Modal.Decline>
              <Modal.Confirm onClick={confirmModal} type={type}>
                CONFIRM
              </Modal.Confirm>
            </Modal.Wrapper>
          )}
        </Modal.Window>
      </Modal>,
      document.getElementById("root"),
    )
  );
}
