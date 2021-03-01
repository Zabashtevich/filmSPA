import React, { useState, useEffect } from "react";

import { Widget } from "../../../components";
import { useFirelogicContext, useProcessContext } from "../../../context";
import { checkMovieInList, createUserlistItem } from "../../../utils";

export default function WidgetItem({ list, item }) {
  const [movieInList, setMovieInList] = useState(false);
  const [{ setUserlistProps }] = useFirelogicContext();
  const [{ userlistProcess }] = useProcessContext();

  function handleOnUserlist() {
    if (movieInList) {
      setUserlistProps({
        type: "delete from list",
        id: list.id,
        item: { id: item.id },
      });
      setMovieInList(false);
    } else {
      setUserlistProps({
        type: "add to list",
        id: list.id,
        item: createUserlistItem(item),
      });
    }
  }

  useEffect(() => {
    setMovieInList(checkMovieInList(list, item));
  }, [list, item]);

  return (
    <Widget.Element onClick={handleOnUserlist} disabled={userlistProcess}>
      <Widget.Name>{list.name.toUpperCase()}</Widget.Name>
      <Widget.Added visible={movieInList && !userlistProcess} />
      <Widget.Spinner visible={userlistProcess} />
    </Widget.Element>
  );
}
