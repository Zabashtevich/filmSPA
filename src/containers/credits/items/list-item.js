import React from "react";

import { Credits } from "../../../components";
import { getYearFromString, range } from "../../../utils";

export default function CreditsListItem({ item }) {
  const title = item.name || item.title;

  return (
    <Credits.Item>
      <Credits.Year>
        {getYearFromString(item.release_date || item.first_air_date) || "-"}
      </Credits.Year>
      <Credits.Icon />
      <Credits.Info>
        <Credits.Subtitle title={title}>
          {title.length > 25 ? title.slice(0, 25) + "..." : title}
        </Credits.Subtitle>
        {!!item.character && <Credits.Role>{item.character}</Credits.Role>}
      </Credits.Info>
      <Credits.Meta>
        <Credits.Average></Credits.Average>
        <Credits.Amount></Credits.Amount>
      </Credits.Meta>
      <Credits.Uservalue></Credits.Uservalue>
      <Credits.Wrapper>
        <Credits.Star />
        <Credits.Popup>
          <Credits.Close />
          {range(1, 10).map((item) => (
            <Credits.Star key={item} />
          ))}
        </Credits.Popup>
      </Credits.Wrapper>
    </Credits.Item>
  );
}
