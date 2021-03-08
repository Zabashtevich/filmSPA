import React from "react";

import { Widget } from "../../components";

export default function WidgetContainer() {
  return (
    <Widget>
      SAVE
      <Widget.Placeholder />
      <Widget.Container>
        <Widget.Close />
        <Widget.Title>Add to list:</Widget.Title>
        <Widget.Userlist>
          <Widget.Arrow />
        </Widget.Userlist>
        <Widget.Favorite>
          <Widget.Arrow />
        </Widget.Favorite>
        <Widget.List>
          <Widget.Item></Widget.Item>
        </Widget.List>
      </Widget.Container>
    </Widget>
  );
}
