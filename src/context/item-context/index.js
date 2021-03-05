import { useContext } from "react";
import { ItemContext } from "./context";

export default function useItemContext() {
  const [item, logic] = useContext(ItemContext);
  return [item, logic];
}
