import React, { useState, useEffect } from "react";

import { AccountPanel } from "../components";
import {
  FilterContainer,
  RowListItemContainer,
} from "./auxillary/auxillary-containers";

export default function AccountPanelContainer() {
  return (
    <AccountPanel>
      <FilterContainer />
    </AccountPanel>
  );
}
