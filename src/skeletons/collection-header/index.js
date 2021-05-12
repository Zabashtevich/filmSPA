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

CollectionHeaderSkeleton.Poster = function CollectionHeaderSkeletonPoster() {
  return <Poster />;
};

CollectionHeaderSkeleton.Wrapper = function CollectionHeaderSkeletonWrapper({
  children,
}) {
  return <Wrapper>{children}</Wrapper>;
};

CollectionHeaderSkeleton.Title = function CollectionHeaderSkeletonTitle() {
  return <Title />;
};

CollectionHeaderSkeleton.Subtitle =
  function CollectionHeaderSkeletonSubtitle() {
    return <Subtitle />;
  };

CollectionHeaderSkeleton.Overview =
  function CollectionHeaderSkeletonOverview() {
    return <Overview />;
  };

CollectionHeaderSkeleton.Row = function CollectionHeaderSkeletonRow() {
  return <Row />;
};
