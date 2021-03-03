import React from "react";
import { useParams } from "react-router";
import { useFetch } from "../../hooks";

import { DetailsPoster } from "../../components";

export default function DetailsPosterContainer() {
  const { location, direction } = useParams();
  const [data, loading] = useFetch(location, direction);
  console.log(location);
  return (
    <DetailsPoster>
      <DetailsPoster.Wallpaper />
      <DetailsPoster.Gradient />
      <DetailsPoster.Column>
        <DetailsPoster.Poster />
      </DetailsPoster.Column>
      <DetailsPoster.Column>
        <DetailsPoster.Title></DetailsPoster.Title>
        <DetailsPoster.Overview></DetailsPoster.Overview>
        <DetailsPoster.Subtitle></DetailsPoster.Subtitle>
        <DetailsPoster.Row>
          <DetailsPoster.Fieldname></DetailsPoster.Fieldname>
          <DetailsPoster.Fieldvalue></DetailsPoster.Fieldvalue>
        </DetailsPoster.Row>
      </DetailsPoster.Column>
      <DetailsPoster.Column>
        <DetailsPoster.Credits>
          <DetailsPoster.Wrapper>
            <DetailsPoster.Average></DetailsPoster.Average>
            <DetailsPoster.Count></DetailsPoster.Count>
          </DetailsPoster.Wrapper>
          <DetailsPoster.Link />
        </DetailsPoster.Credits>
      </DetailsPoster.Column>
    </DetailsPoster>
  );
}
