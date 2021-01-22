import React, { useState } from "react";

import { Tooltips } from "../../../../components";
import useAuthListener from "../../../../hooks/useAuthListener";
import { ItemDescriptionPopupContainer } from "../../auxillary-items";
import WatchListContainer from "./watch-list-container";

export default function TooltipsContainer({ slug }) {
  const { user } = useAuthListener();

  const [watchlistDesc, setWatchlistDesc] = useState(false);
  const [favoriteDesc, setFavoriteDesc] = useState(false);
  const [watchListPopupVisible, setWatchListPopupVisible] = useState(false);
  const [descriptionBlocker, setDescriptionBlocker] = useState(false);

  const onWatchlistClick = () => {
    if (!user) return;
    setDescriptionBlocker((prev) => !prev);
    setWatchListPopupVisible((prev) => !prev);
  };

  const onFavoriteClock = () => {
    if (!user) return;
    setFavoriteDesc(false);
  };

  return (
    <Tooltips>
      <Tooltips.ItemWrapper>
        <Tooltips.Watchlist
          onMouseEnter={() => setWatchlistDesc(true)}
          onMouseLeave={() => setWatchlistDesc(false)}
          onClick={onWatchlistClick}
        />
        {user && !descriptionBlocker && (
          <ItemDescriptionPopupContainer
            left={1}
            text={"Add movie to list"}
            visible={watchlistDesc}
          />
        )}
        {!user && !descriptionBlocker && (
          <ItemDescriptionPopupContainer
            left={1}
            text={"Please, sign in to add movie to list"}
            visible={watchlistDesc}
          />
        )}
        <WatchListContainer
          user={user}
          watchListPopupVisible={watchListPopupVisible}
          slug={slug}
        />
      </Tooltips.ItemWrapper>
      <Tooltips.ItemWrapper rightposition={1}>
        <Tooltips.Favorite
          onMouseEnter={() => setFavoriteDesc(true)}
          onMouseLeave={() => setFavoriteDesc(false)}
          onClick={onFavoriteClock}
        />
        {user && !descriptionBlocker && (
          <ItemDescriptionPopupContainer
            right={1}
            text={"Add movie to favorite"}
            visible={favoriteDesc}
          />
        )}
        {!user && !descriptionBlocker && (
          <ItemDescriptionPopupContainer
            right={1}
            text={"Please, sign in to add movie to favorite"}
            visible={favoriteDesc}
          />
        )}
      </Tooltips.ItemWrapper>
    </Tooltips>
  );
}
