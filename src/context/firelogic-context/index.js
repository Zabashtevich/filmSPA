import { useContext } from "react";
import { FirelogicContext } from "./context";

export default function useFirelogicContext() {
  const [logic] = useContext(FirelogicContext);
  return [logic];
}
