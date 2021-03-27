import React from "react";
import { createPortal } from "react-dom";

import { useModalContext } from "./../../context";
import { Modal } from "../../components";

export default function ModalContainer() {
  const [{ visible, callback }, { closeModal }] = useModalContext();
  const type = "error";
  const message = "Something gone wrong";
  return (
    true &&
    createPortal(
      <Modal>
        <Modal.Backdrop onClick={closeModal}>
          <Modal.Close />
        </Modal.Backdrop>
        <Modal.Window>
          <Modal.Header type={"error"}>
            {type === "error" && (
              <>
                <Modal.Title type={"error"}>ERROR</Modal.Title>
                <Modal.Error />
              </>
            )}
            {type === "confirm" && (
              <>
                <Modal.Title type={"error"}>CONFIRM</Modal.Title>
                <Modal.Warning />
              </>
            )}
          </Modal.Header>
          <Modal.Message>{message}</Modal.Message>
          {type === "error" && (
            <Modal.Wrapper>
              <Modal.Confirm>OK</Modal.Confirm>
            </Modal.Wrapper>
          )}
          {type === "confirm" && (
            <Modal.Wrapper>
              <Modal.Decline type={"error"}></Modal.Decline>
              <Modal.Confirm onClick={callback} type={"error"}></Modal.Confirm>
            </Modal.Wrapper>
          )}
        </Modal.Window>
      </Modal>,
      document.getElementById("root"),
    )
  );
}
