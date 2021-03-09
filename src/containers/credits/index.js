import React, { useEffect, useState } from "react";
import { Credits } from "../../components";
import { CreditsSelect } from "../../constants/constants";
import { sortMoviesByDate, splitByType, splitDate } from "../../utils";

export default function CreditsContainer({ list }) {
  const [{ value, visible }, setPopup] = useState({
    value: "All",
    visible: false,
  });
  const [array, setArray] = useState(list);

  return (
    <Credits>
      <Credits.Header>
        <Credits.Title>Filmography</Credits.Title>
        <Credits.Select
          onClick={() => setPopup((prev) => ({ ...prev, visible: !visible }))}
        >
          {value}
          <Credits.Arrow rotate={visible ? 1 : 0} />
          <Credits.Popup visible={visible}>
            {CreditsSelect.filter((item) => item.value !== value).map(
              ({ id, value }) => (
                <Credits.Value
                  key={id}
                  onClick={() => setPopup({ value, visible: false })}
                >
                  {value}
                </Credits.Value>
              ),
            )}
          </Credits.Popup>
        </Credits.Select>
      </Credits.Header>
      <Credits.List>
        {sortMoviesByDate(array).map((item) => (
          <Credits.Item key={item.id}>
            <Credits.Year>
              {splitDate(item.first_air_date || item.release_date) || "-"}
            </Credits.Year>
            <Credits.Icon />
            <Credits.Wrapper>
              <Credits.Title>
                {item.title || item.name || item.orinal_title || "unknown"}
              </Credits.Title>
              <Credits.Role>{item.character}</Credits.Role>
            </Credits.Wrapper>
            <Credits.Meta>
              <Credits.Average>{item.vote_average}</Credits.Average>
              <Credits.Amount>{item.vote_count}</Credits.Amount>
            </Credits.Meta>
            <Credits.Rating></Credits.Rating>
            <Credits.Button>
              <Credits.Star />
              <Credits.Arrow />
            </Credits.Button>
          </Credits.Item>
        ))}
      </Credits.List>
    </Credits>
  );
}
