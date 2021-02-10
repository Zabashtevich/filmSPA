import React from "react";

import { UtilityModal } from "../../components";

export default function UtilityModalContainer({ visible, text, type }) {
  return (
    <UtilityModal>
      <UtilityModal.Container>
        <UtilityModal.Header>
          <UtilityModal.Title>ERROR</UtilityModal.Title>
          <UtilityModal.ErrorIcon />
          {/* <UtilityModal.WarningIcon /> */}
          <UtilityModal.Close />
        </UtilityModal.Header>
        <UtilityModal.Body>
          <UtilityModal.Message>Hahahahahaha</UtilityModal.Message>
          <UtilityModal.Wrapper>
            <UtilityModal.DeclineButton>DECLINE</UtilityModal.DeclineButton>
            <UtilityModal.AcceptButton>ACCEPT</UtilityModal.AcceptButton>
          </UtilityModal.Wrapper>
        </UtilityModal.Body>
      </UtilityModal.Container>
    </UtilityModal>
  );
}
