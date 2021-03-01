import React, { useState, useEffect } from "react";

import { Widget } from "../../../components";
import {
  useFirelogicContext,
  useItemContext,
  useProcessContext,
} from "../../../context";
import { checkMovieInList, createListItem } from "../../../utils";

export default function WidgetItem({ list }) {
  const [movieInList, setMovieInList] = useState(false);
  const [{ setUserlistProps }] = useFirelogicContext();
  const [{ userlistProcess }] = useProcessContext();
  const [item] = useItemContext();

  function handleOnUserlist() {
    if (movieInList && !userlistProcess) {
      setUserlistProps({
        type: "delete from list",
        id: list.id,
        item: { id: item.id },
      });
    } else if (!movieInList && !userlistProcess) {
      setUserlistProps({
        type: "add to list",
        id: list.id,
        item: createListItem(item),
      });
    }
  }

  useEffect(() => {
    setMovieInList(checkMovieInList(list.content, item));
  }, [list, item]);

  return (
    <Widget.Element onClick={handleOnUserlist} disabled={userlistProcess}>
      <Widget.Name>{list.name.toUpperCase()}</Widget.Name>
      <Widget.Added visible={movieInList && !userlistProcess} />
      <Widget.Spinner visible={userlistProcess} />
    </Widget.Element>
  );
}
