import React, { useEffect, useState } from "react";

import { useEstimate } from "./../../../hooks";
import { Credits } from "../../../components";
import { useModalContext, useProcessContext } from "./../../../context";
import {
  checkMovieInList,
  checkReleaseStatus,
  createEstimateItem,
  createUserlist,
  getYearFromString,
  range,
} from "../../../utils";

export default function CreditsItem({ item, votes, profile }) {
  const [, { showModal }] = useModalContext();
  const [setEstimate] = useEstimate(profile?.displayName, "votes");
  const [{ processing }] = useProcessContext();
  const [popupVisible, setPopupVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [rated, setRated] = useState(null);

  useEffect(() => {
    setRated(checkMovieInList(votes, item.id)?.value || null);
  }, [votes]);

  const metaVisible = !!item.vote_average && !!item.vote_count;
  const released = checkReleaseStatus(item.release_date || item.first_air_date);

  function handleEstimate(value) {
    if (!profile) {
      showModal("Sorry but you cant vote, plese, login!");
    }
    if (!processing) {
      setEstimate(createUserlist(createEstimateItem(item, value), votes));
    }
  }

  return (
    <Credits.Item>
      <Credits.Year>
        {getYearFromString(item.release_date || item.first_air_date) || "-"}
      </Credits.Year>
      <Credits.Title title={item.name || item.title}>
        {item.name || item.title}
      </Credits.Title>
      <Credits.Meta>
        {metaVisible && (
          <Credits.Average value={item.vote_average}>
            {item.vote_average}
          </Credits.Average>
        )}
        {metaVisible && <Credits.Count>{item.vote_count}</Credits.Count>}
      </Credits.Meta>
      {rated && <Credits.Highscore>{rated}</Credits.Highscore>}
      {released && (
        <Credits.Rating onClick={() => setPopupVisible((prev) => !prev)}>
          <Credits.Star />
          <Credits.Container visible={popupVisible}>
            <Credits.Close />
            {range(1, 10).map((item) => (
              <Credits.Star
                key={item}
                onClick={() => handleEstimate(item)}
                onMouseEnter={() => setHoverIndex(item)}
                onMouseLeave={() => setHoverIndex(0)}
                hovered={hoverIndex >= item ? 1 : 0}
              />
            ))}
          </Credits.Container>
        </Credits.Rating>
      )}
    </Credits.Item>
  );
}
