import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { DetailsPanel } from "../../../components";
import { useNoticeContext } from "../../../context";
import { useEstimate } from "../../../hooks";
import {
  checkMovieInList,
  createEstimateItem,
  getCorrectDate,
  range,
} from "../../../utils";

export default function DetailsPanelRating({ data, loading }) {
  const [{ estimating }] = useNoticeContext();
  const [, setEstimateProps] = useEstimate();
  const { userDataLoading, ratedMovies } = useSelector(
    (state) => state.userData,
  );
  const [starHoverValue, setStarHoverValue] = useState(0);
  const { direction, slug } = useParams();

  const movieIsRated = !userDataLoading && checkMovieInList(ratedMovies, slug);
  const metaExist = !loading && !!data.vote_count;

  function handleEstimate(value) {
    if (!estimating) {
      setEstimateProps(createEstimateItem(data, value, direction));
    }
  }

  return (
    <DetailsPanel.Subsection>
      <DetailsPanel.Rating>
        {range(1, 10).map((item) => (
          <DetailsPanel.Star
            key={item}
            onMouseEnter={() => setStarHoverValue(item)}
            onMouseLeave={() => setStarHoverValue(0)}
            selected={starHoverValue >= item && 1}
            onClick={() => handleEstimate(item)}
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
