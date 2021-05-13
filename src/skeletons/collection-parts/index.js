import React from "react";

import { Container, Poster, Info } from "./styles/collection-parts";

export default function CollectionPartsSkeleton({ children }) {
  return <Container>{children}</Container>;
}

CollectionPartsSkeleton.Poster = function CollectionParsSkeletonPoster() {
  return <Poster />;
};

CollectionPartsSkeleton.Info = function CollectionParsSkeletonInfo() {
  return <Info />;
};
