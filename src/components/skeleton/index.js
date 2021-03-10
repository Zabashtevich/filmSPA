import ContentLoader from "react-content-loader";
import { CSSTransition } from "react-transition-group";
import { range } from "../../utils";

import {
  ActiveWrapper,
  MiniatureWrapper,
  VideoplayerWrapper,
  ItemTrailerWrapper,
  WidgetWrapper,
  ListPosterWrapper,
  CreditsCompWrapper,
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
          width={100}
          height={56}
          viewBox="0 0 100 56"
          backgroundColor="#dadada"
          foregroundColor="#fafafa"
        >
          <rect x="0" y="0" rx="8" ry="8" width="100" height="56" />
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
          width={1000}
          height={562}
          viewBox="0 0 1000 562"
          backgroundColor="#dadada"
          foregroundColor="#fafafa"
        >
          <rect x="0" y="0" rx="0" ry="0" width="1000" height="562" />
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

export function VideoplayerSkeleton({ visible }) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <VideoplayerWrapper>
        <ContentLoader
          speed={2}
          width={1140}
          height={850}
          viewBox="0 0 1140 850"
          backgroundColor="#dadada"
          foregroundColor="#fafafa"
        >
          <rect x="0" y="0" rx="0" ry="0" width="1140" height="850" />
        </ContentLoader>
      </VideoplayerWrapper>
    </CSSTransition>
  );
}

export function ItemTrailerSkeleton({ visible }) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <ItemTrailerWrapper>
        <ContentLoader
          speed={2}
          width={140}
          height={80}
          viewBox="0 0 140 80"
          backgroundColor="#dadada"
          foregroundColor="#fafafa"
        >
          <rect x="0" y="0" rx="0" ry="0" width="140" height="80" />
        </ContentLoader>
      </ItemTrailerWrapper>
    </CSSTransition>
  );
}

export function WidgetSkeleton({ visible }) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <WidgetWrapper>
        <ContentLoader
          speed={2}
          width={120}
          height={25}
          viewBox="0 0 120 25"
          backgroundColor="#dadada"
          foregroundColor="#fafafa"
        >
          <rect x="0" y="0" rx="4" ry="4" width="120" height="25" />
        </ContentLoader>
      </WidgetWrapper>
    </CSSTransition>
  );
}

export function ListPosterSkeleton({ visible }) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <ListPosterWrapper>
        <ContentLoader
          speed={2}
          width={200}
          height={112}
          viewBox="0 0 200 112"
          backgroundColor="#dadada"
          foregroundColor="#fafafa"
        >
          <rect x="0" y="0" rx="4" ry="4" width="200" height="112" />
        </ContentLoader>
      </ListPosterWrapper>
    </CSSTransition>
  );
}

export function CreditsCompSkeleton({ visible }) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <CreditsCompWrapper>
        <ContentLoader
          speed={2}
          width={800}
          height={500}
          viewBox="0 0 800 500"
          backgroundColor="#dadada"
          foregroundColor="#fafafa"
        >
          <>
            <rect x="20" y="15" rx="4" ry="4" width="50" height="20" />
            <circle cx="110" cy="25" r="10" />
            <rect x="160" y="15" rx="2" ry="2" width="250" height="20" />
            <rect x="450" y="15" rx="2" ry="2" width="60" height="20" />
            <rect x="550" y="15" rx="2" ry="2" width="35" height="20" />
            <rect x="750" y="15" rx="2" ry="2" width="30" height="20" />
            {range(1, 9).map((item) => (
              <>
                <rect
                  x="20"
                  y={`${item * 60 + 15}`}
                  rx="4"
                  ry="4"
                  width="50"
                  height="20"
                />
                <circle cx="110" cy={`${item * 60 + 15 + 10}`} r="10" />
                <rect
                  x="160"
                  y={`${item * 60 + 15}`}
                  rx="2"
                  ry="2"
                  width="250"
                  height="20"
                />
                <rect
                  x="450"
                  y={`${item * 60 + 15}`}
                  rx="2"
                  ry="2"
                  width="60"
                  height="20"
                />
                <rect
                  x="550"
                  y={`${item * 60 + 15}`}
                  rx="2"
                  ry="2"
                  width="35"
                  height="20"
                />
                <rect
                  x="750"
                  y={`${item * 60 + 15}`}
                  rx="2"
                  ry="2"
                  width="30"
                  height="20"
                />
              </>
            ))}
          </>
        </ContentLoader>
      </CreditsCompWrapper>
    </CSSTransition>
  );
}
