import React from "react";

import { Process } from "../../components";
import { useProcessContext } from "../../context";

export default function ProcessContainer() {
  const [{ processing, message }] = useProcessContext();

  return (
    <Process visible={processing} data-testid="process-container">
      <Process.Message>{message}</Process.Message>
      <Process.Spinner data-testid="process-spinner" />
    </Process>
  );
}
