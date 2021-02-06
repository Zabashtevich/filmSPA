import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../../../context/auth-context";
import useFirestore from "../../../../hooks/useFirestore";
import { Tooltips } from "../../../../components";
import useAuthListener from "../../../../hooks/useAuthListener";
import { DescriptionPopupContainer } from "../../../";
import { WatchListContainer } from "../";
import { favoriteLogic } from "../../../../utils/firebase";

export default function TooltipsContainer({ slug, item }) {
  const [user, loading] = useAuthListener();
  const [watchlistDesc, setWatchlistDesc] = useState(false);
  const [favoriteDesc, setFavoriteDesc] = useState(false);
  const [watchListPopupVisible, setWatchListPopupVisible] = useState(false);
  const [descriptionBlocker, setDescriptionBlocker] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [dataLoading, data] = useFirestore(
    user && `${user.displayName}`,
    "collection",
    "favorite",
  );

  const { firebase } = useContext(AuthContext);
  useEffect(() => {
    if (data.length === 0) return;
    if (data.filter((item) => item === slug).length > 0) {
      console.log("hi");
      setIsFavorite(true);
    }
  }, [data, slug]);

  const onWatchlistClick = () => {
    if (!user) return;
    setDescriptionBlocker((prev) => !prev);
    setWatchListPopupVisible((prev) => !prev);
  };

  const onFavoriteClick = () => {
    if (!user) return;
    setFavoriteDesc(false);
    favoriteLogic(firebase, item, user.displayName, isFavorite, data).then(
      () => {
        if (isFavorite) {
          setIsFavorite(false);
        } else {
          setIsFavorite(true);
        }
        setFavoriteDesc(true);
      },
    );
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
          <DescriptionPopupContainer
            left={1}
            text={"Add movie to list"}
            visible={watchlistDesc}
          />
        )}
        {!user && !descriptionBlocker && (
          <DescriptionPopupContainer
            left={1}
            text={"Please, sign in to add movie to list"}
            visible={watchlistDesc}
          />
        )}
        <WatchListContainer
          user={user}
          watchListPopupVisible={watchListPopupVisible}
          slug={slug}
          item={item}
        />
      </Tooltips.ItemWrapper>
      <Tooltips.ItemWrapper rightposition={1}>
        <Tooltips.Favorite
          onMouseEnter={() => setFavoriteDesc(true)}
          onMouseLeave={() => setFavoriteDesc(false)}
          onClick={onFavoriteClick}
          isfavorite={isFavorite ? 1 : 0}
        />
        {user && !descriptionBlocker && (
          <DescriptionPopupContainer
            right={1}
            text={"Add movie to favorite"}
            visible={favoriteDesc}
          />
        )}
        {!user && !descriptionBlocker && (
          <DescriptionPopupContainer
            right={1}
            text={"Please, sign in to add movie to favorite"}
            visible={favoriteDesc}
          />
        )}
        {user && !descriptionBlocker && isFavorite && (
          <DescriptionPopupContainer
            right={1}
            text={"Delete film from favorite"}
            visible={favoriteDesc}
          />
        )}
      </Tooltips.ItemWrapper>
    </Tooltips>
  );
}
