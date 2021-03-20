import React from "react";

import { Utility } from "../../components";

export default function UtilityContainer() {
  return (
    <Utility>
      <Utility.Message></Utility.Message>
      <Utility.Loading />
      <Utility.Wrapper>
        <Utility.Error></Utility.Error>
      </Utility.Wrapper>
    </Utility>
  );
}
