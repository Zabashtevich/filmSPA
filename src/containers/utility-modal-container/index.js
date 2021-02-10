import React from "react";

import { UtilityModal } from "../../components";

export default function UtilityModalContainer({ visible, text, type }) {
  return (
    <UtilityModal>
      <UtilityModal.Container>
        <UtilityModal.IconInner>
          <UtilityModal.ErrorIcon />
          <UtilityModal.WarningIcon />
        </UtilityModal.IconInner>
        <UtilityModal.Title></UtilityModal.Title>
        <UtilityModal.Message></UtilityModal.Message>
        <UtilityModal.Wrapper>
          <UtilityModal.DeclineButton>DECLINE</UtilityModal.DeclineButton>
          <UtilityModal.AcceptButton>ACCEPT</UtilityModal.AcceptButton>
        </UtilityModal.Wrapper>
      </UtilityModal.Container>
    </UtilityModal>
  );
}
