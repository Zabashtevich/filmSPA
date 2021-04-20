import React, { useState } from "react";
import { useParams } from "react-router";

import { DetailsPanel } from "../../../components";
import { useProcessContext } from "../../../context";
import { useEstimate } from "../../../hooks";
import {
  checkMovieInList,
  createEstimateItem,
  createUserlist,
  getCorrectDate,
  range,
} from "../../../utils";

export default function PanelRating({ data, profile, votes }) {
  const [doEstimate] = useEstimate(profile?.displayName, "votes");
  const [hoverIndex, setHoverIndex] = useState(0);
  const { direction, slug } = useParams();

  const movieIsRated = checkMovieInList(votes, slug);
  const metaExist = !!data.vote_count;

  function handleEstimate(value) {
    doEstimate(
      createUserlist(createEstimateItem(data, value, direction), votes),
    );
  }

  function unVoteElement() {
    doEstimate(votes.filter((item) => item.id !== +slug));
  }

  return (
    <DetailsPanel.Subsection data-testid="details-rating-container">
      <DetailsPanel.Rating>
        {range(1, 10).map((item) => (
          <DetailsPanel.Star
            key={item}
            onMouseEnter={() => setHoverIndex(item)}
            onMouseLeave={() => setHoverIndex(0)}
            selected={hoverIndex >= item && 1}
            onClick={() => handleEstimate(item)}
            data-testid="star-rating"
          />
        ))}
      </DetailsPanel.Rating>
      {metaExist && (
        <DetailsPanel.Meta>
          <DetailsPanel.Average
            value={data.vote_average}
            data-testid="rating-average"
          >
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
            <DetailsPanel.Delete onClick={unVoteElement}>
              DELETE
            </DetailsPanel.Delete>
          </DetailsPanel.Wrapper>
        </>
      )}
    </DetailsPanel.Subsection>
  );
}
