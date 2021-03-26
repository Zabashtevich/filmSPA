import React from "react";
import { Modal } from "../../components";

export default function ModalContainer() {
  return (
    <Modal>
      <Modal.Backdrop />
      <Modal.Window>
        <Modal.Header>
          <Modal.Title></Modal.Title>
          <Modal.Error />
          <Modal.Warning />
        </Modal.Header>
        <Modal.Message></Modal.Message>
        <Modal.Wrapper>
          <Modal.Decline></Modal.Decline>
          <Modal.Confirm></Modal.Confirm>
        </Modal.Wrapper>
      </Modal.Window>
    </Modal>
  );
}
