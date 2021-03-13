import React from "react";

import { Popular } from "../../components";

export default function PopularContainer() {
  return (
    <Popular>
      <Popular.Wrapper>
        <Popular.Title></Popular.Title>
      </Popular.Wrapper>
      <Popular.List>
        <Popular.Item>
          <Popular.Poster />
          <Popular.Info>
            <Popular.Desc>
              <Popular.Subtitle></Popular.Subtitle>
              <Popular.Date></Popular.Date>
            </Popular.Desc>
            <Popular.Meta>
              <Popular.Average></Popular.Average>
              <Popular.Count></Popular.Count>
            </Popular.Meta>
          </Popular.Info>
        </Popular.Item>
      </Popular.List>
    </Popular>
  );
}
