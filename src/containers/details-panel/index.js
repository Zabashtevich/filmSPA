import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { createEstimateItem, range } from "./../../utils";
import { DetailsPanel } from "../../components";
import { useSelector } from "react-redux";
import { useEstimate, useFetch } from "../../hooks";
import { MovieListContainer, ReviewContainer } from "..";
import { DetailsCollectionSkeleton } from "../../components/skeleton";
import DetailsPanelUservote from "./items/uservote";
import DetailsPanelCollection from "./items/collection";

export default function DetailsPanelContainer() {
  const [setEstimate] = useEstimate();
  const [hoverIndex, setHoverIndex] = useState(0);
  const [uservote, setUservote] = useState(null);
  const [combineReviews, setCombineReviews] = useState({
    process: true,
    list: null,
  });

  const { slug, direction } = useParams();

  const { loading, ratedMovies } = useSelector((state) => state.userData);
  const { reviewsLoading, reviews } = useSelector((state) => state.reviewsData);

  const [details, detailsLoading] = useFetch(direction, slug);
  useEffect(() => {
    if (!loading && !detailsLoading) {
      setUservote(ratedMovies.find((item) => +item.id === +slug));
    }
    if (!loading && !reviewsLoading) {
      setCombineReviews({
        process: false,
        list: reviews.concat(...(details?.reviews?.results || [])),
      });
    }
  }, [loading, detailsLoading, ratedMovies, reviewsLoading, details]);

  const meta =
    !detailsLoading && (!!details.vote_average || !!details.vote_count);
  const collection = !detailsLoading && details?.belongs_to_collection;

  return (
    <DetailsPanel>
      <DetailsCollectionSkeleton visible={detailsLoading} />
      {collection && <DetailsPanelCollection collection={collection} />}
      <DetailsPanel.Title>Recommendation</DetailsPanel.Title>
      <MovieListContainer
        list={details?.recommendations.results || []}
        loading={detailsLoading}
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
                  value: createEstimateItem(details, item, direction),
                })
              }
            />
          ))}
          {meta && (
            <DetailsPanel.Meta>
              <DetailsPanel.Average value={details.vote_average}>
                {details.vote_average}
              </DetailsPanel.Average>
              <DetailsPanel.Count>{details.vote_count}</DetailsPanel.Count>
            </DetailsPanel.Meta>
          )}
          {uservote && <DetailsPanelUservote uservote={uservote} />}
        </DetailsPanel.Rating>
      </DetailsPanel.Section>
      <DetailsPanel.Title>Reviews</DetailsPanel.Title>
      <DetailsPanel.Section>
        <ReviewContainer combineReviews={combineReviews} />
      </DetailsPanel.Section>
    </DetailsPanel>
  );
}
