import React from "react";

import { Process } from "../../components";
import { useProcessContext } from "../../context";

export default function ProcessContainer() {
  const [{ visible, message }] = useProcessContext();

  return (
    <Process visible={visible}>
      <Process.Message>{message}</Process.Message>
      <Process.Spinner />
    </Process>
  );
}
