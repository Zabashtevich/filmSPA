import React from "react";

import ModalContextProvider from "../context/modal-context/context";
import PopupContextProvider from "../context/popup-context/context";
import PaginContextProvider from "../context/pagin-context/context";
import FirebaseContextProvider from "../context/firebase-context/context";
import AuthContextProvider from "../context/auth-context/context";
import CreditsContextProvider from "../context/credits-context/context";
import ProcessContextProvider from "../context/process-context/context";
import DragContextProvider from "../context/drag-context/context";

export default function Wrapper({ children }) {
  return (
    <FirebaseContextProvider>
      <AuthContextProvider>
        <CreditsContextProvider>
          <ModalContextProvider>
            <PopupContextProvider>
              <ProcessContextProvider>
                <DragContextProvider>
                  <PaginContextProvider>{children}</PaginContextProvider>
                </DragContextProvider>
              </ProcessContextProvider>
            </PopupContextProvider>
          </ModalContextProvider>
        </CreditsContextProvider>
      </AuthContextProvider>
    </FirebaseContextProvider>
  );
}
