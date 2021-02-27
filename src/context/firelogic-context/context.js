import { createContext } from "react";

import { useUserlist, useFavorite, useEstimate } from "./../../hooks";

export const FirelogicContext = createContext(null);

export default function FirelogicContextProvider({ children }) {
  const [setUserlistProps] = useUserlist();
  const [setFavoriteProps] = useFavorite();
  const [setEstimateProps] = useEstimate();

  return (
    <FirelogicContext.Provider
      value={{ setUserlistProps, setFavoriteProps, setEstimateProps }}
    >
      {children}
    </FirelogicContext.Provider>
  );
}
