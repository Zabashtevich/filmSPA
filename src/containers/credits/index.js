import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Credits } from "../../components";
import { sortMoviesByDate } from "../../utils";
import CreditsListItem from "./items/list-item";

export default function CreditsContainer({ list, loading }) {
  const { userDataLoading } = useSelector((state) => state.userData);
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
        {!userDataLoading &&
          sortMoviesByDate(list).map((item) => (
            <CreditsListItem key={item.id} item={item} />
          ))}
      </Credits.List>
    </Credits>
  );
}
