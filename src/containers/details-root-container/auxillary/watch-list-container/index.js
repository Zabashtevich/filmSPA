import React, { useState, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { WatchList } from "../../../../components";
import { AuthContext } from "../../../../context/auth-context";
import {
  createListLogic,
  deleteList,
  deleteFromList,
  addToList,
} from "../../../../utils/firebase";
import useFirestore from "../../../../hooks/useFirestore";
import CreateItemContainer from "./items/create-item-container";
import ItemContainer from "./items/item-container";
import PlaceholderContainer from "./items/placeholder-container";
import { ConfirmPopupContainer, ErrorModalContainer } from "../../../";

export default function WatchListContainer({
  user,
  watchListPopupVisible,
  slug,
  item,
}) {
  const [dataLoading, data] = useFirestore(
    user && `${user.displayName}`,
    "collection",
  );
  const [inputValue, setInputValue] = useState("");
  const [dataSubmiting, setDataSubmiting] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputVisible, setInputVisible] = useState(false);
  const [popupConfirmVisible, setPopupConfirmVisible] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [deletingList, setDeletingList] = useState({ id: "", delete: false });
  const [addedToList, setAddedToList] = useState(false);

  const { firebase } = useContext(AuthContext);

  useEffect(() => {
    if (!deletingList.delete) return;
    deleteList(firebase, deletingList.id, data, user.displayName).then(() => {
      setDeletingList({ id: "", delete: false });
    });
  }, [deletingList]);

  useEffect(() => {
    if (data.length === 0) return;
    if (data.map((item) => item.content.includes(+slug))[0]) {
      setAddedToList(true);
    }
  }, [data, slug]);

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

  const creatListToogler = (e) => {
    if (dataSubmiting) {
      return;
    } else {
      if (data.length === 5) {
        showErrorModal("Sorry but now you can create ony 5 lists");
        return;
      }
      if (
        e.target.classList.value.includes("Abort") ||
        e.target.classList.value.includes("CreateIcon")
      ) {
        setInputVisible((prev) => !prev);
      }
    }
  };
  const createListSubmit = (e) => {
    if (!e.target.classList.value.includes("Confirm")) return;
    setInputVisible(false);
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
        setDataSubmiting(false);
      });
    }
  };

  const deleteListSubmit = (id, name) => {
    setDeletingList((prev) => ({ ...prev, id }));
    setPopupConfirmVisible(true);
    setConfirmMessage(`Are you sure you want to delete list ${name}?`);
  };

  const closeConfirmWindow = (value) => {
    setDeletingList((prev) => ({ ...prev, delete: value }));
    setConfirmMessage("");
    setPopupConfirmVisible(false);
  };

  const onAddToList = (id) => {
    addToList(firebase, user.displayName, id, item, data).then(() => {
      setAddedToList(true);
    });
  };
  const onRemoveFromList = (id) => {
    deleteFromList(firebase, user.displayName, id, item, data);
  };

  return (
    <>
      {popupConfirmVisible &&
        createPortal(
          <ConfirmPopupContainer
            message={confirmMessage}
            closeConfirmWindow={closeConfirmWindow}
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
                <ItemContainer
                  deleteListSubmit={deleteListSubmit}
                  data={data}
                  onAddToList={onAddToList}
                  addedToList={addedToList}
                  onRemoveFromList={onRemoveFromList}
                />
              ) : (
                <PlaceholderContainer />
              )}

              <CreateItemContainer
                inputValue={inputValue}
                setInputValue={setInputValue}
                setInputVisible={setInputVisible}
                inputVisible={inputVisible}
                createListSubmit={createListSubmit}
                creatListToogler={creatListToogler}
              />
            </>
          )}
        </WatchList>
      </CSSTransition>
    </>
  );
}
