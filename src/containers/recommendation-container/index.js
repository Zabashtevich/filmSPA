import React from "react";

import { Recommendation } from "../../components";

export default function RecommendationContainer({ list, type }) {
  return (
    <Recommendation>
      <Recommendation.Container>
        {list.length > 0 &&
          list.map(({ id, poster_path, title }) => (
            <Recommendation.Item key={id} to={`/details/${type}/${id}`}>
              {poster_path && <Recommendation.Poster src={poster_path} />}
              {!poster_path && <Recommendation.ImagePlaceholder />}
              <Recommendation.Title>{title}</Recommendation.Title>
            </Recommendation.Item>
          ))}
        {list.length === 0 && (
          <Recommendation.Placeholder>
            We can not create recommendations for this movie
          </Recommendation.Placeholder>
        )}
      </Recommendation.Container>
    </Recommendation>
  );
}
