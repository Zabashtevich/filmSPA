import React from "react";

import { ProcessingWindow } from "../../components";
import { useProcessContext } from "./../../context";

export default function ProcessingWindowContainer() {
  const [{ message, visible }] = useProcessContext();

  return (
    <ProcessingWindow visible={visible}>
      <ProcessingWindow.Message>{message}</ProcessingWindow.Message>
      <ProcessingWindow.Spinner />
    </ProcessingWindow>
  );
}
