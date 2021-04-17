import React from "react";
import { Bar } from "../../../components";

export default function BarForm() {
  return (
    <Bar.Container>
      <Bar.Form>
        <Bar.Input />
        <Bar.Search />
        <Bar.Submit />
      </Bar.Form>
    </Bar.Container>
  );
}
