import React from "react";

import { useCreditsContext } from "./../../context";
import { Credits } from "./../../components";
import { getYearFromString } from "../../utils";

export default function CreditsContainer() {
  const [{ array, loading }] = useCreditsContext();

  return (
    <Credits>
      {!loading &&
        array.map((item, index) => {
          const metaVisible = !!item.vote_count && !!item.vote_average;

          return (
            <Credits.Item key={item.id}>
              <Credits.Number>{index + 1}</Credits.Number>
              <Credits.Year>
                {getYearFromString(item.release_date)}
              </Credits.Year>
              <Credits.Title>{item.title}</Credits.Title>
              {metaVisible && (
                <Credits.Meta>
                  <Credits.Average>{item.vote_average}</Credits.Average>
                  <Credits.Amount>{item.vote_count}</Credits.Amount>
                </Credits.Meta>
              )}
              <Credits.Value>{item.value}</Credits.Value>
              <Credits.Rating>
                <Credits.Star />
                <Credits.Popup>
                  <Credits.Star />
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
            </Credits.Item>
          );
        })}
    </Credits>
  );
}
