import React from "react";

import { useWarningContext } from "./../../context";
import { Warning } from "../../components";

export default function WarningContainer() {
  const [warningsettings, warninginterface] = useWarningContext();
  const { message, visible } = warningsettings;

  return (
    <Warning visible={visible}>
      <Warning.Message>{message}</Warning.Message>
      <Warning.Spinner />
    </Warning>
  );
}
