import React from "react";
import { useHistory } from "react-router";

import { Gallery } from "../../components";

export default function GalleryContainer({ children, ...rest }) {
  const { location } = useHistory();
  console.log(location);

  return (
    <Gallery>
      <Gallery.Header>
        <Gallery.Folder />
        <Gallery.Information>
          <Gallery.Title></Gallery.Title>
          <Gallery.Back></Gallery.Back>
        </Gallery.Information>
      </Gallery.Header>
      <Gallery.Column>
        <Gallery.Menu>
          <Gallery.Value>
            <Gallery.Subtitle></Gallery.Subtitle>
            <Gallery.Amount></Gallery.Amount>
          </Gallery.Value>
        </Gallery.Menu>
      </Gallery.Column>
      <Gallery.Column>
        <Gallery.Backdrop />
        <Gallery.Poster />
      </Gallery.Column>
    </Gallery>
  );
}
