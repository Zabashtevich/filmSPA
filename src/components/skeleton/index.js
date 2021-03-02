import ContentLoader from "react-content-loader";
import { CSSTransition } from "react-transition-group";

import { ActiveWrapper } from "./styles/skeleton";

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

export function GalleryMiniatureSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={150}
      height={85}
      viewBox="0 0 150 85"
      backgroundColor="#dadada"
      foregroundColor="#fafafa"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        borderRadius: "0.5rem",
      }}
    >
      <rect x="0" y="0" rx="0" ry="0" width="150" height="85" />
    </ContentLoader>
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
