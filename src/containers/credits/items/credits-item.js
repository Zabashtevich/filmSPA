import React, { useEffect, useState } from "react";

import { useEstimate } from "./../../../hooks";
import { Credits } from "../../../components";
import { useProcessContext } from "./../../../context";
import {
  checkMovieInList,
  checkReleaseStatus,
  createEstimateItem,
  createUserlist,
  getYearFromString,
  range,
} from "../../../utils";
import { useSelector } from "react-redux";

export default function CreditsItem({ item, index }) {
  const { userDataExist, lists, profile } = useSelector(
    (state) => state.userData,
  );
  const [setEstimate] = useEstimate(profile?.displayName, "votes");
  const [{ processing }] = useProcessContext();
  const [popupVisible, setPopupVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [rated, setRated] = useState(null);

  useEffect(() => {
    if (userDataExist) {
      setRated(checkMovieInList(lists.votes, item.id)?.value || null);
    }
  }, [lists]);

  const metaVisible = !!item.vote_average && !!item.vote_count;
  const released = checkReleaseStatus(item.release_date || item.first_air_date);
  const typeSecondary = index % 2 === 0;

  function handleEstimate(value) {
    if (!processing && userDataExist) {
      setEstimate(createUserlist(createEstimateItem(item, value), lists.votes));
    }
  }

  return (
    <Credits.Item typeSecondary={typeSecondary}>
      <Credits.Year>
        {getYearFromString(item.release_date || item.first_air_date) || "-"}
      </Credits.Year>
      <Credits.Title
        title={item.name || item.title}
        to={`/details/${item.type}/${item.id}`}
      >
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
        <Credits.Rating
          onClick={() => setPopupVisible((prev) => !prev)}
          data-testid="rating"
        >
          <Credits.Star />
          <Credits.Container
            visible={popupVisible}
            data-testid="rating-container"
          >
            <Credits.Close />
            {range(1, 10).map((item) => (
              <Credits.Star
                key={item}
                onClick={() => handleEstimate(item)}
                onMouseEnter={() => setHoverIndex(item)}
                onMouseLeave={() => setHoverIndex(0)}
                hovered={hoverIndex >= item ? 1 : 0}
                data-testid="rating-star"
              />
            ))}
          </Credits.Container>
        </Credits.Rating>
      )}
    </Credits.Item>
  );
}
