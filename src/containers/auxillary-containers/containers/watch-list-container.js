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

  const createListActive = (e) => {
    if (
      e.target.classList.value.includes("Wrapper") ||
      e.target.classList.value.includes("CreateIcon")
    ) {
      console.log("hu");
      setInputNameVisible((prev) => !prev);
    }
  };

  const createListAbort = (e) => {
    console.log("hu1");
    setInputNameVisible((prev) => !prev);
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
    createListLogic(firebase, inputValue, setDataSubmiting);
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
              data.map((item) => {
                return (
                  <WatchList.Wrapper>
                    <WatchList.ItemIcon />
                    <WatchList.ItemName>{item.name}</WatchList.ItemName>
                  </WatchList.Wrapper>
                );
              })}
            <WatchList.Wrapper onClick={createListActive}>
              <WatchList.CreateIcon />
              {!inputNameVisible && (
                <WatchList.ItemName>CREATE LIST</WatchList.ItemName>
              )}
              {inputNameVisible && (
                <>
                  <CSSTransition
                    in={!warningVisible && !warningAnimating}
                    appear={true}
                    timeout={{ enter: 200, exit: 300 }}
                    unmountOnExit
                    classNames="fade"
                    onEnter={() => setLabelAnimating(true)}
                    onExited={() => setLabelAnimating(false)}
                  >
                    <WatchList.InputLabel>
                      ENTER NAME OF LIST
                    </WatchList.InputLabel>
                  </CSSTransition>
                  <CSSTransition
                    in={warningVisible && !labelAnimating}
                    appear={true}
                    timeout={{ enter: 200, exit: 300 }}
                    unmountOnExit
                    classNames="fade"
                    onEnter={() => setWarningAnimating(true)}
                    onExited={() => setWarningAnimating(false)}
                  >
                    <WatchList.Warning>{warningMessage}</WatchList.Warning>
                  </CSSTransition>
                  <WatchList.InputName
                    placeholder={"max 20 symbols "}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    warningVisible={warningVisible}
                  />
                  <WatchList.ButtonsWrapper>
                    <WatchList.CreateButton
                      onClick={(e) => createListSubmit(e)}
                    >
                      CREATE
                    </WatchList.CreateButton>
                    <WatchList.CloseButton onClick={(e) => createListAbort(e)}>
                      CANCEL
                    </WatchList.CloseButton>
                  </WatchList.ButtonsWrapper>
                </>
              )}
            </WatchList.Wrapper>
          </>
        )}
      </WatchList>
    </CSSTransition>
  );
}
