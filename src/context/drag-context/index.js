import { useContext } from "react";

import { DragContext } from "./context";

export default function useDragContext() {
  return useContext(DragContext);
}
