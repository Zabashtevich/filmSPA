import React, { useState } from "react";

import { Trending } from "../../components";

export default function TrendingContainer() {
  return (
    <Trending>
      <Trending.Wrapper>
        <Trending.Title></Trending.Title>
      </Trending.Wrapper>
      <Trending.List>
        <Trending.Item>
          <Trending.Poster />
          <Trending.Info>
            <Trending.Name></Trending.Name>
            <Trending.Description></Trending.Description>
            <Trending.Overview></Trending.Overview>
            <Trending.Row>
              <Trending.Subtitle></Trending.Subtitle>
              <Trending.Average></Trending.Average>
              <Trending.Count></Trending.Count>
            </Trending.Row>
          </Trending.Info>
        </Trending.Item>
      </Trending.List>
    </Trending>
  );
}
