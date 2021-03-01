import React from "react";

import { ProcessWindow } from "../../components";
import { useProcessContext } from "../../context";

export default function ProcessWindowContainer() {
  const [{ message, visible }] = useProcessContext();

  return (
    <ProcessWindow visible={visible}>
      <ProcessWindow.Message>{message}</ProcessWindow.Message>
      <ProcessWindow.Spinner />
    </ProcessWindow>
  );
}
