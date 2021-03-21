import React, { useEffect, useState } from "react";
import { getMediaState } from "../../utils";

import { Media } from "./../../components";

export default function MediaContainer({ data, loading }) {
  const [{ visible, tabs, videos, posters, backdrops }, setState] = useState({
    visible: false,
    videos: null,
    backdrops: null,
    posters: null,
    tabs: null,
  });

  useEffect(() => {
    if (!loading) {
      setState(getMediaState(data));
    }
  }, [loading]);

  return (
    visible && (
      <Media>
        <Media.Header>
          <Media.Title>Media</Media.Title>
          <Media.Wrapper>
            {tabs.map((item) => (
              <Media.Tab key={item}>{item}</Media.Tab>
            ))}
          </Media.Wrapper>
          <Media.All>{`See All `}</Media.All>
        </Media.Header>
        <Media.Scroller>
          <Media.Backdrop />
          <Media.Poster />
          <Media.Video>
            <Media.Thumbnail />
            <Media.Inner>
              <Media.Play />
            </Media.Inner>
          </Media.Video>
        </Media.Scroller>
      </Media>
    )
  );
}
