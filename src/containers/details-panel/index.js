import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { createEstimateItem, range } from "./../../utils";
import { DetailsPanel } from "../../components";
import { useSelector } from "react-redux";
import { useEstimate, useFetch } from "../../hooks";
import { MovieListContainer } from "..";
import { DetailsCollectionSkeleton } from "../../components/skeleton";
import DetailsPanelUservote from "./items/uservote";
import DetailsPanelCollection from "./items/collection";

export default function DetailsPanelContainer() {
  const [setEstimate] = useEstimate();
  const [hoverIndex, setHoverIndex] = useState(0);
  const [uservote, setUservote] = useState(null);

  const { slug, direction } = useParams();
  const { loading, ratedMovies } = useSelector((state) => state.userData);
  const [data, dataLoading] = useFetch(direction, slug);

  const meta = !dataLoading && (!!data.vote_average || !!data.vote_count);
  const collection = !dataLoading && data?.belongs_to_collection;

  useEffect(() => {
    if (!loading && !dataLoading) {
      setUservote(ratedMovies.find((item) => +item.id === +slug));
    }
  }, [loading, dataLoading, ratedMovies]);

  console.log(data);

  return (
    <DetailsPanel>
      <DetailsCollectionSkeleton visible={dataLoading} />
      {collection && <DetailsPanelCollection collection={collection} />}
      <DetailsPanel.Title>Recommendation</DetailsPanel.Title>
      <MovieListContainer
        list={data?.recommendations.results || []}
        loading={dataLoading}
      />
      <DetailsPanel.Title>Rating</DetailsPanel.Title>
      <DetailsPanel.Section>
        <DetailsPanel.Rating>
          {range(1, 10).map((item) => (
            <DetailsPanel.Star
              key={item}
              active={hoverIndex >= item ? 1 : 0}
              onMouseEnter={() => setHoverIndex(item)}
              onMouseLeave={() => setHoverIndex(0)}
              onClick={() =>
                setEstimate({
                  type: "rate",
                  value: createEstimateItem(data, item, direction),
                })
              }
            />
          ))}
          {meta && (
            <DetailsPanel.Meta>
              <DetailsPanel.Average value={data.vote_average}>
                {data.vote_average}
              </DetailsPanel.Average>
              <DetailsPanel.Count>{data.vote_count}</DetailsPanel.Count>
            </DetailsPanel.Meta>
          )}
          {uservote && <DetailsPanelUservote uservote={uservote} />}
        </DetailsPanel.Rating>
      </DetailsPanel.Section>
    </DetailsPanel>
  );
}
