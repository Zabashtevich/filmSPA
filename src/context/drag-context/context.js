import React, { useState, createContext } from "react";

export const DragContext = createContext(null);

export default function DragContextProvider({ children }) {
  const [drag, setDrag] = useState({ hovered: null, id: null });

  return (
    <DragContext.Provider value={[drag, setDrag]}>
      {children}
    </DragContext.Provider>
  );
}
