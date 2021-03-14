import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { Popular } from "../../components";
import { getYearFromString, range } from "../../utils";
import { usePopular } from "./../../hooks";
import { PopularSkeleton } from "./../../components/skeleton";

export default function PopularContainer({ type }) {
  const [scrollvalue, setScrollvalue] = useState(0);
  const [data, dataLoading] = usePopular(type, 1);

  return (
    <Popular>
      <Popular.Wrapper>
        <Popular.Title>{type.toUpperCase()}</Popular.Title>
      </Popular.Wrapper>
      <Popular.List
        onScroll={(e) => setScrollvalue(e.target.scrollLeft)}
        disabled={scrollvalue !== 0 && 1}
      >
        {!dataLoading &&
          data?.results.map((item) => {
            return (
              <CSSTransition key={item.id} timeout={500} classNames="fade">
                <PopularItem item={item} />
              </CSSTransition>
            );
          })}
        {range(1, 20).map((item) => (
          <CSSTransition key={item} timeout={500} classNames="fade">
            <PopularSkeleton />
          </CSSTransition>
        ))}
      </Popular.List>
    </Popular>
  );
}

function PopularItem({ item }) {
  const metavisible = !!item.vote_average || !!item.vote_count;

  return (
    <Popular.Item>
      <Popular.Poster src={item.poster_path || null} />
      <Popular.Info>
        <Popular.Row>
          <Popular.Subtitle>
            {item.title || item.orinal_title || item.name}
          </Popular.Subtitle>
          <Popular.Date>
            {getYearFromString(item.release_date || item.first_air_date)}
          </Popular.Date>
        </Popular.Row>
        {metavisible && (
          <Popular.Row>
            <Popular.Average>{item.vote_average}</Popular.Average>
            <Popular.Count>{item.vote_count}</Popular.Count>
          </Popular.Row>
        )}
      </Popular.Info>
    </Popular.Item>
  );
}
