import React from "react";

import { Nomatch } from "../../components";

export default function NomatchContainer() {
  return (
    <Nomatch>
      <Nomatch.Message>404 page not found</Nomatch.Message>
      <Nomatch.Return to="/">Return to main page</Nomatch.Return>
    </Nomatch>
  );
}
