import React from "react";
import { Process } from "../../components";

export default function ProcessContainer() {
  return (
    <Process>
      <Process.Message></Process.Message>
      <Process.Spinner />
    </Process>
  );
}
