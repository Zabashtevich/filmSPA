import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Widget } from "../../../components";
import { getCorrectDate } from "../../../utils";
import { useFirelogicContext, useModalContext } from "./../../../context";

export default function WidgetFavorite({ item }) {
  const [{ setFavoriteProps }] = useFirelogicContext();
  const [{ addingFavorite }] = useModalContext();
  const { favoritedMovies } = useSelector((state) => state.userData);
  console.log(favoritedMovies.filter((i) => +i.id === item.id));
  return (
    <Widget.Item
      onClick={() =>
        setFavoriteProps({
          type: "favorite",
          value: {
            time: getCorrectDate(),
            title: item.title,
            id: item.id,
            date: item.release_date,
            vote_average: item.vote_average,
            vote_count: item.vote_count,
          },
        })
      }
    >
      <Widget.Name>Favorite</Widget.Name>
      <Widget.Added
        location={"middle"}
        visible={
          favoritedMovies.filter((i) => +i.id === item.id).length > 0 && true
        }
      />
      {addingFavorite && <Widget.Spinner location={"middle"} />}
    </Widget.Item>
  );
}
