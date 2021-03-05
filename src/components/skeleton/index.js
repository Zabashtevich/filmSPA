import ContentLoader from "react-content-loader";
import { CSSTransition } from "react-transition-group";

import {
  ActiveWrapper,
  MiniatureWrapper,
  PosterRowsWrapper,
  PosterImageSkeleton,
  CreditsWrapper,
} from "./styles/skeleton";

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

export function PosterDetailsRowsSkeleton({ visible }) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <PosterRowsWrapper>
        <ContentLoader
          speed={2}
          width={600}
          height={450}
          viewBox="0 0 600 450"
          backgroundColor="#dadada"
          foregroundColor="#fafafa"
        >
          <rect x="0" y="10" rx="5" ry="5" width="500" height="14" />
          <rect x="0" y="45" rx="5" ry="5" width="500" height="14" />
          <rect x="0" y="80" rx="5" ry="5" width="500" height="14" />
          <rect x="0" y="255" rx="5" ry="5" width="500" height="14" />
          <rect x="0" y="115" rx="5" ry="5" width="500" height="14" />
          <rect x="0" y="150" rx="5" ry="5" width="500" height="14" />
          <rect x="0" y="185" rx="5" ry="5" width="500" height="14" />
          <rect x="0" y="220" rx="5" ry="5" width="500" height="14" />
          <rect x="0" y="290" rx="5" ry="5" width="500" height="14" />
          <rect x="0" y="325" rx="5" ry="5" width="500" height="14" />
          <rect x="0" y="430" rx="5" ry="5" width="500" height="14" />
          <rect x="0" y="395" rx="5" ry="5" width="500" height="14" />
          <rect x="0" y="360" rx="5" ry="5" width="500" height="14" />
        </ContentLoader>
      </PosterRowsWrapper>
    </CSSTransition>
  );
}

export function PosterSkeleton({ visible }) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <PosterImageSkeleton>
        <ContentLoader
          speed={2}
          width={350}
          height={450}
          viewBox="0 0 350 450"
          backgroundColor="#dadada"
          foregroundColor="#fafafa"
        >
          <rect x="0" y="0" rx="10" ry="10" width="350" height="450" />
        </ContentLoader>
      </PosterImageSkeleton>
    </CSSTransition>
  );
}

export function CreditsSkeleton({ visible }) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <CreditsWrapper>
        <ContentLoader
          speed={2}
          width={100}
          height={220}
          viewBox="0 0 100 220"
          backgroundColor="#dadada"
          foregroundColor="#fafafa"
        >
          <rect x="0" y="8" rx="4" ry="4" width="100" height="5" />
          <rect x="0" y="30" rx="4" ry="4" width="100" height="5" />
          <rect x="0" y="52" rx="4" ry="4" width="100" height="5" />
          <rect x="0" y="74" rx="4" ry="4" width="100" height="5" />
          <rect x="0" y="96" rx="4" ry="4" width="100" height="5" />
          <rect x="0" y="118" rx="4" ry="4" width="100" height="5" />
          <rect x="0" y="140" rx="4" ry="4" width="100" height="5" />
          <rect x="0" y="162" rx="4" ry="4" width="100" height="5" />
          <rect x="0" y="184" rx="4" ry="4" width="100" height="5" />
          <rect x="0" y="210" rx="4" ry="4" width="100" height="5" />
        </ContentLoader>
      </CreditsWrapper>
    </CSSTransition>
  );
}
