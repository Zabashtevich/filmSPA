import React, { useState } from "react";

import { Widget } from "../../../../components";

export default function WidgetContainer({
  userlist = [{ name: "hahahaha", id: 2 }],
}) {
  const [popupVisible, setPopupVisible] = useState({
    categories: false,
    lists: false,
    favorite: false,
  });

  const { categories, lists, favorite } = popupVisible;

  function categoriesToggler(classes) {
    const classlist = ["Face", "Title", "Button", "Arrow"];
    if (classlist.some((elem) => classes.includes(elem))) {
      setPopupVisible((prev) => ({ ...prev, categories: !prev.categories }));
    }
  }

  return (
    <Widget onClick={(e) => categoriesToggler(e.target.classList.value)}>
      <Widget.Title>Add to list</Widget.Title>
      <Widget.Button>
        <Widget.Arrow dir={categories ? null : "down"} />
      </Widget.Button>
      <Widget.Container>
        <Widget.Subtitle>Add to list</Widget.Subtitle>
        <Widget.Item
          onClick={() =>
            setPopupVisible((prev) => ({ ...prev, lists: !prev.lists }))
          }
        >
          <Widget.Chevron dir={lists && "rotate"} />
          <Widget.Name>Userlist</Widget.Name>
          <Widget.Backdrop>
            {userlist.map(({ name }) => (
              <Widget.Element>
                <Widget.Name>{name.toUpperCase()}</Widget.Name>
              </Widget.Element>
            ))}
          </Widget.Backdrop>
        </Widget.Item>
        <Widget.Item>
          <Widget.Name>Favorite</Widget.Name>
        </Widget.Item>
      </Widget.Container>
    </Widget>
  );
}
