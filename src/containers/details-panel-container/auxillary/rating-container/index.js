import React from "react";
import { DetailsPanel } from "../../../../components";

export default function RatingContainer({ average, votecount }) {
  return (
    <>
      <DetailsPanel.Rating>
        <DetailsPanel.Stars average={average} />
        <DetailsPanel.Average average={average}>{average}</DetailsPanel.Average>
        <DetailsPanel.Votes>{"/" + votecount}</DetailsPanel.Votes>
      </DetailsPanel.Rating>
      <DetailsPanel.UserRating>
        <DetailsPanel.UserWrapper>
          <DetailsPanel.UserTitle>Your vote:</DetailsPanel.UserTitle>
          <DetailsPanel.UserValue>1</DetailsPanel.UserValue>
          <DetailsPanel.Button>Delete</DetailsPanel.Button>
        </DetailsPanel.UserWrapper>
        <DetailsPanel.UserWrapper>
          <DetailsPanel.Time>2021 1</DetailsPanel.Time>
        </DetailsPanel.UserWrapper>
      </DetailsPanel.UserRating>
    </>
  );
}
