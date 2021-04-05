import React from "react";

import UserDataLogic from "../helpers/user-data-logic";
import CreditsContextProvider from "../context/credits-context/context";
import ModalContextProvider from "../context/modal-context/context";
import NoticeContextProvider from "../context/notice-context/context";
import PopupContextProvider from "../context/popup-context/context";
import PaginContextProvider from "../context/pagin-context/context";

export default function Wrapper({ children }) {
  return (
    <UserDataLogic>
      <ModalContextProvider>
        <NoticeContextProvider>
          <CreditsContextProvider>
            <PopupContextProvider>
              <PaginContextProvider>{children}</PaginContextProvider>
            </PopupContextProvider>
          </CreditsContextProvider>
        </NoticeContextProvider>
      </ModalContextProvider>
    </UserDataLogic>
  );
}
