import React, { useState } from "react";

import { UtilityModal } from "../../components";
import { useModalContext } from "../../context";
import { ErrorButtons, ErrorHeader } from "./items/error";
import { NewlistButtons, NewlistHeader, NewlistInput } from "./items/newlist";
import { RenameButtons, RenameHeader, RenameInput } from "./items/rename";
import { ConfirmButtons, ConfirmHeader } from "./items/confirm";

export default function UtilityModalContainer() {
  const [modalstate, modalinterface] = useModalContext();

  const { type, message, visible } = modalstate;
  const { closeModal, confirmModal, renameModal, createList } = modalinterface;

  const [name, setName] = useState("");

  return (
    <UtilityModal>
      <UtilityModal.Container visible={visible}>
        <UtilityModal.Header type={type}>
          {type === "error" && <ErrorHeader />}
          {type === "rename" && <RenameHeader />}
          {type === "newlist" && <NewlistHeader />}
          {type === "confirm" && <ConfirmHeader />}
          <UtilityModal.Close onClick={closeModal} />
        </UtilityModal.Header>
        <UtilityModal.Body>
          <UtilityModal.Message>{message}</UtilityModal.Message>
          {type === "rename" && <RenameInput setName={setName} name={name} />}
          {type === "newlist" && <NewlistInput setName={setName} name={name} />}
          <UtilityModal.Wrapper>
            {type === "error" && (
              <ErrorButtons closeModal={closeModal} type={type} />
            )}
            {type === "rename" && (
              <RenameButtons
                type={type}
                renameModal={renameModal}
                name={name}
              />
            )}
            {type === "newlist" && (
              <NewlistButtons
                closeModal={closeModal}
                createList={createList}
                type={type}
              />
            )}
            {type === "confirm" && (
              <ConfirmButtons
                closeModal={closeModal}
                confirmModal={confirmModal}
                type={type}
              />
            )}
          </UtilityModal.Wrapper>
        </UtilityModal.Body>
      </UtilityModal.Container>
    </UtilityModal>
  );
}
