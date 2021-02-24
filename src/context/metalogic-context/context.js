import { createContext } from "react";
import { useSelector } from "react-redux";

import { useEstimate, useUserlist, useFavorite } from "./../../hooks";

export const MetalogicContext = createContext(null);

export default function MetalogicContextProvider({ children }) {
  const userProfile = useSelector((state) => state.userProfile);

  const { profile } = userProfile;

  const [estimatingSucess, setEstimatingProps] = useEstimate(
    profile?.displayName,
  );
  const [userlistSucess, setUserlistProps] = useUserlist(profile?.displayName);
  const [favoritingSucess, setFavoritingProps] = useFavorite(
    profile?.displayName,
  );

  return (
    <MetalogicContext.Provider
      value={[
        { estimatingSucess, userlistSucess, favoritingSucess },
        {
          setEstimatingProps,
          setUserlistProps,
          setFavoritingProps,
        },
      ]}
    >
      {children}
    </MetalogicContext.Provider>
  );
}
