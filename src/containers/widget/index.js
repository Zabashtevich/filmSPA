import React, { useState } from "react";

import { Widget } from "../../components";

export default function WidgetContainer({ lists }) {
  const [visible, setVisible] = useState(false);

  return (
    <Widget onClick={() => setVisible((prev) => !prev)}>
      <Widget.Title>Add to list</Widget.Title>
      <Widget.Arrow rotated={visible && 1} />
      <Widget.Popup visible={visible} onClick={(e) => e.stopPropagation()}>
        <Widget.Item>
          <Widget.Name>Favorites</Widget.Name>
          <Widget.Heart />
        </Widget.Item>
        <Widget.Subtitle>Your lists:</Widget.Subtitle>
        <Widget.Container>
          {lists.userlists.map((item) => (
            <Widget.Item key={item.id}>
              <Widget.Name>{item.name}</Widget.Name>
              <Widget.Heart />
            </Widget.Item>
          ))}
        </Widget.Container>
      </Widget.Popup>
    </Widget>
  );
}
