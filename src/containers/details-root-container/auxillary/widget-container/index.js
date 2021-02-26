import React, { useState } from "react";

import { Widget } from "../../../../components";

export default function WidgetContainer({
  userlist = [{ name: "hahahaha", id: 2 }, { name: "hehehehe" }],
}) {
  const [popupVisible, setPopupVisible] = useState({
    categories: false,
    lists: false,
  });

  const { categories, lists } = popupVisible;

  function categoriesToggler(classes) {
    if (
      ["Face", "Title", "Button", "Arrow"].some((elem) =>
        classes.includes(elem),
      )
    ) {
      if (lists) {
        new Promise((resolve) => {
          setPopupVisible((prev) => ({
            ...prev,
            lists: false,
          }));
          setTimeout(() => resolve(), 500);
        }).then(() =>
          setPopupVisible((prev) => ({
            ...prev,
            categories: !prev.categories,
          })),
        );
      } else {
        setPopupVisible((prev) => ({
          ...prev,
          categories: !prev.categories,
        }));
      }
    }
  }

  return (
    <Widget onClick={(e) => categoriesToggler(e.target.classList.value)}>
      <Widget.Title>Add to list</Widget.Title>
      <Widget.Button>
        <Widget.Arrow dir={categories ? "down" : null} />
      </Widget.Button>
      <Widget.Container visible={categories}>
        <Widget.Subtitle>Add to list</Widget.Subtitle>
        <Widget.Item
          onClick={() =>
            setPopupVisible((prev) => ({ ...prev, lists: !prev.lists }))
          }
        >
          <Widget.Chevron dir={lists ? "rotate" : null} />
          <Widget.Added location={"middle"} />
          <Widget.Name>Userlist</Widget.Name>
        </Widget.Item>
        <Widget.Backdrop visible={lists}>
          {userlist.map(({ name }) => (
            <Widget.Element>
              <Widget.Name>{name.toUpperCase()}</Widget.Name>
              <Widget.Added />
            </Widget.Element>
          ))}
        </Widget.Backdrop>
        <Widget.Item>
          <Widget.Name>Favorite</Widget.Name>
          <Widget.Added location={"middle"} />
        </Widget.Item>
      </Widget.Container>
    </Widget>
  );
}
