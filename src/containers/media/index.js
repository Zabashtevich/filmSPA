import React from "react";

import { Media } from "./../../components";

export default function MediaContainer() {
  return (
    <Media>
      <Media.Header>
        <Media.Title></Media.Title>
        <Media.Wrapper>
          <Media.Tab></Media.Tab>
        </Media.Wrapper>
        <Media.All></Media.All>
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
  );
}
