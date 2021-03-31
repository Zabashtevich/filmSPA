import React from "react";

import { Actor } from "../../components";

export default function ActorContainer() {
  return (
    <Actor>
      <Actor.Column>
        <Actor.Poster />
        <Actor.Subtitle></Actor.Subtitle>
        <Actor.Row>
          <Actor.Fieldname></Actor.Fieldname>
          <Actor.Fieldvalue></Actor.Fieldvalue>
        </Actor.Row>
      </Actor.Column>
      <Actor.Column>
        <Actor.Title></Actor.Title>
        <Actor.Subtitle></Actor.Subtitle>
        <Actor.Overview></Actor.Overview>
      </Actor.Column>
    </Actor>
  );
}
