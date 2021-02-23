import { useContext } from "react";

import { SnippetContext } from "./context";

export default function useSnippetContext() {
  const [state, setState] = useContext(SnippetContext);
  return [state, setState];
}
