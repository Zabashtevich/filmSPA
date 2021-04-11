import React from "react";

import UserDataLogic from "../helpers/user-data-logic";
import ModalContextProvider from "../context/modal-context/context";
import PopupContextProvider from "../context/popup-context/context";
import PaginContextProvider from "../context/pagin-context/context";
import FirebaseContextProvider from "../context/firebase-context/context";
import AuthContextProvider from "../context/auth-context/context";
import CreditsContextProvider from "../context/credits-context/context";
import ProcessContextProvider from "../context/process-context/context";

export default function Wrapper({ children }) {
  return (
    <FirebaseContextProvider>
      <AuthContextProvider>
        <CreditsContextProvider>
          <UserDataLogic>
            <ModalContextProvider>
              <PopupContextProvider>
                <ProcessContextProvider>
                  <PaginContextProvider>{children}</PaginContextProvider>
                </ProcessContextProvider>
              </PopupContextProvider>
            </ModalContextProvider>
          </UserDataLogic>
        </CreditsContextProvider>
      </AuthContextProvider>
    </FirebaseContextProvider>
  );
}
