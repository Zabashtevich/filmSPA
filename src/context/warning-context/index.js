import { useContext } from "react";
import { WarningContext } from "./context";

export default function useModalContext() {
  const [warningSettings, { show, close }] = useContext(WarningContext);
  return [warningSettings, { show, close }];
}
