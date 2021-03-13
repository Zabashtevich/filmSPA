import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { Popular } from "../../components";
import { getYearFromString } from "../../utils";
import { usePopular } from "./../../hooks";

export default function PopularContainer({ type }) {
  const [data, dataLoading] = usePopular(type, 1);

  console.log(data);
  return (
    <Popular>
      <Popular.Wrapper>
        <Popular.Title>{type.toUpperCase()}</Popular.Title>
      </Popular.Wrapper>
      <Popular.List>
        {!dataLoading &&
          data?.results.map((item) => {
            console.log(item);
            const metavisible = !!item.vote_average || !!item.vote_count;
            return (
              <CSSTransition key={item.id} timeout={500} classNames="fade">
                <Popular.Item>
                  <Popular.Poster src={item.poster_path || null} />
                  {metavisible && (
                    <Popular.Meta>
                      <Popular.Average>{item.vote_average}</Popular.Average>
                      <Popular.Count>{item.vote_count}</Popular.Count>
                    </Popular.Meta>
                  )}
                  <Popular.Info>
                    <Popular.Subtitle>
                      {item.title || item.orinal_title || item.name}
                    </Popular.Subtitle>
                    <Popular.Date>
                      {getYearFromString(
                        item.release_date || item.first_air_date,
                      )}
                    </Popular.Date>
                  </Popular.Info>
                </Popular.Item>
              </CSSTransition>
            );
          })}
      </Popular.List>
    </Popular>
  );
}
