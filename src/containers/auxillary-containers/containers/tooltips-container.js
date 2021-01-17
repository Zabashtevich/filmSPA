import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { Tooltips } from "../../../components";
import useAuthListener from "./../../../hooks/useAuthListener";
import WatchListContainer from "./watch-list-container";

export default function TooltipsContainer() {
  const { user } = useAuthListener();

  const [visibleWatchlistDesc, setVisibleWatchlistDesc] = useState(false);

  const [visibleFavoriteDesc, setVisibleFavoriteDesc] = useState(false);

  const onWatchlistClick = () => {
    if (!user) return;
    setVisibleWatchlistDesc(false);
  };

  const onFavoriteClock = () => {
    if (!user) return;
    setVisibleFavoriteDesc(false);
  };

  return (
    <Tooltips>
      <Tooltips.ItemWrapper>
        <Tooltips.Watchlist
          onMouseEnter={() => setVisibleWatchlistDesc(true)}
          onMouseLeave={() => setVisibleWatchlistDesc(false)}
          onClick={onWatchlistClick}
        />
        <CSSTransition
          in={user && visibleWatchlistDesc}
          appear={true}
          timeout={{ enter: 600, exit: 600 }}
          unmountOnExit
          classNames="fade"
        >
          <Tooltips.Description>Add movie to list</Tooltips.Description>
        </CSSTransition>
        <CSSTransition
          in={!user && visibleWatchlistDesc}
          appear={true}
          timeout={{ enter: 600, exit: 600 }}
          unmountOnExit
          classNames="fade"
        >
          <Tooltips.Description left={"1"}>
            Please, sign in to add movie to list
          </Tooltips.Description>
        </CSSTransition>
        <WatchListContainer user={user} />
      </Tooltips.ItemWrapper>
      <Tooltips.ItemWrapper rightposition={1}>
        <Tooltips.Favorite
          onMouseEnter={() => setVisibleFavoriteDesc(true)}
          onMouseLeave={() => setVisibleFavoriteDesc(false)}
          onClick={onFavoriteClock}
        />
        <CSSTransition
          in={user && visibleFavoriteDesc}
          appear={true}
          timeout={{ enter: 600, exit: 600 }}
          unmountOnExit
          classNames="fade"
        >
          <Tooltips.Description>Add movie to favorite</Tooltips.Description>
        </CSSTransition>
        <CSSTransition
          in={!user && visibleFavoriteDesc}
          appear={true}
          timeout={{ enter: 600, exit: 600 }}
          unmountOnExit
          classNames="fade"
        >
          <Tooltips.Description>
            Please, sign in to add movie to favorite
          </Tooltips.Description>
        </CSSTransition>
      </Tooltips.ItemWrapper>
    </Tooltips>
  );
}
