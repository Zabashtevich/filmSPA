import ContentLoader from "react-content-loader";
import { CSSTransition } from "react-transition-group";

import {
  ActiveWrapper,
  MiniatureWrapper,
  VideoplayerWrapper,
  ItemTrailerWrapper,
  WidgetWrapper,
  ListPosterWrapper,
  CreditsItemWrapper,
  DetailsCollectionWrapper,
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
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
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
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
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
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
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
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
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
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
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
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
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
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
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
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
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
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="4" ry="4" width="200" height="112" />
        </ContentLoader>
      </ListPosterWrapper>
    </CSSTransition>
  );
}

export function ActorPosterSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={800}
      viewBox="0 0 300 800"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="300" height="450" />
      <rect x="75" y="480" rx="2" ry="2" width="150" height="25" />
      <rect x="0" y="530" rx="2" ry="2" width="100" height="20" />
      <rect x="0" y="560" rx="2" ry="2" width="50" height="10" />
      <rect x="0" y="580" rx="2" ry="2" width="100" height="20" />
      <rect x="0" y="610" rx="2" ry="2" width="50" height="10" />
      <rect x="0" y="630" rx="2" ry="2" width="100" height="20" />
      <rect x="0" y="660" rx="2" ry="2" width="50" height="10" />
      <rect x="0" y="680" rx="2" ry="2" width="100" height="20" />
      <rect x="0" y="710" rx="2" ry="2" width="50" height="10" />
      <rect x="0" y="730" rx="2" ry="2" width="100" height="20" />
      <rect x="0" y="760" rx="2" ry="2" width="50" height="10" />{" "}
    </ContentLoader>
  );
}

export function ActorPosterContentSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={800}
      height={400}
      viewBox="0 0 800 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="-1" rx="4" ry="4" width="150" height="35" />
      <rect x="0" y="125" rx="4" ry="4" width="100" height="25" />
      <rect x="0" y="200" rx="4" ry="4" width="800" height="20" />
      <rect x="0" y="230" rx="4" ry="4" width="750" height="20" />
      <rect x="0" y="260" rx="4" ry="4" width="800" height="20" />
      <rect x="0" y="290" rx="4" ry="4" width="750" height="20" />
      <rect x="0" y="325" rx="4" ry="4" width="600" height="20" />
      <rect x="0" y="358" rx="4" ry="4" width="550" height="20" />
    </ContentLoader>
  );
}

export function CreditsItemSkeleton({ visible, ...rest }) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={500}
      {...rest}
    >
      <CreditsItemWrapper>
        <ContentLoader
          speed={2}
          width={800}
          height={40}
          viewBox="0 0 800 40"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="15" y="12" rx="4" ry="4" width="20" height="15" />
          <circle cx="90" cy="20" r="8" />
          <rect x="140" y="12" rx="4" ry="4" width="150" height="15" />
          <rect x="420" y="12" rx="4" ry="4" width="60" height="15" />
          <rect x="575" y="8" rx="4" ry="4" width="25" height="25" />
          <rect x="700" y="12" rx="4" ry="4" width="50" height="15" />
        </ContentLoader>
      </CreditsItemWrapper>
    </CSSTransition>
  );
}

export function PaginationSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={25}
      height={30}
      viewBox="0 0 25 30"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="25" height="30" />
    </ContentLoader>
  );
}

export function DetailsCollectionSkeleton({ visible }) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 0, appear: 500 }}
    >
      <DetailsCollectionWrapper>
        <ContentLoader
          speed={2}
          width={1300}
          height={565}
          viewBox="0 0 1300 565"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="100" rx="4" ry="4" width="150" height="35" />
          <rect x="0" y="165" rx="4" ry="4" width="1300" height="400" />
        </ContentLoader>
      </DetailsCollectionWrapper>
    </CSSTransition>
  );
}
