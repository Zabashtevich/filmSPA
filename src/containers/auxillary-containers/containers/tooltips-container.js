import React, { useState } from "react";

import { Tooltips } from "../../../components";
import useAuthListener from "./../../../hooks/useAuthListener";

export default function TooltipsContainer() {
  const { user } = useAuthListener();

  const [visibleWatchlistDesc, setVisibleWatchlistDesc] = useState(false);

  const [visibleFavoriteDesc, setVisibleFavoriteDesc] = useState(false);

  return (
    <Tooltips>
      <Tooltips.ItemWrapper>
        <Tooltips.Watchlist
          onMouseEnter={() => setVisibleWatchlistDesc(true)}
          onMouseLeave={() => setVisibleWatchlistDesc(false)}
        />
        {user && visibleWatchlistDesc && (
          <Tooltips.Description left={"1"}>
            Add movie to list
          </Tooltips.Description>
        )}
        {user && visibleWatchlistDesc && (
          <Tooltips.Description left={"1"}>
            Please, log in to add movie to list
          </Tooltips.Description>
        )}
      </Tooltips.ItemWrapper>
      <Tooltips.ItemWrapper>
        <Tooltips.Favorite
          onMouseEnter={() => setVisibleFavoriteDesc(true)}
          onMouseLeave={() => setVisibleFavoriteDesc(false)}
        />
        {user && visibleFavoriteDesc && (
          <Tooltips.Description right={"1"}>
            Add movie to favorite
          </Tooltips.Description>
        )}
        {!user && visibleFavoriteDesc && (
          <Tooltips.Description right={"1"}>
            Please, log in to add movie to favorite
          </Tooltips.Description>
        )}
      </Tooltips.ItemWrapper>
    </Tooltips>
  );
}
