import { createContext } from "react";
import { useRate, useUnrate } from "../../hooks";

export const MetalogicContext = createContext(null);

export default function MetalogicContextProvider({ children }) {
  const [setEstimatingValue] = useRate();
  const [setUnratingId] = useUnrate();

  return (
    <MetalogicContext.Provider value={[setEstimatingValue]}>
      {children}
    </MetalogicContext.Provider>
  );
}
