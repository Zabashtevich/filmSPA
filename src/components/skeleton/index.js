import ContentLoader from "react-content-loader";
import { CSSTransition } from "react-transition-group";

import { ActiveWrapper, MiniatureWrapper } from "./styles/skeleton";

export function CardListSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={300}
      viewBox="0 0 300 450"
      backgroundColor="#f0f0f0"
      foregroundColor="#f3f3f3"
      style={{ margin: "0.6rem 0.2rem", borderRadius: "10px" }}
    >
      <rect x="0" y="0" width="300" height="450" />
    </ContentLoader>
  );
}

export function GalleryMiniatureSkeleton({ visible }) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <MiniatureWrapper>
        <ContentLoader
          speed={2}
          width={151}
          height={86}
          viewBox="0 0 150 85"
          backgroundColor="#dadada"
          foregroundColor="#fafafa"
        >
          <rect x="0" y="0" rx="8" ry="8" width="150" height="85" />
        </ContentLoader>
      </MiniatureWrapper>
    </CSSTransition>
  );
}

export function GalleryActiveSkeleton({ visible }) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <ActiveWrapper>
        <ContentLoader
          speed={2}
          width={1200}
          height={675}
          viewBox="0 0 1200 675"
          backgroundColor="#dadada"
          foregroundColor="#fafafa"
        >
          <rect x="0" y="0" rx="0" ry="0" width="1200" height="675" />
        </ContentLoader>
      </ActiveWrapper>
    </CSSTransition>
  );
}

export function PosterDetailsRowsSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={600}
      height={600}
      viewBox="0 0 600 600"
      backgroundColor="#dadada"
      foregroundColor="#fafafa"
    >
      <rect x="0" y="0" rx="4" ry="4" width="270" height="35" />
      <rect x="0" y="45" rx="5" ry="5" width="580" height="15" />
      <rect x="0" y="65" rx="5" ry="5" width="580" height="15" />
      <rect x="0" y="120" rx="3" ry="3" width="100" height="20" />
      <rect x="0" y="180" rx="5" ry="5" width="300" height="15" />
      <rect x="0" y="215" rx="5" ry="5" width="300" height="15" />
      <rect x="0" y="250" rx="5" ry="5" width="300" height="15" />
      <rect x="-1" y="285" rx="5" ry="5" width="300" height="15" />
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
  );
}

export function PosterSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={450}
      viewBox="0 0 300 450"
      backgroundColor="#dadada"
      foregroundColor="#fafafa"
    >
      <rect x="0" y="0" rx="10" ry="10" width="300" height="450" />
    </ContentLoader>
  );
}

export function CreditsSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={100}
      height={220}
      viewBox="0 0 100 220"
      backgroundColor="#dadada"
      foregroundColor="#fafafa"
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
  );
}
