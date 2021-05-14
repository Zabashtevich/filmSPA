import React, { useEffect } from "react";
import { CreditsContainer } from "../..";

import { Userlist } from "../../../components";
import { useCreditsContext } from "../../../context";

export default function UserlistFavorite({ loading, lists }) {
  const [, setCredits] = useCreditsContext();

  useEffect(() => {
    if (!loading) {
      setCredits({ loading: false, items: lists.favorites });
    }
  }, [loading]);

  return (
    <>
      <Userlist.Title>Your favorite movies</Userlist.Title>
      {!loading && lists.favorites.length > 0 && <CreditsContainer />}
      {!loading && lists.favorites.length === 0 && (
        <Userlist.Placeholder>
          You did not add any movies to list
        </Userlist.Placeholder>
      )}
    </>
  );
}
