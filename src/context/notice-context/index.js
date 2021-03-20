import { useContext } from "react";
import { NoticeContext } from "./context";

export default function useNoticeContext() {
  const [state, controller] = useContext(NoticeContext);
  return [state, controller];
}
