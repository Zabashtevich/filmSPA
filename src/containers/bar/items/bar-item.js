import React from "react";
import { Bar } from "../../../components";

export default function BarItem({ item }) {
  return (
    <Bar.Item
      key={item.id}
      to={
        item.media_type === "person"
          ? `/actor/${item.id}`
          : `/details/${item.media_type}/${item.id}`
      }
    >
      <Bar.Content>
        {item.media_type === "movie" || item.media_type === "tv" ? (
          <Bar.Movie />
        ) : item.media_type === "person" ? (
          <Bar.Person />
        ) : (
          <Bar.Search />
        )}
        <Bar.Name>{item.title || item.name}</Bar.Name>
      </Bar.Content>
    </Bar.Item>
  );
}
