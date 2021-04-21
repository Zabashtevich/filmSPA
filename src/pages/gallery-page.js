import React from "react";
import { useParams } from "react-router";

import {
  FooterContainer,
  GalleryContainer,
  HeaderContainer,
  PopupContainer,
} from "../containers";
import { useFetch } from "../hooks";

export default function GalleryPage() {
  const { slug, direction } = useParams();
  const [data, loading] = useFetch(direction, slug, true);

  return (
    <>
      <HeaderContainer />
      <PopupContainer />
      <GalleryContainer
        data={data}
        loading={loading}
        slug={slug}
        direction={direction}
      />
      <FooterContainer />
    </>
  );
}
