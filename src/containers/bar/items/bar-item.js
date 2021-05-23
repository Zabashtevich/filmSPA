import React from "react";
import { Bar } from "../../../components";

export default function BarItem({ item, setSearchActive }) {
  return (
    <Bar.Item
      key={item.id}
      to={
        item.media_type === "person"
          ? `/actor/${item.id}`
          : `/details/${item.media_type}/${item.id}`
      }
      onClick={() => setSearchActive(false)}
    >
      <Bar.Content>
        {item.media_type === "movie" || item.media_type === "tv" ? (
          <Bar.Movie data-testid="bar-movie" />
        ) : item.media_type === "person" ? (
          <Bar.Person data-testid="bar-person" />
        ) : (
          <Bar.Search data-testid="bar-search" />
        )}
        <Bar.Name>{item.title || item.name}</Bar.Name>
      </Bar.Content>
    </Bar.Item>
  );
}
