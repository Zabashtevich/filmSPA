import React from "react";
import { Bar } from "../../../components";

export default function BarItem({ item }) {
  console.log(item);
  return (
    <Bar.Item key={item.id}>
      <Bar.Content>
        <Bar.Search />
        <Bar.Name>{item.title || item.name}</Bar.Name>
      </Bar.Content>
    </Bar.Item>
  );
}
