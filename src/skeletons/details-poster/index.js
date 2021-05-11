import React from "react";

import { Poster } from "./styles/details-poster";

export default function DetailsPosterSkeleton({ children }) {
  return children;
}

DetailsPosterSkeleton.Poster = function DetailsPosterSkeletonPoster() {
  return <Poster />;
};
