import React, { createContext, useState } from "react";

export const GalleryContext = createContext(null);

export default function GalleryContextProvider({ children }) {
  const [state, setState] = useState({
    data: null,
    title: null,
    poster: null,
    path: null,
  });

  return (
    <GalleryContext.Provider value={[state, setState]}>
      {children}
    </GalleryContext.Provider>
  );
}
