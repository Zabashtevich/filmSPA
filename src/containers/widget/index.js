import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Widget } from "../../components";
import { WidgetSkeleton } from "../../components/skeleton";
import { checkMovieInList, createListItem } from "../../utils";
import { useFirelogicContext, useProcessContext } from "./../../context";

export default function WidgetContainer({ data }) {
  const { userlists, favoritedMovies, loading } = useSelector(
    (state) => state.userData,
  );
  const { profileLoading, profile } = useSelector((state) => state.userProfile);

  const [rotate, setRotate] = useState(false);
  const [{ main, aux }, setPopupVisible] = useState({
    main: false,
    aux: false,
  });

  const [{ setFavoriteProps, setUserlistProps }] = useFirelogicContext();
  const [{ favoriteProcess, userlistProcess }] = useProcessContext();

  function handleList(array, id) {
    if (checkMovieInList(array, data.id)) {
      setUserlistProps({ type: "delete from list", id, item: data });
    } else {
      setUserlistProps({ type: "add to list", id, item: createListItem(data) });
    }
  }

  function handleFavorite() {
    if (checkMovieInList(favoritedMovies, data.id)) {
      setFavoriteProps({ type: "unfavorite", value: data.id });
    } else {
      setFavoriteProps({ type: "favorite", value: createListItem(data) });
    }
  }

  useEffect(() => {
    if (main || aux) {
      document.body.addEventListener("click", () =>
        setPopupVisible({ main: false, aux: false }),
      );
    }
  }, [main, aux]);

  return (
    <Widget
      onClick={(e) => {
        e.stopPropagation();
        setPopupVisible({ main: !main, aux: false });
      }}
    >
      <WidgetSkeleton visible={profileLoading || loading} />
      <Widget.Title>ADD TO LIST</Widget.Title>
      <Widget.Placeholder />
      {!loading && !profileLoading && (
        <Widget.Container visible={main} onClick={(e) => e.stopPropagation()}>
          <Widget.Subtitle>Category:</Widget.Subtitle>
          <Widget.Userlist
            onClick={() => {
              setRotate((prev) => !prev);
              setPopupVisible((prev) => ({ ...prev, aux: !aux }));
            }}
          >
            <Widget.Arrow rotate={rotate ? 1 : 0} />
            Your list
          </Widget.Userlist>
          <Widget.Favorite
            onClick={handleFavorite}
            disabled={favoriteProcess ? 1 : 0}
          >
            <Widget.Heart
              visible={checkMovieInList(favoritedMovies, data.id)}
            />
            Favorite
          </Widget.Favorite>
          <Widget.List visible={aux}>
            {userlists.map(({ id, name, content }) => (
              <Widget.Item
                key={id}
                onClick={() => handleList(content, id)}
                disabled={userlistProcess ? 1 : 0}
              >
                {name}
                <Widget.Heart visible={checkMovieInList(content, data.id)} />
              </Widget.Item>
            ))}
            <Widget.Link to={`/account/${profile.displayName}/userlist`}>
              Create and edit list
            </Widget.Link>
          </Widget.List>
        </Widget.Container>
      )}
    </Widget>
  );
}
