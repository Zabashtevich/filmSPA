import React from "react";

import { ProcessingWindow } from "../../components";
import { useAccountContext } from "../../context";

export default function ProcessingWindowContainer() {
  const [state] = useAccountContext();
  const { warningModal } = state;

  return (
    <ProcessingWindow visible={warningModal.visible}>
      <ProcessingWindow.Message>
        {warningModal.message}
      </ProcessingWindow.Message>
      <ProcessingWindow.Spinner />
    </ProcessingWindow>
  );
}
