import React from "react";

import { Widget } from "../../../components";

export default function WidgetItem({ item }) {
  console.log(item);
  return (
    <Widget.Element>
      <Widget.Name>{item.name.toUpperCase()}</Widget.Name>
      <Widget.Added />
    </Widget.Element>
  );
}
