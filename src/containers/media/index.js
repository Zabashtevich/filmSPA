import React, { useEffect, useState } from "react";
import { checkFieldNotEmpty, getMediaTabs } from "../../utils";

import { Media } from "./../../components";

export default function MediaContainer({ data, loading }) {
  const [visible, setVisible] = useState(false);
  const [{ tabs, active }, setTab] = useState({ tabs: null, active: null });

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

  console.log(active);

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
          <Media.All>{`See All ${active}`}</Media.All>
        </Media.Header>
        <Media.Scroller>
          {active === "Backdrops" &&
            arrays.backdrops.slice(0, 10).map((item) => {
              console.log(item);
              return (
                <Media.Backdrop key={item.file_path} file={item.file_path} />
              );
            })}
          {active === "Posters" &&
            arrays.posters.slice(0, 10).map((item) => {
              console.log(item);
              return (
                <Media.Poster key={item.file_path} file={item.file_path} />
              );
            })}
          {active === "Videos" &&
            arrays.videos.map((item) => {
              console.log(item);
              return (
                <Media.Video key={item.key} url={item.key}>
                  <Media.Play />
                </Media.Video>
              );
            })}
        </Media.Scroller>
      </Media>
    )
  );
}
