import ContentLoader from "react-content-loader";
import React from "react";

import { Wrapper } from "./styles/popular";

export function PopularSkeleton() {
  return (
    <Wrapper data-testid="popular-skeleton">
      <ContentLoader
        speed={2}
        width={250}
        height={450}
        viewBox="0 0 250 450"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="4" ry="4" width="250" height="375" />
        <rect x="15" y="395" rx="4" ry="4" width="150" height="13" />
        <rect x="190" y="393" rx="4" ry="4" width="50" height="18" />
        <rect x="15" y="425" rx="4" ry="4" width="70" height="12" />
        <rect x="200" y="426" rx="4" ry="4" width="40" height="12" />
      </ContentLoader>
    </Wrapper>
  );
}
