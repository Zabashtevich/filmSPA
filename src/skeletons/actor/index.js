import React from "react";

import {
  Poster,
  Container,
  Subtitle,
  Row,
  Fieldname,
  Fieldvalue,
  Title,
  Overview,
  Devider,
} from "./styles/actor";

export default function ActorSkeleton({ children }) {
  return <Container>{children}</Container>;
}

ActorSkeleton.Poster = function ActorSkeletonPoster() {
  return <Poster />;
};

ActorSkeleton.Subtitle = function ActorSkeletonSubtitle() {
  return <Subtitle />;
};

ActorSkeleton.Row = function ActorSkeletonRow({ children }) {
  return <Row>{children}</Row>;
};

ActorSkeleton.Fieldname = function ActorSkeletonFieldname() {
  return <Fieldname />;
};

ActorSkeleton.Fieldvalue = function ActorSkeletonFieldvalue() {
  return <Fieldvalue />;
};

ActorSkeleton.Title = function ActorSkeletonTitle() {
  return <Title />;
};

ActorSkeleton.Overview = function ActorSkeletonOverview() {
  return <Overview />;
};

ActorSkeleton.Devider = function ActorSkeletonDevider() {
  return <Devider />;
};
