import React from "react";

import { Year, Subtitle, Meta, Rating } from "./styles/credits";

export default function CreditsSkeleton({ children }) {
  return children;
}

CreditsSkeleton.Year = function CreditsSkeletonYear({ ...rest }) {
  return <Year {...rest} />;
};

CreditsSkeleton.Subtitle = function CreditsSkeletonSubtitle({ ...rest }) {
  return <Subtitle {...rest} />;
};

CreditsSkeleton.Meta = function CreditsSkeletonMeta({ ...rest }) {
  return <Meta {...rest} />;
};

CreditsSkeleton.Rating = function CreditsSkeletonRating({ ...rest }) {
  return <Rating {...rest} />;
};
