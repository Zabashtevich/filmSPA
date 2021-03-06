import React from "react";

import { Credits } from "../../../components";
import { CreditsSkeleton } from "../../../skeletons";

export default function CreditsSkeletonItem() {
  return (
    <Credits.Item data-testid="credits-skeleton">
      <CreditsSkeleton.Year />
      <CreditsSkeleton.Subtitle />
      <CreditsSkeleton.Meta />
      <CreditsSkeleton.Rating />
    </Credits.Item>
  );
}
