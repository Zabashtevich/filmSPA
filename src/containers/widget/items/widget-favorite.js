import React, { useEffect, useState } from "react";

import { Widget } from "../../../components";
import { useList } from "../../../hooks";
import { checkMovieInList, createVote } from "../../../utils";

export default function WidgetFavorite({ favorites, data }) {
  const [setFavorite] = useList("favorites");
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    if (checkMovieInList(favorites, data.id)) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
  }, [favorites, data]);

  function favoriteHandler() {
    if (favorited) {
      setFavorite(favorites.filter((item) => item.id !== data.id));
    } else {
      setFavorite([...favorites, createVote(data)]);
    }
  }

  return (
    <Widget.Item onClick={favoriteHandler}>
      <Widget.Name>Favorites</Widget.Name>
      <Widget.Heart visible={favorited} />
    </Widget.Item>
  );
}
