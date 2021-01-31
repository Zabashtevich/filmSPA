import React, { useState, useEffect } from "react";

import { AccountPanel } from "../components";
import TabContainer from "./tab-container";
import {
  FilterContainer,
  RowListItemContainer,
} from "./auxillary/auxillary-containers";
import useFirestore from "./../hooks/useFirestore";
import useAuthListener from "./../hooks/useAuthListener";

export default function AccountPanelContainer() {
  return (
    <AccountPanel>
      <FilterContainer />
    </AccountPanel>
  );
}
