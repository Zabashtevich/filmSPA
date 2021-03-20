import React, { useEffect } from "react";

import { Modal } from "../../components";

export default function ModalContainer() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <Modal>
      <Modal.Close />
      <Modal.Container>
        <Modal.Header>
          <Modal.Title>ERROR</Modal.Title>
          <Modal.Error />
          <Modal.Confirm />
        </Modal.Header>
        <Modal.Message>Something gone wrong</Modal.Message>
        <Modal.Wrapper>
          <Modal.Decline>Cancel</Modal.Decline>
          <Modal.Accept>Accept</Modal.Accept>
        </Modal.Wrapper>
      </Modal.Container>
    </Modal>
  );
}
