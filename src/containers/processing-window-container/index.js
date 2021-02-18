import React from "react";

import { ProcessingWindow } from "../../components";
import { useAccountContext } from "../../context";

export default function ProcessingWindowContainer() {
  const [state] = useAccountContext();
  const { processing, message } = state;

  return (
    <ProcessingWindow visible={processing}>
      <ProcessingWindow.Message>{message}</ProcessingWindow.Message>
      <ProcessingWindow.Spinner />
    </ProcessingWindow>
  );
}
