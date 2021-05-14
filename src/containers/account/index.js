import React, { useEffect, useState } from "react";

import { Account } from "../../components";
import { CreditsContainer, FilterContainer } from "../";
import { useCreditsContext } from "../../context";
import { getFiltredArray } from "../../utils";

export default function AccountContainer({ loading, profile, votes }) {
  const [, setCredits] = useCreditsContext();

  const [sortBy, setSortBy] = useState("date");
  const [type, setType] = useState("all");
  const [primaryYear, setPrimaryYear] = useState("all");
  const [secondaryYear, setSecondaryYear] = useState("all");

  useEffect(() => {
    if (!loading) {
      setCredits({
        loading: false,
        items: getFiltredArray(votes, {
          sortBy,
          type,
          primaryYear,
          secondaryYear,
        }),
      });
    }
  }, [sortBy, type, primaryYear, secondaryYear]);

  return (
    <Account data-testid="account-container">
      {!loading && (
        <>
          <Account.Column data-testid="account-column">
            <Account.Poster src={profile?.photoURL} alt="profile image" />
            <Account.Nickname>{profile.displayName}</Account.Nickname>
          </Account.Column>
          <Account.Content>
            <Account.Title>YOUR PROFILE ACTIVITY</Account.Title>
            <FilterContainer
              filterSettings={{ sortBy, type, primaryYear }}
              setPrimaryYear={setPrimaryYear}
              setSecondaryYear={setSecondaryYear}
              setSortBy={setSortBy}
              setType={setType}
            />
            <CreditsContainer />
          </Account.Content>
        </>
      )}
    </Account>
  );
}
