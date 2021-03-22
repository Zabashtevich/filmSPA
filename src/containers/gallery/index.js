import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { Gallery } from "../../components";
import { getGalleryMenuItems } from "../../utils";

export default function GalleryContainer({ children, ...rest }) {
  const [{ values, active }, setMenu] = useState({
    values: null,
    active: null,
  });
  const { location } = useHistory();

  useEffect(() => {
    setMenu();
  }, []);

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
