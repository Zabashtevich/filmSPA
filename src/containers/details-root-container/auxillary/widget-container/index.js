import React from "react";

import { Widget } from "../../../../components";

export default function WidgetContainer() {
  return (
    <Widget>
      <Widget.Title></Widget.Title>
      <Widget.Button>
        <Widget.Arrow />
      </Widget.Button>
      <Widget.Container>
        <Widget.Title>Add to list</Widget.Title>
        <Widget.Item>
          <Widget.Arror />
          <Widget.Subtitle>Userlist</Widget.Subtitle>
          <Widget.Backdrop>
            <Widget.Element>
              <Widget.Subtitle></Widget.Subtitle>
              <Widget.Arrow />
            </Widget.Element>
          </Widget.Backdrop>
        </Widget.Item>
        <Widget.Item>
          <Widget.Arror />
          <Widget.Subtitle>Favorite</Widget.Subtitle>
        </Widget.Item>
      </Widget.Container>
    </Widget>
  );
}
