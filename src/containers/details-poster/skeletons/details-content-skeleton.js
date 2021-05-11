import React from "react";
import { range } from "../../../utils";

import { DetailsPosterSkeleton } from "./../../../skeletons";

export default function DetailsContentSkeleton() {
  return (
    <>
      <DetailsPosterSkeleton.Title />
      {range(0, 3).map((item) => (
        <DetailsPosterSkeleton.Overview key={item} />
      ))}
      <DetailsPosterSkeleton.Subtitle />
      {range(0, 13).map((item) => (
        <DetailsPosterSkeleton.Row key={item} />
      ))}
    </>
  );
}
