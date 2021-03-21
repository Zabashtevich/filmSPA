import React, { useEffect, useState } from "react";
import { getMediaState } from "../../utils";

import { Media } from "./../../components";

export default function MediaContainer({ data, loading }) {
  const [state, setState] = useState({
    visible: false,
    videos: null,
    backdrops: null,
    posters: null,
    tabs: null,
    active: null,
  });

  useEffect(() => {
    if (!loading) {
      setState(getMediaState(data));
    }
  }, [loading]);

  function name(params) {}

  return (
    state.visible && (
      <Media>
        <Media.Header>
          <Media.Title>Media</Media.Title>
          <Media.Wrapper>
            {state.tabs.map((item) => {
              return (
                <Media.Tab key={item} selected={item === state.active && 1}>
                  {item}
                </Media.Tab>
              );
            })}
          </Media.Wrapper>
          <Media.All>{`See All ${state.active}`}</Media.All>
        </Media.Header>
        <Media.Scroller>
          {/* {state.backdrops.slice(0, 10).map((item) => {
            console.log(item);
            return <Media.Backdrop file={item.file_path} key={item.file_path} />;
          })} */}
          {/* {state.posters.slice(0, 10).map((item) => {
            console.log(item);
            return <Media.Poster file={item.file_path} />;
          })} */}

          {state.videos.map((item) => {
            console.log(item);
            return <Media.Video key={item.key} url={item.key} />;
          })}
        </Media.Scroller>
      </Media>
    )
  );
}
