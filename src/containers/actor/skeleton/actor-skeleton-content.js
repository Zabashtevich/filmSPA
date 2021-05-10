import React from "react";

import { ActorSkeleton } from "../../../skeletons";
import { range } from "../../../utils";

export default function ActorSkeletonContent() {
  return (
    <ActorSkeleton>
      <ActorSkeleton.Title />
      <ActorSkeleton.Subtitle />
      <ActorSkeleton.List>
        {range(1, 3).map((item) => (
          <ActorSkeleton.Overview key={item} />
        ))}
        <ActorSkeleton.Devider />
        {range(1, 5).map((item) => (
          <ActorSkeleton.Overview key={item} />
        ))}
      </ActorSkeleton.List>
    </ActorSkeleton>
  );
}
