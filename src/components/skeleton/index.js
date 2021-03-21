import ContentLoader from "react-content-loader";
import { CSSTransition } from "react-transition-group";

import {
  ActiveWrapper,
  MiniatureWrapper,
  VideoplayerWrapper,
  ItemTrailerWrapper,
  WidgetWrapper,
  ListPosterWrapper,
  CreditsWrapper,
  PopularSkeletonWrapper,
  TrendingSkeletonWrapper,
  FilterWrapper,
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

export function CastListSkeleton() {
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

export function DetailsCollectionSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={1300}
      height={300}
      viewBox="0 0 1300 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="1300" height="300" />
    </ContentLoader>
  );
}

export function ReviewSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={700}
      height={300}
      viewBox="0 0 700 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="10" rx="50" ry="50" width="75" height="75" />
      <rect x="105" y="35" rx="4" ry="4" width="100" height="30" />
      <rect x="235" y="35" rx="4" ry="4" width="30" height="30" />
      <rect x="550" y="35" rx="0" ry="0" width="125" height="30" />
      <rect x="30" y="135" rx="4" ry="4" width="510" height="20" />
      <rect x="30" y="165" rx="4" ry="4" width="475" height="20" />
      <rect x="30" y="195" rx="4" ry="4" width="525" height="20" />
      <rect x="250" y="250" rx="4" ry="4" width="100" height="30" />
    </ContentLoader>
  );
}

export function PopularSkeleton() {
  return (
    <PopularSkeletonWrapper>
      <ContentLoader
        speed={2}
        width={250}
        height={450}
        viewBox="0 0 250 450"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="4" ry="4" width="250" height="375" />
        <rect x="20" y="390" rx="4" ry="4" width="115" height="20" />
        <rect x="20" y="420" rx="4" ry="4" width="50" height="15" />
      </ContentLoader>
    </PopularSkeletonWrapper>
  );
}

export function TrendingSkeleton() {
  return (
    <TrendingSkeletonWrapper>
      <ContentLoader
        speed={2}
        width={300}
        height={450}
        viewBox="0 0 300 450"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="4" ry="4" width="300" height="450" />
      </ContentLoader>
    </TrendingSkeletonWrapper>
  );
}

export function AccountPosterSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={200}
      viewBox="0 0 300 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="75" y="0" rx="4" ry="4" width="150" height="150" />
      <rect x="100" y="155" rx="4" ry="4" width="100" height="20" />
      <rect x="125" y="180" rx="4" ry="4" width="50" height="12" />
    </ContentLoader>
  );
}

export function CreditsSkeleton({ visible, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
      classNames="fade"
      {...rest}
    >
      <CreditsWrapper>
        <ContentLoader
          speed={2}
          width={800}
          height={50}
          viewBox="0 0 800 50"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="8" y="17" rx="4" ry="4" width="40" height="16" />
          <circle cx="87" cy="24" r="7" />
          <rect x="136" y="10" rx="4" ry="4" width="170" height="30" />
          <rect x="338" y="15" rx="4" ry="4" width="70" height="20" />
          <rect x="488" y="9" rx="4" ry="4" width="38" height="32" />
          <rect x="760" y="9" rx="4" ry="4" width="32" height="32" />
          <rect x="760" y="59" rx="4" ry="4" width="32" height="32" />
          <rect x="761" y="109" rx="4" ry="4" width="32" height="32" />
          <rect x="760" y="159" rx="4" ry="4" width="32" height="32" />
        </ContentLoader>
      </CreditsWrapper>
    </CSSTransition>
  );
}

export function FilterSkeleton({ visible, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      appear={true}
      timeout={500}
      {...rest}
    >
      <FilterWrapper>
        <ContentLoader
          speed={2}
          width={800}
          height={150}
          viewBox="0 0 800 150"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="6" rx="4" ry="4" width="55" height="18" />
          <rect x="71" y="3" rx="4" ry="4" width="45" height="25" />
          <rect x="119" y="3" rx="4" ry="4" width="85" height="25" />
          <rect x="207" y="3" rx="4" ry="4" width="54" height="25" />
          <rect x="264" y="3" rx="4" ry="4" width="50" height="25" />
          <rect x="318" y="3" rx="4" ry="4" width="50" height="25" />
          <rect x="0" y="36" rx="4" ry="4" width="55" height="18" />
          <rect x="71" y="33" rx="4" ry="4" width="50" height="25" />
          <rect x="124" y="33" rx="4" ry="4" width="34" height="25" />
          <rect x="161" y="33" rx="4" ry="4" width="66" height="25" />
          <rect x="0" y="69" rx="4" ry="4" width="55" height="18" />
          <rect x="71" y="66" rx="4" ry="4" width="50" height="25" />
          <rect x="124" y="66" rx="4" ry="4" width="34" height="25" />
          <rect x="161" y="66" rx="4" ry="4" width="66" height="25" />
          <rect x="0" y="99" rx="4" ry="4" width="55" height="18" />
          <rect x="71" y="96" rx="4" ry="4" width="25" height="25" />
          <rect x="99" y="96" rx="4" ry="4" width="25" height="25" />
          <rect x="127" y="96" rx="4" ry="4" width="25" height="25" />
          <rect x="155" y="95" rx="4" ry="4" width="25" height="25" />
          <rect x="183" y="96" rx="4" ry="4" width="25" height="25" />
          <rect x="211" y="96" rx="4" ry="4" width="25" height="25" />
          <rect x="239" y="96" rx="4" ry="4" width="25" height="25" />
          <rect x="267" y="96" rx="4" ry="4" width="25" height="25" />
          <rect x="295" y="96" rx="4" ry="4" width="25" height="25" />
          <rect x="323" y="96" rx="4" ry="4" width="25" height="25" />
          <rect x="351" y="96" rx="4" ry="4" width="25" height="25" />
          <rect x="0" y="129" rx="4" ry="4" width="55" height="18" />
          <rect x="71" y="129" rx="4" ry="4" width="33" height="18" />
          <rect x="108" y="126" rx="4" ry="4" width="50" height="24" />
          <rect x="162" y="129" rx="4" ry="4" width="20" height="18" />
          <rect x="185" y="126" rx="4" ry="4" width="50" height="24" />
        </ContentLoader>
      </FilterWrapper>
    </CSSTransition>
  );
}
