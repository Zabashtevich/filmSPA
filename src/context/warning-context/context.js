import { createContext, useState } from "react";

export const WarningContext = createContext(null);

export default function WarningContextProvider({ children }) {
  const [warningSettings, setWarningSettings] = useState({
    message: "",
    visible: false,
  });

  const show = (message) => {
    setWarningSettings({ message, visible: true });
  };

  const close = () => {
    setWarningSettings({ message: "", visible: false });
  };

  return (
    <WarningContext.Provider value={[warningSettings, { show, close }]}>
      {children}
    </WarningContext.Provider>
  );
}
