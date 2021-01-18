import React, { useState, useContext } from "react";
import { CSSTransition } from "react-transition-group";

import { WatchList } from "../../../components";
import { AuthContext } from "../../../context/auth-context";

import { createListLogic } from "../../../utils/firebase";
import useFirestore from "./../../../hooks/useFirestore";

export default function WatchListContainer({ user, watchListPopupVisible }) {
  const [dataLoading, data] = useFirestore(user.displayName, "collection");
  const [warningVisible, setWarningVisible] = useState(false);
  const [inputNameVisible, setInputNameVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [dataSubmiting, setDataSubmiting] = useState(false);
  const [labelAnimating, setLabelAnimating] = useState(false);
  const [warningAnimating, setWarningAnimating] = useState(false);

  const { firebase } = useContext(AuthContext);

  const creatListToogler = (e) => {
    if (
      e.target.classList.value.includes("Abort") ||
      e.target.classList.value.includes("CreateIcon")
    ) {
      setInputNameVisible((prev) => !prev);
    }
  };

  const createListSubmit = () => {
    setDataSubmiting(true);
    if (inputValue.length > 20) {
      setWarningVisible(true);
      setWarningMessage("MAX 20 SYMBOLS");
      setTimeout(() => {
        setWarningVisible(false);
        setWarningMessage("MAX 20 SYMBOLS");
        setDataSubmiting(false);
      }, 5000);
    } else if (inputValue.length === 0) {
      setWarningVisible(true);
      setWarningMessage("NAME IS EMPTY");
      setTimeout(() => {
        setWarningVisible(false);
        setWarningMessage("NAME IS EMPTY");
        setDataSubmiting(false);
      }, 5000);
    }
    createListLogic(firebase, inputValue, data, user.displayName).then(() => {
      setInputValue(false);
      setInputNameVisible(false);
      setDataSubmiting(false);
    });
  };

  return (
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
                <WatchList.ItemContainer>
                  <WatchList.Number>{i + 1}</WatchList.Number>
                  <WatchList.Name>{item.name.toUpperCase()}</WatchList.Name>
                  <WatchList.Date></WatchList.Date>
                  <WatchList.IconsWrapper>
                    <WatchList.Add />
                    <WatchList.Remove />
                  </WatchList.IconsWrapper>
                </WatchList.ItemContainer>
              ))}
            <WatchList.CreateListContainer>
              {!inputNameVisible && (
                <WatchList.Placeholder>CREATE LIST</WatchList.Placeholder>
              )}
              <WatchList.CreateListIconsWrapper>
                {!inputNameVisible && (
                  <WatchList.CreateIcon onClick={creatListToogler} />
                )}
                <CSSTransition
                  in={inputNameVisible}
                  appear={true}
                  timeout={{ enter: 200, exit: 300 }}
                  unmountOnExit
                  classNames="fade"
                >
                  <WatchList.Input placeholder={"Enter name of list"} />
                </CSSTransition>
                {inputNameVisible && (
                  <>
                    <WatchList.Confirm />
                    <WatchList.Abort onClick={creatListToogler} />
                  </>
                )}
              </WatchList.CreateListIconsWrapper>
            </WatchList.CreateListContainer>
          </>
        )}
      </WatchList>
    </CSSTransition>
  );
}
