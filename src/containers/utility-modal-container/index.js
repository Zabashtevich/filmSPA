import React, { useState, useEffect } from "react";

import { UtilityModal } from "../../components";
import { useAccountContext } from "../../context";
import { ErrorButtons, ErrorHeader } from "./items/error";
import { ConfirmButtons, ConfirmHeader } from "./items/confirm";
import { DeleteButtons, DeleteHeader } from "./items/remove";

export default function UtilityModalContainer() {
  const [name, setName] = useState("");

  const [accountstate, accountinterface] = useAccountContext();
  const { removeModal, confirmModal, errorModal } = accountstate;
  const { hideRemoveModal, acceptModal } = accountinterface;

  return (
    <UtilityModal visible={visible}>
      <UtilityModal.Container>
        <UtilityModal.Header type={subtype}>
          {removeModal.visible && (
            <RemoveHeader>{removeModal.title}</RemoveHeader>
          )}
          {confirmModal.visible && (
            <ConfirmHeader>{confirmModal.title}</ConfirmHeader>
          )}
          {errorModal.visible && <ErrorHeader>{errorModal.title}</ErrorHeader>}
          <UtilityModal.Close onClick={hideRemoveModal} />
        </UtilityModal.Header>
        <UtilityModal.Body>
          <UtilityModal.Message>{message}</UtilityModal.Message>
          {subtype === "rename" && (
            <RenameInput setName={setName} name={name} />
          )}

          <UtilityModal.Wrapper>
            {subtype === "error" && (
              <ErrorButtons type={subtype} hideRemoveModal={hideRemoveModal} />
            )}
          </UtilityModal.Wrapper>
        </UtilityModal.Body>
      </UtilityModal.Container>
    </UtilityModal>
  );
}
