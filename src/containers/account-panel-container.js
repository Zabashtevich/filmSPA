import React from "react";
import { useParams } from "react-router-dom";

import { AccountPanel } from "../components";
import {
  FilterContainer,
  RowListItemContainer,
} from "./auxillary/auxillary-containers";

export default function AccountPanelContainer() {
  const params = useParams();
  return (
    <AccountPanel>
      <FilterContainer slug={params.slug} />
      <RowListItemContainer />
    </AccountPanel>
  );
}
