import React from "react";
import { useSelector } from "react-redux";

import { Widget } from "../../../components";
import { useFirelogicContext } from "./../../../context";

export default function WidgetFavorite({ slug }) {
  const [{ setFavoriteProps }] = useFirelogicContext();
  const { favoritedMovies } = useSelector((state) => state.userData);

  return (
    <Widget.Item>
      <Widget.Name>Favorite</Widget.Name>
      <Widget.Added
        location={"middle"}
        visible={favoritedMovies.includes(slug)}
      />
      <Widget.Spinner location={"middle"} />
    </Widget.Item>
  );
}
