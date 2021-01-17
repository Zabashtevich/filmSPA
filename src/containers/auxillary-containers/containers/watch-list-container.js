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

  const { firebase } = useContext(AuthContext);

  const createListActive = () => {
    setInputNameVisible((prev) => !prev);
  };

  const createListSubmit = () => {
    alert(inputValue);
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
                  <WatchList.InputLabel>
                    ENTER NAME OF LIST
                  </WatchList.InputLabel>
                  <WatchList.InputName
                    placeholder={"max 20 symbols "}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <WatchList.ButtonsWrapper>
                    <WatchList.CreateButton onClick={createListSubmit}>
                      CREATE
                    </WatchList.CreateButton>
                    <WatchList.CloseButton>CANCEL</WatchList.CloseButton>
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
