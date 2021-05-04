import React, { useEffect, useState } from "react";

import { useList } from "./../../../hooks";
import { Widget } from "../../../components";
import { checkMovieInList, userlist, createVote } from "../../../utils";

export default function WidgetList({ item, data, userlists }) {
  const [setList] = useList("userlists");
  const [rated, setRated] = useState(false);

  useEffect(() => {
    if (checkMovieInList(item.content, data.id)) {
      setRated(true);
    } else {
      setRated(false);
    }
  }, [data, item]);

  function estimateHandler() {
    if (rated) {
      setList(userlist.removeItem(item, userlists, data));
    } else {
      setList(userlist.addItem(item, userlists, createVote(data)));
    }
  }

  return (
    <Widget.Item onClick={estimateHandler}>
      <Widget.Name>{item.name}</Widget.Name>
      <Widget.Heart visible={rated} />
    </Widget.Item>
  );
}
