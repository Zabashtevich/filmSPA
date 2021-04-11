import { useContext } from "react";
import { ProcessContext } from "./context";

export default function useProcessContext() {
  return useContext(ProcessContext);
}
