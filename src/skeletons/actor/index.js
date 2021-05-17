import React from "react";

import {
  Poster,
  Container,
  Subtitle,
  Row,
  Fieldname,
  Fieldvalue,
  Title,
  List,
  Overview,
  Devider,
} from "./styles/actor";

export default function ActorSkeleton({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ActorSkeleton.Poster = function ActorSkeletonPoster({ ...rest }) {
  return <Poster {...rest} />;
};

ActorSkeleton.Subtitle = function ActorSkeletonSubtitle({ ...rest }) {
  return <Subtitle {...rest} />;
};

ActorSkeleton.Row = function ActorSkeletonRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

ActorSkeleton.Fieldname = function ActorSkeletonFieldname({ ...rest }) {
  return <Fieldname {...rest} />;
};

ActorSkeleton.Fieldvalue = function ActorSkeletonFieldvalue({ ...rest }) {
  return <Fieldvalue {...rest} />;
};

ActorSkeleton.Title = function ActorSkeletonTitle({ ...rest }) {
  return <Title {...rest} />;
};

ActorSkeleton.List = function ActorSkeletonList({ children }) {
  return <List>{children}</List>;
};

ActorSkeleton.Overview = function ActorSkeletonOverview() {
  return <Overview />;
};

ActorSkeleton.Devider = function ActorSkeletonDevider() {
  return <Devider />;
};
