import React, { useEffect, useState } from "react";

import { checkFieldNotEmpty, getMediaTabs } from "../../utils";
import { Media } from "./../../components";
import { useLocation } from "react-router";

export default function MediaContainer({ data, loading }) {
  const [visible, setVisible] = useState(false);
  const [{ tabs, active }, setTab] = useState({ tabs: null, active: null });
  const [scrollvalue, setScrollvalue] = useState(0);
  const { pathname } = useLocation();

  const arrays = {
    videos: data?.videos?.results || null,
    posters: data?.images?.posters || null,
    backdrops: data?.images?.backdrops || null,
  };

  useEffect(() => {
    if (!loading && checkFieldNotEmpty(arrays)) {
      setVisible(true);
      setTab(getMediaTabs(arrays));
    }
  }, [loading]);

  return (
    visible && (
      <Media>
        <Media.Header>
          <Media.Title>Media</Media.Title>
          <Media.Wrapper>
            {tabs.map((item) => {
              return (
                <Media.Tab
                  key={item}
                  selected={item === active && 1}
                  onClick={() => setTab((prev) => ({ ...prev, active: item }))}
                >
                  {item}
                </Media.Tab>
              );
            })}
          </Media.Wrapper>
          <Media.All
            to={`${pathname}/gallery`}
          >{`See All ${active}`}</Media.All>
        </Media.Header>
        <Media.Scroller
          onScroll={(e) => setScrollvalue(e.target.scrollLeft)}
          blured={scrollvalue !== 0 && 1}
        >
          <MediaItems active={active} arrays={arrays} />
        </Media.Scroller>
      </Media>
    )
  );
}

function MediaItems({ active, arrays }) {
  return (
    <>
      {active === "Backdrops" &&
        arrays.backdrops
          .slice(0, 10)
          .map((item) => (
            <Media.Backdrop key={item.file_path} file={item.file_path} />
          ))}
      {active === "Posters" &&
        arrays.posters
          .slice(0, 10)
          .map((item) => (
            <Media.Poster key={item.file_path} file={item.file_path} />
          ))}
      {active === "Videos" &&
        arrays.videos.map((item) => (
          <Media.Video key={item.key} url={item.key}>
            <Media.Play />
          </Media.Video>
        ))}
    </>
  );
}
