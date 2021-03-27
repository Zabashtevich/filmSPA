import React from "react";

import { Widget } from "../../components";

export default function WidgetContainer() {
  return (
    <Widget>
      <Widget.Title>Add to list</Widget.Title>
      <Widget.Arrow />
      <Widget.List>
        <Widget.Favorite></Widget.Favorite>
        <Widget.Subtitle>Your lists</Widget.Subtitle>
        <Widget.Item></Widget.Item>
        <Widget.Link></Widget.Link>
      </Widget.List>
    </Widget>
  );
}
