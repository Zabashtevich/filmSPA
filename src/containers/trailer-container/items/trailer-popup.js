import React from "react";

import { Trailer } from "../../../components";

export default function TrailerPopup() {
  return (
    <Trailer.Backdrop>
      <Trailer.Content>
        <Trailer.Videoplayer />
        <Trailer.Wrapper>
          <Trailer.Poster />
          <Trailer.Info>
            <Trailer.Title></Trailer.Title>
            <Trailer.Year></Trailer.Year>
            <Trailer.Description></Trailer.Description>
            <Trailer.Metainfo>
              <Trailer.Average></Trailer.Average>
              <Trailer.Count></Trailer.Count>
            </Trailer.Metainfo>
          </Trailer.Info>
          <Trailer.Container>
            <Trailer.Item />
          </Trailer.Container>
        </Trailer.Wrapper>
      </Trailer.Content>
    </Trailer.Backdrop>
  );
}
