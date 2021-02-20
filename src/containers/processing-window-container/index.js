import React from "react";

import { ProcessingWindow } from "../../components";
import { useModalContext } from "./../../context";

export default function ProcessingWindowContainer() {
  const [modalstate] = useModalContext();
  const { processing, message } = modalstate;

  return (
    <ProcessingWindow visible={processing}>
      <ProcessingWindow.Message>{message}</ProcessingWindow.Message>
      <ProcessingWindow.Spinner />
    </ProcessingWindow>
  );
}
