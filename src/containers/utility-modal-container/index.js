import React, { useState } from "react";

import { UtilityModal } from "../../components";
import { ConfirmHeader, ConfirmButtons } from "./items/confirm";
import { ErrorHeader, ErrorButtons } from "./items/error";
import { UtilityHeader, UtilityInput, UtilityButtons } from "./items/utility";
import { useModalContext } from "./../../context";

export default function UtilityModalContainer() {
  const [name, setname] = useState("");

  const [modalstate, modalinterface] = useModalContext();
  const { type, title, message, visible } = modalstate;
  const { closeModal, acceptModal } = modalinterface;

  return (
    <UtilityModal visible={visible}>
      <UtilityModal.Container>
        <UtilityModal.Header type={type}>
          {visible && type === "confirm" && (
            <ConfirmHeader>{title}</ConfirmHeader>
          )}
          {visible && type === "error" && <ErrorHeader>{title}</ErrorHeader>}
          {visible && type === "utility" && (
            <UtilityHeader>{title}</UtilityHeader>
          )}
          <UtilityModal.Close onClick={closeModal} />
        </UtilityModal.Header>
        <UtilityModal.Body>
          <UtilityModal.Message>{message}</UtilityModal.Message>
          {visible && type === "utility" && (
            <UtilityInput setname={setname} name={name} />
          )}
          <UtilityModal.Wrapper>
            {visible && type === "error" && (
              <ErrorButtons type={type} closeModal={closeModal} />
            )}
            {visible && type === "confirm " && (
              <ConfirmButtons
                type={type}
                closeModal={closeModal}
                acceptModal={acceptModal}
              />
            )}
            {visible && type === "utility " && (
              <UtilityButtons
                type={type}
                name={name}
                setname={setname}
                closeModal={closeModal}
              />
            )}
          </UtilityModal.Wrapper>
        </UtilityModal.Body>
      </UtilityModal.Container>
    </UtilityModal>
  );
}
