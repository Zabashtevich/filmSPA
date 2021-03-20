import React from "react";

import { Modal } from "../../components";

export default function ModalContainer() {
  return (
    <Modal>
      <Modal.Close />
      <Modal.Container>
        <Modal.Header>
          <Modal.Title></Modal.Title>
          <Modal.Error />
          <Modal.Confirm />
        </Modal.Header>
        <Modal.Message></Modal.Message>
        <Modal.Wrapper>
          <Modal.Decline></Modal.Decline>
          <Modal.Confirm></Modal.Confirm>
        </Modal.Wrapper>
      </Modal.Container>
    </Modal>
  );
}
