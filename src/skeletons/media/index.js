import React from "react";

import { Poster } from "./styles/media";

export default function MediaSkeleton({ children }) {
  return children;
}

MediaSkeleton.Poster = function MediaSkeletonPoster() {
  return <Poster />;
};
