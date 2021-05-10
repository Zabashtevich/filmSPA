import React from "react";

import { ActorSkeleton } from "../../../skeletons";
import { range } from "../../../utils";

export default function ActorSkeletonColumn() {
  return (
    <ActorSkeleton>
      <ActorSkeleton.Poster />
      <ActorSkeleton.Title />
      {range(1, 5).map((item) => (
        <ActorSkeleton.Row key={item}>
          <ActorSkeleton.Fieldname />
          <ActorSkeleton.Fieldvalue />
        </ActorSkeleton.Row>
      ))}
    </ActorSkeleton>
  );
}
