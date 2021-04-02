import ContentLoader from "react-content-loader";
import { CSSTransition } from "react-transition-group";

import {
  ListPosterWrapper,
  PopularSkeletonWrapper,
  TrendingSkeletonWrapper,
  GalleryPosterWrapper,
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

export function PosterDetailsSkeleton() {
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

export default function MediaSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={1300}
      height={392}
      viewBox="0 0 1300 392"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="24" rx="4" ry="4" width="62" height="27" />
      <rect x="372" y="28" rx="4" ry="4" width="45" height="18" />
      <rect x="447" y="28" rx="4" ry="4" width="50" height="18" />
      <rect x="527" y="28" rx="4" ry="4" width="72" height="18" />
      <rect x="1210" y="28" rx="4" ry="4" width="90" height="18" />
      <rect x="0" y="75" rx="6" ry="6" width="1300" height="300" />
    </ContentLoader>
  );
}

export function GalleryPosterSkeleton() {
  return (
    <GalleryPosterWrapper>
      <ContentLoader
        speed={2}
        width={200}
        height={300}
        viewBox="0 0 200 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="4" ry="4" width="200" height="300" />
      </ContentLoader>
    </GalleryPosterWrapper>
  );
}

export function GalleryMenuSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={225}
      height={50}
      viewBox="0 0 225 50"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="16" y="16" rx="4" ry="4" width="75" height="18" />
      <rect x="177" y="8" rx="4" ry="4" width="40" height="34" />
    </ContentLoader>
  );
}

export function GalleryHeaderSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={373}
      height={100}
      viewBox="0 0 373 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="66" height="100" />
      <rect x="78" y="16" rx="4" ry="4" width="290" height="34" />
      <rect x="78" y="60" rx="4" ry="4" width="90" height="18" />
    </ContentLoader>
  );
}

export function ReviewSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={700}
      height={550}
      viewBox="0 0 700 550"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="48" y="24" rx="12" ry="12" width="75" height="75" />
      <rect x="149" y="50" rx="4" ry="4" width="100" height="27" />
      <rect x="265" y="42" rx="8" ry="8" width="44" height="44" />
      <rect x="328" y="55" rx="5" ry="5" width="65" height="18" />
      <rect x="36" y="140" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="156" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="172" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="188" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="230" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="246" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="262" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="320" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="336" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="352" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="368" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="384" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="520" rx="0" ry="0" width="600" height="12" />
      <rect x="36" y="536" rx="0" ry="0" width="600" height="12" />
    </ContentLoader>
  );
}

export function CreditsSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={900}
      height={50}
      viewBox="0 0 900 50"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="15" y="15" rx="4" ry="4" width="20" height="20" />
      <rect x="65" y="17" rx="4" ry="4" width="40" height="16" />
      <rect x="153" y="16" rx="4" ry="4" width="300" height="18" />
      <rect x="517" y="14" rx="4" ry="4" width="90" height="20" />
      <rect x="655" y="7" rx="4" ry="4" width="36" height="36" />
      <rect x="820" y="10" rx="4" ry="4" width="60" height="30" />
    </ContentLoader>
  );
}

export function ActorColumnSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={750}
      viewBox="0 0 300 750"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="300" height="450" />
      <rect x="-1" y="472" rx="3" ry="3" width="230" height="22" />
      <rect x="0" y="512" rx="4" ry="4" width="140" height="16" />
      <rect x="0" y="534" rx="4" ry="4" width="120" height="12" />
      <rect x="0" y="560" rx="4" ry="4" width="140" height="16" />
      <rect x="0" y="582" rx="4" ry="4" width="120" height="12" />
      <rect x="0" y="610" rx="4" ry="4" width="140" height="16" />
      <rect x="0" y="632" rx="4" ry="4" width="120" height="12" />
      <rect x="0" y="660" rx="4" ry="4" width="140" height="16" />
      <rect x="0" y="682" rx="4" ry="4" width="120" height="12" />
      <rect x="0" y="710" rx="4" ry="4" width="140" height="16" />
      <rect x="0" y="732" rx="4" ry="4" width="120" height="12" />
    </ContentLoader>
  );
}

export function ActorContentSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={900}
      height={344}
      viewBox="0 0 900 344"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="200" height="40" />
      <rect x="0" y="110" rx="4" ry="4" width="130" height="20" />
      <rect x="0" y="150" rx="4" ry="4" width="850" height="14" />
      <rect x="0" y="170" rx="4" ry="4" width="770" height="14" />
      <rect x="0" y="190" rx="4" ry="4" width="900" height="14" />
      <rect x="0" y="210" rx="4" ry="4" width="620" height="14" />
      <rect x="0" y="250" rx="4" ry="4" width="620" height="14" />
      <rect x="0" y="270" rx="4" ry="4" width="800" height="14" />
      <rect x="0" y="290" rx="4" ry="4" width="720" height="14" />
      <rect x="0" y="310" rx="4" ry="4" width="890" height="14" />
    </ContentLoader>
  );
}

export function PaginSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={35}
      height={35}
      viewBox="0 0 35 35"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{ margin: "0 0.3rem" }}
      data-testid="pagin-skeleton"
    >
      <rect x="0" y="0" rx="4" ry="4" width="35" height="35" />
    </ContentLoader>
  );
}

export function FilterSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={711}
      height={138}
      viewBox="0 0 711 138"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="8" rx="4" ry="4" width="85" height="30" />
      <rect x="95" y="8" rx="4" ry="4" width="52" height="30" />
      <rect x="157" y="8" rx="4" ry="4" width="102" height="30" />
      <rect x="269" y="8" rx="4" ry="4" width="140" height="30" />
      <rect x="419" y="8" rx="4" ry="4" width="148" height="30" />
      <rect x="577" y="8" rx="4" ry="4" width="148" height="30" />
      <rect x="0" y="54" rx="4" ry="4" width="85" height="30" />
      <rect x="95" y="54" rx="4" ry="4" width="60" height="30" />
      <rect x="165" y="54" rx="4" ry="4" width="60" height="30" />
      <rect x="235" y="54" rx="4" ry="4" width="33" height="30" />
      <rect x="0" y="100" rx="4" ry="4" width="85" height="30" />
      <rect x="95" y="100" rx="4" ry="4" width="62" height="30" />
      <rect x="167" y="100" rx="4" ry="4" width="82" height="30" />
      <rect x="259" y="100" rx="4" ry="4" width="82" height="30" />
    </ContentLoader>
  );
}
