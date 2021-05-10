import React from "react";

import { Poster } from "./styles/popular";

export default function PopularSkeleton({ children }) {
  return children;
}

PopularSkeleton.Poster = function PopularSkeletonPoster() {
  return <Poster />;
};
