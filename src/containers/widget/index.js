import React, { useEffect, useState } from "react";

import { Widget } from "../../components";
import { checkMovieInList } from "../../utils";
import WidgetList from "./items/widget-list";

export default function WidgetContainer({ lists, data }) {
  const [visible, setVisible] = useState(false);
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    if (checkMovieInList(lists.favorites, data.id)) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
  }, [lists, data]);

  return (
    <Widget onClick={() => setVisible((prev) => !prev)}>
      <Widget.Title>Add to list</Widget.Title>
      <Widget.Arrow rotated={visible && 1} />
      <Widget.Popup visible={visible} onClick={(e) => e.stopPropagation()}>
        <Widget.Item>
          <Widget.Name>Favorites</Widget.Name>
          <Widget.Heart visible={favorited} />
        </Widget.Item>
        <Widget.Subtitle>Your lists:</Widget.Subtitle>
        <Widget.Container>
          {lists.userlists.map((item) => (
            <WidgetList key={item.id} item={item} data={data} />
          ))}
        </Widget.Container>
      </Widget.Popup>
    </Widget>
  );
}
