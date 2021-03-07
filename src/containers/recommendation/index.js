import React from "react";

import { Recommendation } from "../../components";

export default function RecommendationContainer({ list = [], type }) {
  return (
    <Recommendation disabled={list.length === 0 && 1}>
      <Recommendation.Container>
        {list.length > 0 &&
          list.map(({ id, backdrop_path, title }) => (
            <Recommendation.Item key={id} to={`/details/${type}/${id}`}>
              {backdrop_path && (
                <Recommendation.Poster
                  src={"https://image.tmdb.org/t/p/w300" + backdrop_path}
                />
              )}
              {!backdrop_path && (
                <Recommendation.ImagePlaceholder
                  src={"https://dummyimage.com/300x169/fff/fff"}
                />
              )}
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
