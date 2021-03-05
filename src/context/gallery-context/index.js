import { useContext } from "react";

import { GalleryContext } from "./context";

export default function useGalleryContext() {
  const [state, interface] = useContext(GalleryContext);
  return [state, interface];
}
