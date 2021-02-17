import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { DetailsPanel } from "../../../../components";
import { useModalContext } from "../../../../context";
import { useRate } from "../../../../hooks";

export default function RatingContainer({ list }) {
  const userData = useSelector((store) => store.userData);
  const { slug } = useParams();
  const [, modalinterface] = useModalContext();
  const [setSettings] = useRate();

  const [isRated, setIsRated] = useState({
    rated: false,
    value: null,
    time: null,
  });

  const { showModal } = modalinterface;
  const { loading, ratedMovies } = userData;
  const { rated, value, time } = isRated;

  useEffect(() => {
    if (!loading) {
      const result = ratedMovies.find((item) => +item.id === slug);
      if (result) {
        setIsRated({ rated: true, value: result.value, time: result.time });
      }
    }
  }, [loading, ratedMovies, slug]);

  const handleRate = (value) => {
    setSettings({ value, item: list, setted: true });
  };

  return (
    <>
      <DetailsPanel.Rating>
        <DetailsPanel.Stars
          average={list.vote_average}
          handleRate={handleRate}
        />
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
                showModal("remove", "Are you sure you want to unrate?", {
                  id: slug,
                  target: "vote",
                  //TODO UNRATE LOGIC IN MODAL CONTEXT
                })
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
