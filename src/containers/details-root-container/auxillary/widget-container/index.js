import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Widget } from "../../../../components";

export default function WidgetContainer({ slug }) {
  const [popupVisible, setPopupVisible] = useState({
    categories: false,
    lists: false,
    input: false,
    form: false,
  });

  const userData = useSelector((state) => state.userData);

  const { categories, lists, input } = popupVisible;
  const { loading, userlists, favoritedMovies } = userData;

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
            <Widget.Added location={"middle"} />
            <Widget.Name>Userlist</Widget.Name>
          </Widget.Item>
          <Widget.Backdrop visible={lists}>
            {userlists.map(({ name, id }) => (
              <Widget.Element key={id}>
                <Widget.Name>{name.toUpperCase()}</Widget.Name>
                <Widget.Added />
              </Widget.Element>
            ))}
            <Widget.Element
              onClick={() =>
                setPopupVisible((prev) => ({ ...prev, input: !prev.input }))
              }
            >
              <Widget.Chevron dir={input ? "down" : "top"} />
              <Widget.Name>Create list</Widget.Name>
            </Widget.Element>
            <Widget.Form>
              <Widget.Wrapper>
                <Widget.Input />
                <Widget.OK>OK</Widget.OK>
                <Widget.Cancel>X</Widget.Cancel>
              </Widget.Wrapper>
              <Widget.Error>
                <Widget.Message>
                  List title length must be min 5 and max 10 symbols
                </Widget.Message>
              </Widget.Error>
            </Widget.Form>
          </Widget.Backdrop>
          <Widget.Item>
            <Widget.Name>Favorite</Widget.Name>
            <Widget.Added
              location={"middle"}
              visible={favoritedMovies.includes(slug)}
            />
          </Widget.Item>
        </Widget.Container>
      </Widget>
    )
  );
}
