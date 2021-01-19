import React, { useState, useContext } from "react";
import { CSSTransition } from "react-transition-group";

import { WatchList } from "../../../components";
import ErrorModalContainer from "./error-modal-container";
import { AuthContext } from "../../../context/auth-context";

import { createListLogic } from "../../../utils/firebase";
import useFirestore from "./../../../hooks/useFirestore";

export default function WatchListContainer({ user, watchListPopupVisible }) {
  const [dataLoading, data] = useFirestore(user.displayName, "collection");
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dataSubmiting, setDataSubmiting] = useState(false);
  const [createAnimating, setCreateAnimating] = useState(false);
  const [confirmAnimating, setConfirmAnimating] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { firebase } = useContext(AuthContext);

  const creatListToogler = (e) => {
    if (
      e.target.classList.value.includes("Abort") ||
      e.target.classList.value.includes("CreateIcon")
    ) {
      setInputVisible((prev) => !prev);
    }
  };

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
        setInputValue(false);
        setInputVisible(false);
        setDataSubmiting(false);
      });
    }
  };

  const deleteListSubmit = () => {
    alert("hi");
  };

  return (
    <>
      {errorModalVisible && (
        <ErrorModalContainer
          errorMessage={errorMessage}
          closeModal={hideErrorModal}
          errorModalVisible={errorModalVisible}
        />
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
              {data.length > 0 &&
                data.map((item, i) => (
                  <WatchList.ItemContainer key={item.name}>
                    <WatchList.Number>{i + 1}</WatchList.Number>
                    <WatchList.Name>{item.name.toUpperCase()}</WatchList.Name>
                    <WatchList.Date></WatchList.Date>
                    <WatchList.IconsWrapper>
                      <WatchList.Add />
                      <WatchList.Remove onClick={(e) => deleteListSubmit(e)} />
                    </WatchList.IconsWrapper>
                  </WatchList.ItemContainer>
                ))}
              <WatchList.ItemContainer createitem={1}>
                <CSSTransition
                  in={!inputVisible && !confirmAnimating}
                  appear={true}
                  timeout={{ enter: 300, exit: 300 }}
                  unmountOnExit
                  classNames="fade"
                >
                  <WatchList.Placeholder>CREATE LIST</WatchList.Placeholder>
                </CSSTransition>
                <CSSTransition
                  in={inputVisible && !createAnimating}
                  appear={true}
                  timeout={{ enter: 300, exit: 300 }}
                  unmountOnExit
                  classNames="fade"
                >
                  <WatchList.Input
                    placeholder={"Enter a name"}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </CSSTransition>
                <CSSTransition
                  in={inputVisible && !createAnimating}
                  appear={true}
                  timeout={{ enter: 300, exit: 300 }}
                  unmountOnExit
                  classNames="fade"
                  onEnter={() => setConfirmAnimating(true)}
                  onExited={() => setConfirmAnimating(false)}
                >
                  <WatchList.CreateListIconsWrapper>
                    <WatchList.Confirm onClick={(e) => createListSubmit(e)} />
                    <WatchList.Abort onClick={creatListToogler} />
                  </WatchList.CreateListIconsWrapper>
                </CSSTransition>
                <CSSTransition
                  in={!inputVisible && !confirmAnimating}
                  appear={true}
                  timeout={{ enter: 300, exit: 300 }}
                  unmountOnExit
                  classNames="fade"
                  onEnter={() => setCreateAnimating(true)}
                  onExited={() => setCreateAnimating(false)}
                >
                  <WatchList.CreateListIconsWrapper>
                    <WatchList.CreateIcon onClick={creatListToogler} />
                  </WatchList.CreateListIconsWrapper>
                </CSSTransition>
              </WatchList.ItemContainer>
            </>
          )}
        </WatchList>
      </CSSTransition>
    </>
  );
}
