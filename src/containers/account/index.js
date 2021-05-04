import React, { useEffect, useState } from "react";

import { Account } from "../../components";
import { CreditsContainer, FilterContainer } from "../";

export default function AccountContainer({ loading, profile, votes }) {
  const [filterSettings, setFilterSettings] = useState({
    sortBy: "date",
    type: "all",
    period: { start: "all", end: "all" },
  });

  useEffect(() => {}, [filterSettings]);

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
            {votes.length === 0 && (
              <Account.Placeholder>
                You have not any rated movies
              </Account.Placeholder>
            )}
            {votes.length > 0 && <CreditsContainer />}
          </Account.Content>
        </>
      )}
    </Account>
  );
}
