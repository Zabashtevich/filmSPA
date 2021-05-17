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

DetailsPosterSkeleton.Poster = function DetailsPosterSkeletonPoster({
  ...rest
}) {
  return <Poster {...rest} />;
};

DetailsPosterSkeleton.Title = function DetailsPosterSkeletonTitle({ ...rest }) {
  return <Title {...rest} />;
};

DetailsPosterSkeleton.Overview = function DetailsPosterSkeletonOverview({
  ...rest
}) {
  return <Overview {...rest} />;
};

DetailsPosterSkeleton.Subtitle = function DetailsPosterSkeletonSubtitle({
  ...rest
}) {
  return <Subtitle {...rest} />;
};

DetailsPosterSkeleton.Row = function DetailsPosterSkeletonRow({ ...rest }) {
  return <Row {...rest} />;
};

DetailsPosterSkeleton.Link = function DetailsPosterSkeletonLink({ ...rest }) {
  return <Link {...rest} />;
};
