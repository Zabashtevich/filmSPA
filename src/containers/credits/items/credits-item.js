import React, { useEffect, useState } from "react";
import { Credits } from "../../../components";
import { checkMovieInList, getYearFromString } from "../../../utils";

export default function CreditsItem({ item, type, ratedmovies }) {
  const [rated, setRated] = useState(null);

  useEffect(() => {
    setRated(checkMovieInList(item.id, ratedmovies).value ?? null);
  }, [ratedmovies]);

  const metaVisible = !!item.vote_average && !!item.vote_count;
  return (
    <Credits.Item>
      <Credits.Year>
        {getYearFromString(item.release_date || item.first_air_date) || "-"}
      </Credits.Year>
      <Credits.Devider />
      {type === "actor" && (
        <Credits.Description>
          <Credits.Title>{item.name || item.title}</Credits.Title>
          <Credits.Subtitle>{item.character}</Credits.Subtitle>
        </Credits.Description>
      )}
      {type === "profile" && (
        <Credits.Title>{item.name || item.title}</Credits.Title>
      )}
      <Credits.Meta>
        {metaVisible && <Credits.Average>{item.vote_average}</Credits.Average>}
        {metaVisible && <Credits.Count>{item.vote_count}</Credits.Count>}
      </Credits.Meta>
      {rated && <Credits.Highscore>{rated}</Credits.Highscore>}
      <Credits.Rating>
        <Credits.Star />
        <Credits.Container>
          <Credits.Close />
          <Credits.Star />
        </Credits.Container>
      </Credits.Rating>
    </Credits.Item>
  );
}
