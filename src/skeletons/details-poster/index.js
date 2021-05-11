import React from "react";

import {
  Poster,
  Title,
  Overview,
  Subtitle,
  Row,
  Link,
} from "./styles/details-poster";

export default function DetailsPosterSkeleton({ children }) {
  return children;
}

DetailsPosterSkeleton.Poster = function DetailsPosterSkeletonPoster() {
  return <Poster />;
};

DetailsPosterSkeleton.Title = function DetailsPosterSkeletonTitle() {
  return <Title />;
};

DetailsPosterSkeleton.Overview = function DetailsPosterSkeletonOverview() {
  return <Overview />;
};

DetailsPosterSkeleton.Subtitle = function DetailsPosterSkeletonSubtitle() {
  return <Subtitle />;
};

DetailsPosterSkeleton.Row = function DetailsPosterSkeletonRow() {
  return <Row />;
};

DetailsPosterSkeleton.Link = function DetailsPosterSkeletonLink() {
  return <Link />;
};
