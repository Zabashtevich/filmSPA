import React from "react";
import { useParams } from "react-router-dom";

import { AccountPanel } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import useFirestore from "../../hooks/useFirestore";
import { FilterContainer } from "./auxillary";
import { RowListItemContainer } from "../";

export default function AccountPanelContainer() {
  const params = useParams();
  const [user] = useAuthListener();

  const [userDataLoading, userData] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );

  console.log(userData);

  return (
    <AccountPanel>
      <FilterContainer slug={params.slug} />
      {!userDataLoading &&
        userData.map((item, index) => (
          <RowListItemContainer item={item} index={index} user={user} />
        ))}
    </AccountPanel>
  );
}
