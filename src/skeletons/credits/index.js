import React from "react";

export default function CreditsSkeleton({ children }) {
  return children;
}

CreditsSkeleton.Year = function CreditsSkeletonYear() {
  return (
    <ContentLoader
      speed={2}
      width={50}
      height={18}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="50" height="18" />
    </ContentLoader>
  );
};

CreditsSkeleton.Subtitle = function CreditsSkeletonSubtitle() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={14}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="300" height="14" />
    </ContentLoader>
  );
};

CreditsSkeleton.Meta = function CreditsSkeletonMeta() {
  return (
    <ContentLoader
      speed={2}
      width={100}
      height={27}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="100" height="27" />
    </ContentLoader>
  );
};

CreditsSkeleton.Rating = function CreditsSkeletonRating() {
  return (
    <ContentLoader
      speed={2}
      width={40}
      height={34}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="40" height="34" />
    </ContentLoader>
  );
};
