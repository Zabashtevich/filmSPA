import React, { useState } from "react";

import { Popular } from "../../components";
import { usePopular } from "./../../hooks";

export default function PopularContainer({ type }) {
  const [data, dataLoading] = usePopular(type);

  return (
    <Popular>
      <Popular.Wrapper>
        <Popular.Title></Popular.Title>
      </Popular.Wrapper>
      <Popular.List>
        <Popular.Item>
          <Popular.Poster />
          <Popular.Meta>
            <Popular.Average></Popular.Average>
            <Popular.Count></Popular.Count>
          </Popular.Meta>
          <Popular.Info>
            <Popular.Subtitle></Popular.Subtitle>
            <Popular.Date></Popular.Date>
          </Popular.Info>
        </Popular.Item>
      </Popular.List>
    </Popular>
  );
}
