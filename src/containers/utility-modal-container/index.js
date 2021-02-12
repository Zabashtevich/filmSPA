import React, { useState } from "react";

import { UtilityModal } from "../../components";
import { useModalContext } from "../../context";

export default function UtilityModalContainer() {
  const [modalstate, modalinterface] = useModalContext();

  const { type, message, visible } = modalstate;
  const { closeModal, confirmModal, renameModal } = modalinterface;

  const [name, setName] = useState("");

  return (
    <UtilityModal visible={visible}>
      <UtilityModal.Container>
        <UtilityModal.Header type={type}>
          <UtilityModal.Close onClick={closeModal} />
        </UtilityModal.Header>
        <UtilityModal.Body>
          <UtilityModal.Wrapper></UtilityModal.Wrapper>
        </UtilityModal.Body>
      </UtilityModal.Container>
    </UtilityModal>
  );
}
