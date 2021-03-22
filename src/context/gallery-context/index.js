import { useContext } from "react";
import { GalleryContext } from "./context";

export default function useGalleryContext() {
  const [state, setState] = useContext(GalleryContext);
  return [state, setState];
}
