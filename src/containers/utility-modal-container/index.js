import React, { useState } from "react";

import { UtilityModal } from "../../components";
import { ConfirmHeader, ConfirmButtons } from "./items/confirm";
import { ErrorHeader, ErrorButtons } from "./items/error";
import { UtilityHeader, UtilityInput, UtilityButtons } from "./items/utility";
import { useModalContext } from "./../../context";

export default function UtilityModalContainer() {
  const [name, setname] = useState("");

  const [modalstate, modalinterface] = useModalContext();
  const { type, message, visible } = modalstate;
  const { closeModal, confirmModal } = modalinterface;

  return (
    <UtilityModal visible={visible}>
      <UtilityModal.Container>
        <UtilityModal.Header type={type}>
          {type === "confirm" && <ConfirmHeader />}
          {type === "error" && <ErrorHeader />}
          {type === "utility" && <UtilityHeader />}
          <UtilityModal.Close onClick={closeModal} />
        </UtilityModal.Header>
        <UtilityModal.Body>
          <UtilityModal.Message>{message}</UtilityModal.Message>
          {type === "utility" && <UtilityInput setname={setname} name={name} />}
          <UtilityModal.Wrapper>
            {type === "error" && (
              <ErrorButtons type={type} closeModal={closeModal} />
            )}
            {type === "confirm " && (
              <ConfirmButtons
                type={type}
                closeModal={closeModal}
                confirmModal={confirmModal}
              />
            )}
            {type === "utility " && (
              <UtilityButtons
                type={type}
                name={name}
                setname={setname}
                closeModal={closeModal}
                confirmModal={confirmModal}
              />
            )}
          </UtilityModal.Wrapper>
        </UtilityModal.Body>
      </UtilityModal.Container>
    </UtilityModal>
  );
}
