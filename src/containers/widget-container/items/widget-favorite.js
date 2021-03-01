import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Widget } from "../../../components";
import {
  checkMovieInList,
  createListItem,
  getCorrectDate,
} from "../../../utils";
import {
  useFirelogicContext,
  useItemContext,
  useModalContext,
  useProcessContext,
} from "./../../../context";

export default function WidgetFavorite() {
  const [movieInFavorite, setMovieInFavorite] = useState(false);

  const [{ setFavoriteProps }] = useFirelogicContext();
  const [{ addingFavorite }] = useModalContext();
  const [{ favoriteProcess }] = useProcessContext();
  const [item] = useItemContext();
  const { favoritedMovies } = useSelector((state) => state.userData);

  function handleOnFavorite() {
    if (movieInFavorite) {
      setFavoriteProps({
        type: "unfavorite",
        value: item.id,
      });
    } else {
      setFavoriteProps({
        type: "favorite",
        value: createListItem(item),
      });
    }
  }

  useEffect(() => {
    setMovieInFavorite(checkMovieInList(favoritedMovies, item));
  }, [item, favoritedMovies]);

  return (
    <Widget.Item onClick={handleOnFavorite}>
      <Widget.Name>Favorite</Widget.Name>
      <Widget.Added
        location={"middle"}
        visible={movieInFavorite && !favoriteProcess}
      />
      <Widget.Spinner location={"middle"} visible={favoriteProcess} />
    </Widget.Item>
  );
}
