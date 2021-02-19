import React from "react";

import { ProcessingWindow } from "../../components";

export default function ProcessingWindowContainer() {
  const { processing, message } = state;

  return (
    <ProcessingWindow visible={processing}>
      <ProcessingWindow.Message>{message}</ProcessingWindow.Message>
      <ProcessingWindow.Spinner />
    </ProcessingWindow>
  );
}
