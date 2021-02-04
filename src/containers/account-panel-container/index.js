import React from "react";
import { useParams } from "react-router-dom";

import { Account, AccountPanel } from "../../components";
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

  return (
    <AccountPanel>
      <FilterContainer slug={params.slug} />
      <AccountPanel.CardsContainer>
        {!userDataLoading &&
          userData.map((item, index) => (
            <RowListItemContainer
              key={item.id}
              item={item}
              index={index}
              user={user}
              userData={userData}
              accountPanelRow={true}
            />
          ))}
      </AccountPanel.CardsContainer>
    </AccountPanel>
  );
}
