import React from "react";

import { Container, Poster, Info } from "./styles/collection-cast";

export default function CollectionCastSkeleton({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

CollectionCastSkeleton.Poster = function CollectionCastSkeletonPoster({
  ...rest
}) {
  return <Poster {...rest} />;
};

CollectionCastSkeleton.Info = function CollectionCastSkeletonInfo({ ...rest }) {
  return <Info {...rest} />;
};
