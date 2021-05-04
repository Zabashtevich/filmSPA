import React, { useEffect, useState } from "react";

import { Widget } from "../../../components";
import { checkMovieInList } from "../../../utils";

export default function WidgetList({ item, data }) {
  const [rated, setRated] = useState(false);

  useEffect(() => {
    if (checkMovieInList(item.content, data.id)) {
      setRated(true);
    } else {
      setRated(false);
    }
  }, [data, item]);

  return (
    <Widget.Item>
      <Widget.Name>{item.name}</Widget.Name>
      <Widget.Heart visible={rated} />
    </Widget.Item>
  );
}
