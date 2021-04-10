import React from "react";

import UserDataLogic from "../helpers/user-data-logic";
import ModalContextProvider from "../context/modal-context/context";
import NoticeContextProvider from "../context/notice-context/context";
import PopupContextProvider from "../context/popup-context/context";
import PaginContextProvider from "../context/pagin-context/context";
import FirebaseContextProvider from "../context/firebase-context/context";
import AuthContextProvider from "../context/auth-context/context";

export default function Wrapper({ children }) {
  return (
    <FirebaseContextProvider>
      <AuthContextProvider>
        <UserDataLogic>
          <ModalContextProvider>
            <NoticeContextProvider>
              <PopupContextProvider>
                <PaginContextProvider>{children}</PaginContextProvider>
              </PopupContextProvider>
            </NoticeContextProvider>
          </ModalContextProvider>
        </UserDataLogic>
      </AuthContextProvider>
    </FirebaseContextProvider>
  );
}
