import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Widget } from "../../components";
import WidgetFavorite from "./items/widget-favorite";
import WidgetItem from "./items/widget-item";

export default function WidgetContainer() {
  const { loading, userlists } = useSelector((state) => state.userData);
  const { profile } = useSelector((state) => state.userProfile);

  const [popupVisible, setPopupVisible] = useState({
    categories: false,
    lists: false,
    form: false,
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
    !loading && (
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
            <Widget.Name>Userlist</Widget.Name>
          </Widget.Item>
          <Widget.Backdrop visible={lists}>
            {userlists.map((list) => (
              <WidgetItem key={list.id} list={list} />
            ))}
            <Widget.Wrapper>
              <Widget.Chevron />
              <Widget.Link to={`/account/${profile.displayName}/lists`}>
                Create and edit list
              </Widget.Link>
            </Widget.Wrapper>
          </Widget.Backdrop>
          <WidgetFavorite />
        </Widget.Container>
      </Widget>
    )
  );
}
