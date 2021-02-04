import React from "react";
import { useParams } from "react-router-dom";

import { AccountPanel } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import {
  FilterContainer,
  // RowListItemContainer,
} from "./auxillary";

export default function AccountPanelContainer() {
  const params = useParams();
  const [user] = useAuthListener();

  return (
    <AccountPanel>
      <FilterContainer slug={params.slug} />
      {/* <RowListItemContainer user={user} /> */}
    </AccountPanel>
  );
}
