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
          <DetailsPanel.Rating>
            {range(1, 10).map((item) => (
              <DetailsPanel.Star key={item} />
            ))}
            {metavisible && (
              <DetailsPanel.Meta>
                <DetailsPanel.Average value={data.vote_average}>
                  {data.vote_average}
                </DetailsPanel.Average>
                <DetailsPanel.Count>{data.vote_count}</DetailsPanel.Count>
              </DetailsPanel.Meta>
            )}
            <DetailsPanel.Uservote>
              <DetailsPanel.Row>
                <DetailsPanel.Subtitle>Your vote:</DetailsPanel.Subtitle>
                <DetailsPanel.Value>5</DetailsPanel.Value>
                <DetailsPanel.Delete>Delete</DetailsPanel.Delete>
              </DetailsPanel.Row>
              <DetailsPanel.Row>
                <DetailsPanel.Date>2021 20 2020</DetailsPanel.Date>
              </DetailsPanel.Row>
            </DetailsPanel.Uservote>
          </DetailsPanel.Rating>
        </DetailsPanel.Section>
      </DetailsPanel>
    )
  );
}
