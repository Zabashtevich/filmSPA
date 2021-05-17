import React from "react";

import { ActorSkeleton } from "../../../skeletons";
import { range } from "../../../utils";

export default function ActorSkeletonContent() {
  const auxRowsVisible = window.innerWidth < 750;

  return (
    <ActorSkeleton data-testid="actor-content-skeleton">
      <ActorSkeleton.Title />
      <ActorSkeleton.Subtitle />
      <ActorSkeleton.List>
        {range(1, 3).map((item) => (
          <ActorSkeleton.Overview key={item} />
        ))}
        <ActorSkeleton.Devider />
        {range(1, 7).map((item) => (
          <ActorSkeleton.Overview key={item} />
        ))}
        {auxRowsVisible && (
          <>
            <ActorSkeleton.Devider />
            {range(1, 3).map((item) => (
              <ActorSkeleton.Overview key={item} />
            ))}
          </>
        )}
      </ActorSkeleton.List>
    </ActorSkeleton>
  );
}
