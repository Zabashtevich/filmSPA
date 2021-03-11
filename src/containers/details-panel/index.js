import React, { useState } from "react";
import { useParams } from "react-router";

import { range } from "./../../utils";
import { DetailsPanel } from "../../components";
import { useSelector } from "react-redux";
import { useFetch } from "../../hooks";
import { MovieListContainer } from "..";

export default function DetailsPanelContainer() {
  const [hoverIndex, setHoverIndex] = useState(0);
  const { slug, direction } = useParams();
  const { loading, ratedMovies } = useSelector((state) => state.userData);
  const [data, dataLoading] = useFetch(direction, slug);

  const metavisible =
    !dataLoading && (!!data.vote_average || !!data.vote_count);

  return (
    !dataLoading && (
      <DetailsPanel>
        <DetailsPanel.Title>Recommendation</DetailsPanel.Title>
        <MovieListContainer
          list={data?.recommendations.results || []}
          loading={dataLoading}
        />
        <DetailsPanel.Title>Rating</DetailsPanel.Title>
        <DetailsPanel.Section>
          {range(1, 10).map((item) => (
            <DetailsPanel.Star
              key={item}
              onMouseEnter={() => setHoverIndex(item)}
              onMouseLeave={() => setHoverIndex(0)}
              active={hoverIndex >= item ? 1 : 0}
            />
          ))}
          {metavisible && (
            <DetailsPanel.Meta>
              <DetailsPanel.Average value={data.vote_average}>
                {data.vote_average}
              </DetailsPanel.Average>
              <DetailsPanel.Count>{data.vote_count}</DetailsPanel.Count>
            </DetailsPanel.Meta>
          )}
          <DetailsPanel.Rating>
            <DetailsPanel.Wrapper>
              <DetailsPanel.Subtitle>Your vote:</DetailsPanel.Subtitle>
              <DetailsPanel.Delete>Delete vote</DetailsPanel.Delete>
            </DetailsPanel.Wrapper>
            <DetailsPanel.Wrapper>
              <DetailsPanel.Value>5</DetailsPanel.Value>
              <DetailsPanel.Date>2 10 2020</DetailsPanel.Date>
            </DetailsPanel.Wrapper>
          </DetailsPanel.Rating>
        </DetailsPanel.Section>
      </DetailsPanel>
    )
  );
}
