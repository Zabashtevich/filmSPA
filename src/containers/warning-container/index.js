import React from "react";
import { useSelector } from "react-redux";
import { Warning } from "../../components";

export default function WarningContainer() {
  return (
    <Warning>
      <Warning.Message>EBAT TI LOH</Warning.Message>
      <Warning.Spinner />
    </Warning>
  );
}
