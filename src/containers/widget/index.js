import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Widget } from "../../components";
import { checkMovieInList } from "../../utils";

export default function WidgetContainer({ slug }) {
  const [visible, setVisible] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const { userDataLoading, userlists, favoritedMovies } = useSelector(
    (state) => state.userData,
  );

  useEffect(() => {
    if (!userDataLoading) {
      checkMovieInList(favoritedMovies, slug)
        ? setIsFavorited(true)
        : setIsFavorited(false);
    }
  }, [userDataLoading, favoritedMovies]);

  return (
    !userDataLoading && (
      <Widget onClick={() => setVisible((prev) => !prev)}>
        <Widget.Wrapper>
          <Widget.Title>Add to list</Widget.Title>
          <Widget.Arrow />
        </Widget.Wrapper>
        <Widget.List visible={visible}>
          <Widget.Favorite>
            <Widget.Name>FAVORITE</Widget.Name>
            {isFavorited && <Widget.Heart />}
          </Widget.Favorite>
          <Widget.Subtitle>YOUR LISTS:</Widget.Subtitle>
          {userlists.map((item) => (
            <WidgetListItem key={item.id} item={item} />
          ))}
          <Widget.Link to="/account/userlist">CREATE NEW LIST</Widget.Link>
        </Widget.List>
      </Widget>
    )
  );
}

function WidgetListItem({ item, slug }) {
  return (
    <Widget.Item>
      <Widget.Name>{item.name.toUpperCase()}</Widget.Name>
      {checkMovieInList(item.content, slug) && <Widget.Heart />}
    </Widget.Item>
  );
}
