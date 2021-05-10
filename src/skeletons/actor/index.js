import React from "react";

import {
  Poster,
  Container,
  Title,
  Row,
  Fieldname,
  Fieldvalue,
} from "./styles/actor";

export default function ActorSkeleton({ children }) {
  return <Container>{children}</Container>;
}

ActorSkeleton.Poster = function ActorSkeletonPoster() {
  return <Poster />;
};

ActorSkeleton.Title = function ActorSkeletonTitle() {
  return <Title />;
};

ActorSkeleton.Row = function ActorSkeletonRow() {
  return <Row />;
};

ActorSkeleton.Fieldname = function ActorSkeletonFieldname() {
  return <Fieldname />;
};

ActorSkeleton.Fieldvalue = function ActorSkeletonFieldvalue() {
  return <Fieldvalue />;
};
