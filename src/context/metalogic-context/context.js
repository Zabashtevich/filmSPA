import { createContext } from "react";

import { useEstimate, useUserlist, useFavorite } from "./../../hooks";

export const MetalogicContext = createContext(null);

export default function MetalogicContextProvider({ children }) {
  const [setEstimatingProps] = useEstimate();
  const [setUserlistProps] = useUserlist();
  const [setFavoritingProps] = useFavorite();

  return (
    <MetalogicContext.Provider
      value={[{ setEstimatingProps, setUserlistProps, setFavoritingProps }]}
    >
      {children}
    </MetalogicContext.Provider>
  );
}
