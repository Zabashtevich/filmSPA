import React, { useState } from "react";

import { Tooltips } from "../../../components";
import useAuthListener from "./../../../hooks/useAuthListener";
import ItemDescriptionPopupContainer from "./auxillary-items/item-description-popup-container";
import WatchListContainer from "./watch-list-container";

export default function TooltipsContainer() {
  const { user } = useAuthListener();

  const [watchlistDesc, setWatchlistDesc] = useState(false);
  const [favoriteDesc, setFavoriteDesc] = useState(false);
  const [watchListPopupVisible, setWatchListPopupVisible] = useState(false);

  const onWatchlistClick = () => {
    if (!user) return;
    setWatchlistDesc(false);
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
        {user && (
          <ItemDescriptionPopupContainer
            left={1}
            text={"Add movie to list"}
            visible={watchlistDesc}
          />
        )}
        {!user && (
          <ItemDescriptionPopupContainer
            left={1}
            text={"Please, sign in to add movie to list"}
            visible={watchlistDesc}
          />
        )}
        <WatchListContainer
          user={user}
          watchListPopupVisible={watchListPopupVisible}
        />
      </Tooltips.ItemWrapper>
      <Tooltips.ItemWrapper rightposition={1}>
        <Tooltips.Favorite
          onMouseEnter={() => setFavoriteDesc(true)}
          onMouseLeave={() => setFavoriteDesc(false)}
          onClick={onFavoriteClock}
        />
        {user && (
          <ItemDescriptionPopupContainer
            right={1}
            text={"Add movie to favorite"}
            visible={favoriteDesc}
          />
        )}
        {!user && (
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
