import React, { useState } from "react";
import { DetailsPanel, StarRating } from "../../../components";

export default function DetailsPanelContainer({ overview }) {
  const [starValue, setStarValue] = useState(0);
  return (
    <DetailsPanel>
      <DetailsPanel.ContentWrapper>
        <DetailsPanel.Overview>{overview}</DetailsPanel.Overview>
      </DetailsPanel.ContentWrapper>
      <StarRating>
        <StarRating.Title>Rating</StarRating.Title>
        {[...Array(5)].map((_, i) => {
          return (
            <StarRating.Star
              indexValue={i + 1}
              starValue={starValue}
              setStarValue={setStarValue}
            />
          );
        })}
      </StarRating>
    </DetailsPanel>
  );
}
