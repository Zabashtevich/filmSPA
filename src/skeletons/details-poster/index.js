import ContentLoader from "react-content-loader";
import React from "react";

import {
  PosterWrapper,
  RowsWrapper,
  CardWrapper,
} from "./styles/details-poster";

export function PosterDetailsSkeleton() {
  return (
    <PosterWrapper>
      <ContentLoader
        speed={2}
        width={300}
        height={450}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        data-testid="details-poster-skeleton"
      >
        <rect x="0" y="0" rx="10" ry="10" width="300" height="450" />
      </ContentLoader>
    </PosterWrapper>
  );
}

export function PosterDetailsRowsSkeleton() {
  return (
    <RowsWrapper>
      <ContentLoader
        speed={2}
        width={600}
        height={600}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        data-testid="details-rows-skeleton"
      >
        <rect x="0" y="0" rx="4" ry="4" width="270" height="35" />
        <rect x="0" y="45" rx="5" ry="5" width="580" height="15" />
        <rect x="0" y="65" rx="5" ry="5" width="580" height="15" />
        <rect x="0" y="120" rx="3" ry="3" width="100" height="20" />
        <rect x="0" y="180" rx="5" ry="5" width="300" height="15" />
        <rect x="0" y="215" rx="5" ry="5" width="300" height="15" />
        <rect x="0" y="250" rx="5" ry="5" width="300" height="15" />
        <rect x="0" y="285" rx="5" ry="5" width="300" height="15" />
        <rect x="0" y="320" rx="5" ry="5" width="300" height="15" />
        <rect x="0" y="355" rx="5" ry="5" width="300" height="15" />
        <rect x="0" y="390" rx="5" ry="5" width="300" height="15" />
        <rect x="0" y="425" rx="5" ry="5" width="300" height="15" />
        <rect x="0" y="460" rx="5" ry="5" width="300" height="15" />
        <rect x="0" y="425" rx="5" ry="5" width="300" height="15" />
        <rect x="0" y="495" rx="5" ry="5" width="300" height="15" />
        <rect x="1" y="530" rx="5" ry="5" width="300" height="15" />
        <rect x="0" y="565" rx="5" ry="5" width="300" height="15" />
      </ContentLoader>
    </RowsWrapper>
  );
}

export function CastListSkeleton() {
  return (
    <CardWrapper>
      <ContentLoader
        speed={2}
        width={100}
        height={220}
        viewBox="0 0 100 220"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        data-testid="details-cast-skeleton"
      >
        <rect x="0" y="8" rx="4" ry="4" width="200" height="5" />
        <rect x="0" y="30" rx="4" ry="4" width="200" height="5" />
        <rect x="0" y="52" rx="4" ry="4" width="200" height="5" />
        <rect x="0" y="74" rx="4" ry="4" width="200" height="5" />
        <rect x="0" y="96" rx="4" ry="4" width="200" height="5" />
        <rect x="0" y="118" rx="4" ry="4" width="200" height="5" />
        <rect x="0" y="140" rx="4" ry="4" width="200" height="5" />
        <rect x="0" y="162" rx="4" ry="4" width="200" height="5" />
        <rect x="0" y="184" rx="4" ry="4" width="200" height="5" />
        <rect x="0" y="210" rx="4" ry="4" width="200" height="5" />
      </ContentLoader>
    </CardWrapper>
  );
}
