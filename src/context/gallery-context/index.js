import { useContext } from "react";

import { GalleryContext } from "./context";

export default function useGalleryContext() {
  const [state, galleryinterface] = useContext(GalleryContext);
  return [state, galleryinterface];
}
