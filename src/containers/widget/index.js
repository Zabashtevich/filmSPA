import React from "react";

import { Widget } from "../../components";

export default function WidgetContainet({ lists }) {
  return (
    <Widget>
      <Widget.Title>Add to list</Widget.Title>
      <Widget.Arrow />
      <Widget.Popup>
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
