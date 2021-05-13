import React from "react";

import { Thumbnail, Title, Poster, Menu } from "./styles/gallery";

export default function GallerySkeleton({ children }) {
  return children;
}

GallerySkeleton.Thumbnail = function GallerySkeletonThumbnail({ ...rest }) {
  return <Thumbnail {...rest} />;
};

GallerySkeleton.Title = function GallerySkeletonTitle({ ...rest }) {
  return <Title {...rest} />;
};

GallerySkeleton.Poster = function GallerySkeletonPoster({ ...rest }) {
  return <Poster {...rest} />;
};

GallerySkeleton.Menu = function GallerySkeletonMenu({ ...rest }) {
  return <Menu {...rest} />;
};
