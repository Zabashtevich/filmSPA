import React from "react";

import { Container, Poster, Info } from "./styles/collection-parts";

export default function CollectionPartsSkeleton({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

CollectionPartsSkeleton.Poster = function CollectionParsSkeletonPoster({
  ...rest
}) {
  return <Poster {...rest} />;
};

CollectionPartsSkeleton.Info = function CollectionParsSkeletonInfo({
  ...rest
}) {
  return <Info {...rest} />;
};
