import React from "react";
import { Warning } from "../../components";

export default function WarningContainer() {
  return (
    <Warning>
      <Warning.Wrapper>
        <Warning.Message>EBAT TI LOH</Warning.Message>
        <Warning.Spinner />
      </Warning.Wrapper>
    </Warning>
  );
}
