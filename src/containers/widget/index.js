import React from "react";

import { Widget } from "../../components";

export default function WidgetContainer() {
  return (
    <Widget>
      <Widget.Title>ADD TO LIST</Widget.Title>
      <Widget.Placeholder />
      <Widget.Container>
        <Widget.Close />
        <Widget.Subtitle>Category:</Widget.Subtitle>
        <Widget.Userlist>
          <Widget.Arrow />
          Your list
        </Widget.Userlist>
        <Widget.Favorite>
          <Widget.Arrow />
          Favorite
        </Widget.Favorite>
        <Widget.List>
          <Widget.Item></Widget.Item>
        </Widget.List>
      </Widget.Container>
    </Widget>
  );
}
