import React, { useState } from "react";

import { Widget } from "../../../../components";

export default function WidgetContainer() {
  const [popupVisible, setPopupVisible] = useState({
    categories: false,
    lists: false,
    favorite: false,
  });

  const { categories, lists, favorite } = popupVisible;

  return (
    <Widget>
      <Widget.Title>Add to list</Widget.Title>
      <Widget.Button
        onClick={() =>
          setPopupVisible((prev) => ({ ...prev, categories: !prev.categories }))
        }
      >
        <Widget.Arrow dir={categories ? null : "down"} />
      </Widget.Button>
      <Widget.Container>
        <Widget.Subtitle>Add to list</Widget.Subtitle>
        <Widget.Item
          onClick={() =>
            setPopupVisible((prev) => ({ ...prev, lists: !prev.lists }))
          }
        >
          <Widget.Chevron dir={lists ? "rotate" : "default"} />
          <Widget.Name>Userlist</Widget.Name>
          <Widget.Backdrop>
            <Widget.Element>
              <Widget.Name></Widget.Name>
              <Widget.Arrow />
            </Widget.Element>
          </Widget.Backdrop>
        </Widget.Item>
        <Widget.Item>
          <Widget.Chevron />
          <Widget.Name>Favorite</Widget.Name>
        </Widget.Item>
      </Widget.Container>
    </Widget>
  );
}
