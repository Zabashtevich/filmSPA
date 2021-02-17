import React from "react";

import { Warning } from "../../components";
import { useAccountContext } from "./../../context";

export default function WarningContainer() {
  const [state] = useAccountContext();
  const { warningModal } = state;

  return (
    <Warning visible={warningModal.visible}>
      <Warning.Message>{warningModal.message}</Warning.Message>
      <Warning.Spinner />
    </Warning>
  );
}
