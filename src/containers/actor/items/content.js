import React from "react";

import { Actor } from "../../../components";

export default function ActorContent({ data }) {
  return (
    <Actor.Wrapper>
      <Actor.Title>{data.name}</Actor.Title>
      <Actor.Subtitle>Overview</Actor.Subtitle>
      <Actor.Overview>{data.biography}</Actor.Overview>
    </Actor.Wrapper>
  );
}
