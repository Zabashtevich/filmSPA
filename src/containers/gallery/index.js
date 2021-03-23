import React, { useEffect } from "react";

import { Gallery } from "../../components";

export default function GalleryContainer() {
  useEffect(() => {}, []);

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
