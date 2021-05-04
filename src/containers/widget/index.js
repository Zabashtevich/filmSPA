import React, { useState } from "react";

import { Widget } from "../../components";
import WidgetFavorite from "./items/widget-favorite";
import WidgetList from "./items/widget-list";

export default function WidgetContainer({ lists, data }) {
  const [visible, setVisible] = useState(false);

  return (
    <Widget onClick={() => setVisible((prev) => !prev)}>
      <Widget.Title>Add to list</Widget.Title>
      <Widget.Arrow rotated={visible ? 1 : 0} />
      <Widget.Popup visible={visible} onClick={(e) => e.stopPropagation()}>
        <WidgetFavorite favorites={lists.favorites} data={data} />
        <Widget.Subtitle>Your lists:</Widget.Subtitle>
        <Widget.Container>
          {lists.userlists.map((item) => (
            <WidgetList key={item.id} item={item} data={data} lists={lists} />
          ))}
        </Widget.Container>
      </Widget.Popup>
    </Widget>
  );
}
