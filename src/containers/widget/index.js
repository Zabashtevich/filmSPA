import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Widget } from "../../components";
import { checkMovieInList } from "../../utils";

export default function WidgetContainer({ nickname, data }) {
  const { userlists, favoritedMovies, loading } = useSelector(
    (state) => state.userData,
  );
  const [rotate, setRotate] = useState(false);
  const [{ main, aux }, setPopupVisible] = useState({
    main: false,
    aux: false,
  });

  return (
    !loading && (
      <Widget onClick={() => setPopupVisible({ main: !main, aux: false })}>
        <Widget.Title>ADD TO LIST</Widget.Title>
        <Widget.Placeholder />
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
          <Widget.Favorite>
            <Widget.Heart
              visible={checkMovieInList(favoritedMovies, data.id)}
            />
            Favorite
          </Widget.Favorite>
          <Widget.List visible={aux}>
            {!!userlists &&
              userlists.map(({ id, name, content }) => (
                <Widget.Item key={id}>
                  {name}
                  <Widget.Heart visible={checkMovieInList(content, id)} />
                </Widget.Item>
              ))}
            <Widget.Link to="/">Create and edit list</Widget.Link>
          </Widget.List>
        </Widget.Container>
      </Widget>
    )
  );
}
