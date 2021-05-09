import React from "react";

import { Year, Subtitle, Meta, Rating } from "./styles/credits";

export default function CreditsSkeleton({ children }) {
  return children;
}

CreditsSkeleton.Year = function CreditsSkeletonYear() {
  return <Year />;
};

CreditsSkeleton.Subtitle = function CreditsSkeletonSubtitle() {
  return <Subtitle />;
};

CreditsSkeleton.Meta = function CreditsSkeletonMeta() {
  return <Meta />;
};

CreditsSkeleton.Rating = function CreditsSkeletonRating() {
  return <Rating />;
};
