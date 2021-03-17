import React, { useState } from "react";

import { Credits } from "../../components";
import { sortMoviesByDate } from "../../utils";
import CreditsListItem from "./items/list-item";

export default function CreditsContainer({ list, loading }) {
  const [selected, setSelected] = useState("all");

  return (
    <Credits>
      <Credits.Header>
        <Credits.Title>Credits</Credits.Title>
        <Credits.Select>
          {["all", "tv", "movie"]
            .filter((item) => item !== selected)
            .map((item) => (
              <Credits.Option key={item}>{item}</Credits.Option>
            ))}
        </Credits.Select>
      </Credits.Header>
      <Credits.List>
        {!loading && sortMoviesByDate(list).map((item) => <CreditsListItem />)}
      </Credits.List>
    </Credits>
  );
}
