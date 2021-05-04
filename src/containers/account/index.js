import React, { useEffect, useState } from "react";

import { Account } from "../../components";
import { CreditsContainer, FilterContainer } from "../";
import { useCreditsContext } from "../../context";
import { getFiltredArray } from "../../utils";

export default function AccountContainer({ loading, profile, votes }) {
  const [, setCredits] = useCreditsContext();
  const [filterSettings, setFilterSettings] = useState({
    sortBy: "date",
    type: "all",
    period: { start: "all", end: "all" },
  });

  useEffect(() => {
    setCredits({
      loading: false,
      items: getFiltredArray(votes, filterSettings),
    });
  }, [filterSettings]);

  return (
    <Account data-testid="account-container">
      {!loading && (
        <>
          <Account.Column>
            <Account.Poster src={profile?.photoURL} alt="profile image" />
            <Account.Nickname>{profile.displayName}</Account.Nickname>
          </Account.Column>
          <Account.Content>
            <Account.Title>YOUR PROFILE ACTIVITY</Account.Title>
            <FilterContainer
              filterSettings={filterSettings}
              setFilterSettings={setFilterSettings}
            />
            <CreditsContainer />
          </Account.Content>
        </>
      )}
    </Account>
  );
}
