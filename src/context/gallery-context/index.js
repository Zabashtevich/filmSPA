import { useContext } from "react";
import { GalleryContext } from "./context";

export default function useGalleryContext() {
  const [state, logic] = useContext(GalleryContext);
  return [state, logic];
}
