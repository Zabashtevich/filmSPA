import React from "react";

import {
  Poster,
  Wrapper,
  Title,
  Subtitle,
  Overview,
  Row,
} from "./styles/collection-header";

export default function CollectionHeaderSkeleton({ children }) {
  return children;
}

CollectionHeaderSkeleton.Poster = function CollectionHeaderSkeletonPoster({
  ...rest
}) {
  return <Poster {...rest} />;
};

CollectionHeaderSkeleton.Wrapper = function CollectionHeaderSkeletonWrapper({
  children,
  ...rest
}) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

CollectionHeaderSkeleton.Title = function CollectionHeaderSkeletonTitle({
  ...rest
}) {
  return <Title {...rest} />;
};

CollectionHeaderSkeleton.Subtitle = function CollectionHeaderSkeletonSubtitle({
  ...rest
}) {
  return <Subtitle {...rest} />;
};

CollectionHeaderSkeleton.Overview = function CollectionHeaderSkeletonOverview({
  ...rest
}) {
  return <Overview {...rest} />;
};

CollectionHeaderSkeleton.Row = function CollectionHeaderSkeletonRow({
  ...rest
}) {
  return <Row {...rest} />;
};
