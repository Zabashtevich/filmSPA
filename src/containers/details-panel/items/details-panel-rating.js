import React, { useState } from "react";
import { useSelector } from "react-redux";

import { DetailsPanel } from "../../../components";
import { checkMovieInList, getCorrectDate, range } from "../../../utils";

export default function DetailsPanelRating({ loading, data, slug }) {
  const [starHoverValue, setStarHoverValue] = useState(0);
  const { userDataLoading, ratedMovies } = useSelector(
    (state) => state.userData,
  );

  const movieIsRated = !userDataLoading && checkMovieInList(ratedMovies, slug);
  const metaExist = !loading && !!data.vote_count;

  return (
    <DetailsPanel.Subsection>
      <DetailsPanel.Rating>
        {range(1, 10).map((item) => (
          <DetailsPanel.Star
            key={item}
            onMouseEnter={() => setStarHoverValue(item)}
            onMouseLeave={() => setStarHoverValue(0)}
            selected={starHoverValue >= item && 1}
          />
        ))}
      </DetailsPanel.Rating>
      {metaExist && (
        <DetailsPanel.Meta>
          <DetailsPanel.Average value={data.vote_average}>
            {data.vote_average}
          </DetailsPanel.Average>
          <DetailsPanel.Count>{data.vote_count}</DetailsPanel.Count>
        </DetailsPanel.Meta>
      )}
      {movieIsRated && (
        <>
          <DetailsPanel.Value>{movieIsRated.value}</DetailsPanel.Value>
          <DetailsPanel.Wrapper>
            <DetailsPanel.Date>
              {getCorrectDate(movieIsRated.date)}
            </DetailsPanel.Date>
            <DetailsPanel.Delete>DELETE</DetailsPanel.Delete>
          </DetailsPanel.Wrapper>
        </>
      )}
    </DetailsPanel.Subsection>
  );
}
