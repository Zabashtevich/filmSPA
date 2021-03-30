import React, { useState } from "react";

import { useCreditsContext } from "./../../context";
import { Credits } from "./../../components";
import { getYearFromString, range } from "../../utils";

export default function CreditsContainer() {
  const [{ array, loading }] = useCreditsContext();

  return (
    <Credits>
      {!loading &&
        array.map((item, index) => {
          return <CreditsItem key={item.id} item={item} index={index} />;
        })}
    </Credits>
  );
}

function CreditsItem({ item, index }) {
  const [ratingVisible, setRatingVisible] = useState(false);
  const [widgetVisible, setWidgetVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const metaVisible = !!item.vote_count && !!item.vote_average;

  return (
    <Credits.Item>
      <Credits.Number>{index + 1}</Credits.Number>
      <Credits.Year>{getYearFromString(item.release_date)}</Credits.Year>
      <Credits.Title>{item.title}</Credits.Title>
      {metaVisible && (
        <Credits.Meta>
          <Credits.Average value={item.vote_average}>
            {item.vote_average}
          </Credits.Average>
          <Credits.Amount>{item.vote_count}</Credits.Amount>
        </Credits.Meta>
      )}
      <Credits.Value value={item.value}>{item.value}</Credits.Value>
      <Credits.Wrapper>
        <Credits.Rating onClick={() => setRatingVisible((prev) => !prev)}>
          <Credits.Star />
          <Credits.Popup visible={ratingVisible}>
            <Credits.Close />
            {range(1, 10).map((item) => (
              <Credits.Star
                key={item}
                onMouseEnter={() => setHoverIndex(item)}
                onMouseLeave={() => setHoverIndex(0)}
                selected={hoverIndex >= item && 1}
              />
            ))}
          </Credits.Popup>
        </Credits.Rating>
        <Credits.Widget>
          <Credits.Arrow />
          <Credits.Popup>
            <Credits.Name></Credits.Name>
            <Credits.Favorite></Credits.Favorite>
            <Credits.Subtitle></Credits.Subtitle>
            <Credits.Userlist></Credits.Userlist>
          </Credits.Popup>
        </Credits.Widget>
      </Credits.Wrapper>
    </Credits.Item>
  );
}
