import React, { useState, useEffect } from "react";

import { Widget } from "../../../components";
import { useFirelogicContext } from "../../../context";
import { checkMovieInList } from "../../../utils";

export default function WidgetItem({ list, item }) {
  const [movieInList, setMovieInList] = useState(checkMovieInList(list, item));
  const [{ setUserlistProps }] = useFirelogicContext();

  function handleOnUserlist() {
    if (movieInList) {
      setUserlistProps({ type: "delete from list", id: list.id });
    }
  }

  return (
    <Widget.Element>
      <Widget.Name>{list.name.toUpperCase()}</Widget.Name>
      <Widget.Added visible={movieInList} />
    </Widget.Element>
  );
}
