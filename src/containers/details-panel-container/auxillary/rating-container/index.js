import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { DetailsPanel } from "../../../../components";
import { useMetalogicContext, useModalContext } from "../../../../context";
import { getCorrectDate } from "../../../../utils";

export default function RatingContainer({ list }) {
  const [metalogicInterface] = useMetalogicContext();
  const [modalstate, modalinterface] = useModalContext();
  const userData = useSelector((store) => store.userData);

  const [isRated, setIsRated] = useState({
    rated: false,
    value: null,
    time: null,
  });

  const { accepted } = modalstate;
  const { showConfirmModal } = modalinterface;
  const { loading, ratedMovies } = userData;
  const { rated, value, time } = isRated;
  const { setEstimatingProps } = metalogicInterface;

  useEffect(() => {
    if (!loading) {
      const result = ratedMovies.find((item) => +item.id === +list.id);
      if (result) {
        setIsRated({ rated: true, value: result.value, time: result.time });
      }
    }
  }, [loading, ratedMovies]);

  useEffect(() => {
    if (accepted) {
      setEstimatingProps({ type: "unrate", value: list.id });
    }
  }, [accepted]);

  const rate = (value) => {
    setEstimatingProps({
      type: "rate",
      value: {
        date: list.released_date,
        id: list.id,
        time: getCorrectDate(),
        title: list.title,
        vote_average: list.vote_average,
        vote_count: list.vote_count,
        value,
      },
    });
  };

  return (
    <>
      <DetailsPanel.Rating>
        <DetailsPanel.Stars average={list.vote_average} rate={rate} />
        <DetailsPanel.Average average={list.vote_average}>
          {list.vote_average}
        </DetailsPanel.Average>
        <DetailsPanel.Votes>{"/" + list.vote_count}</DetailsPanel.Votes>
      </DetailsPanel.Rating>
      {rated && (
        <DetailsPanel.UserRating>
          <DetailsPanel.UserWrapper>
            <DetailsPanel.UserTitle>Your vote:</DetailsPanel.UserTitle>
            <DetailsPanel.UserValue>{value}</DetailsPanel.UserValue>
            <DetailsPanel.Button
              onClick={() =>
                showConfirmModal("Are you sure you want to delete your vote?")
              }
            >
              Delete
            </DetailsPanel.Button>
          </DetailsPanel.UserWrapper>
          <DetailsPanel.UserWrapper>
            <DetailsPanel.Time>{time}</DetailsPanel.Time>
          </DetailsPanel.UserWrapper>
        </DetailsPanel.UserRating>
      )}
    </>
  );
}
