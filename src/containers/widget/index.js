import React from "react";

import { Widget } from "../../components";

export default function WidgetContainer() {
  return (
    <Widget>
      <Widget.Title>Add to list</Widget.Title>
      <Widget.Arrow />
      <Widget.List>
        <Widget.Favorite>FAVORITE</Widget.Favorite>
        <Widget.Subtitle>YOUR LISTS:</Widget.Subtitle>
        <Widget.Item>HAHAHA</Widget.Item>
        <Widget.Link></Widget.Link>
      </Widget.List>
    </Widget>
  );
}
