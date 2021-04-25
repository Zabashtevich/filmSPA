import React, { useState, createContext } from "react";
import { firebase } from "../../libs/firebase";

export const DragContext = createContext(null);

export default function DragContextProvider({ children }) {
  const [drag, setDrag] = useState({
    hovered: null,
    list: null,
    type: "dropzone",
  });

  return (
    <DragContext.Provider value={[drag, setDrag]}>
      {children}
    </DragContext.Provider>
  );
}
