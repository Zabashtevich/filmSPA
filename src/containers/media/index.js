import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { SwitchTransition, CSSTransition } from "react-transition-group";

// import { MediaSkeleton } from "../../skeletons/media";
import { range } from "../../utils";
import { Media } from "./../../components";

export default function MediaContainer({ data, loading }) {
  const [visible, setVisible] = useState(true);
  const [scrollvalue, setScrollvalue] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!loading && !data?.images?.posters) {
      setVisible(false);
    }
  }, [loading, data]);

  return (
    visible && (
      <Media>
        <Media.Header>
          <Media.Title>Media</Media.Title>
          <Media.All to={`${pathname}/gallery`}>See full gallery</Media.All>
        </Media.Header>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition classNames="fade" key={loading} timeout={500}>
            <Media.Scroller
              onScroll={(e) => setScrollvalue(e.target.scrollLeft)}
              blured={scrollvalue !== 0 && 1}
            >
              {!loading &&
                data.images.posters
                  .slice(0, 10)
                  .map((item) => (
                    <Media.Poster key={item.file_path} slug={item.file_path} />
                  ))}
              {/* {loading &&
                range(1, 10).map((item) => <MediaSkeleton key={item} />)} */}
            </Media.Scroller>
          </CSSTransition>
        </SwitchTransition>
      </Media>
    )
  );
}
