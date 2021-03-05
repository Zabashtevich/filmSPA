import { useContext } from "react";
import { ItemContext } from "./context";

export default function useItemContext() {
  const [item, setItem] = useContext(ItemContext);
  return [item, setItem];
}
