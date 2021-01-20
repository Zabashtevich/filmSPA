import React, { useState, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { WatchList } from "../../../components";
import ErrorModalContainer from "./error-modal-container";
import { AuthContext } from "../../../context/auth-context";
import { createListLogic, deleteItemFromList } from "../../../utils/firebase";
import useFirestore from "./../../../hooks/useFirestore";
import {
  WatchListCreateItemContainer,
  WatchListItemContainer,
  WatchListPlaceholderContainer,
} from "./auxillary-items/watch-list-items-container";
import ConfirmPopupContainer from "./confirm-popup-container";
import ItemDescriptionPopupContainer from "./item-description-popup-container";

export default function WatchListContainer({ user, watchListPopupVisible }) {
  const [dataLoading, data] = useFirestore(user.displayName, "collection");
  const [inputValue, setInputValue] = useState("");
  const [dataSubmiting, setDataSubmiting] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputVisible, setInputVisible] = useState(false);
  const [popupConfirmVisible, setPopupConfirmVisible] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [deletingList, setDeletingList] = useState({ name: "", delete: false });

  useEffect(() => {
    if (!deletingList.delete) return;
    deleteItemFromList(
      firebase,
      deletingList.name,
      data,
      user.displayName,
    ).then(() => {
      setDeletingList({ name: "", delete: false });
    });
  }, [deletingList]);

  const { firebase } = useContext(AuthContext);

  const showErrorModal = (errorText) => {
    document.body.style.overflow = "hidden";
    setErrorMessage([errorText]);
    setErrorModalVisible(true);
  };

  const hideErrorModal = () => {
    document.body.style.overflow = "auto";
    setErrorMessage(null);
    setErrorModalVisible(false);
  };

  const createListSubmit = (e) => {
    if (!e.target.classList.value.includes("Confirm")) return;
    setDataSubmiting(true);
    if (inputValue.length > 20) {
      showErrorModal("Name can be max 20 characters long");
      setDataSubmiting(false);
    } else if (inputValue.length === 0 || inputValue.length < 3) {
      showErrorModal("Name should be at least 4 characters long");
      setDataSubmiting(false);
    } else {
      createListLogic(firebase, inputValue, data, user.displayName).then(() => {
        setInputValue("");
        setInputVisible(false);
        setDataSubmiting(false);
      });
    }
  };

  const deleteListSubmit = (name) => {
    setDeletingList((prev) => ({ ...prev, name: name }));
    setPopupConfirmVisible(true);
    setConfirmMessage(`Are you sure you want to delete list ${name}?`);
  };

  const closeConfirmWindown = (value) => {
    setDeletingList((prev) => ({ ...prev, delete: value }));
    setConfirmMessage("");
    setPopupConfirmVisible(false);
  };
  return (
    <>
      {popupConfirmVisible &&
        createPortal(
          <ConfirmPopupContainer
            message={confirmMessage}
            closeConfirmWindow={closeConfirmWindown}
            popupConfirmVisible={popupConfirmVisible}
          />,
          document.querySelector("#root"),
        )}
      {errorModalVisible &&
        createPortal(
          <ErrorModalContainer
            errorMessage={errorMessage}
            closeModal={hideErrorModal}
            errorModalVisible={errorModalVisible}
          />,
          document.querySelector("#root"),
        )}
      <CSSTransition
        in={user && watchListPopupVisible}
        appear={true}
        timeout={{ enter: 600, exit: 600 }}
        unmountOnExit
        classNames="fade"
      >
        <WatchList>
          {!dataLoading && (
            <>
              {data.length > 0 ? (
                <WatchListItemContainer
                  deleteListSubmit={deleteListSubmit}
                  data={data}
                />
              ) : (
                <WatchListPlaceholderContainer />
              )}

              <WatchListCreateItemContainer
                inputValue={inputValue}
                setInputValue={setInputValue}
                setInputVisible={setInputVisible}
                inputVisible={inputVisible}
                createListSubmit={createListSubmit}
              />
            </>
          )}
        </WatchList>
      </CSSTransition>
    </>
  );
}
