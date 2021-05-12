import React from "react";

import { Container, Poster, Info } from "./styles/collection-cast";

export default function CollectionCastSkeleton({ children }) {
  return <Container>{children}</Container>;
}

CollectionCastSkeleton.Poster = function CollectionCastSkeletonPoster() {
  return <Poster />;
};

CollectionCastSkeleton.Info = function CollectionCastSkeletonInfo() {
  return <Info />;
};
