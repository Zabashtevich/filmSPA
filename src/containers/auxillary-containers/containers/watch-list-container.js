import React, { useState, useContext } from "react";

import { WatchList } from "../../../components";
import { AuthContext } from "../../../context/auth-context";

import { createListLogic } from "../../../utils/firebase";
import useFirestore from "./../../../hooks/useFirestore";

export default function WatchListContainer({ user }) {
  const [dataLoading, data] = useFirestore(user.displayName, "collection");
  const [warningVisible, setWarningVisible] = useState(false);
  const [inputNameVisible, setInputNameVisible] = useState(false);

  const { firebase } = useContext(AuthContext);

  const createListHandle = () => {
    createListLogic(firebase);
  };

  return (
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
          <WatchList.Wrapper onClick={createListHandle}>
            <WatchList.CreateIcon />
            {inputNameVisible && (
              <WatchList.ItemName>CREATE LIST</WatchList.ItemName>
            )}
            {!inputNameVisible && (
              <>
                <WatchList.InputLabel>CHOOSE NAME OF LIST</WatchList.InputLabel>
                <WatchList.InputName />
                <WatchList.CreateButton>CREATE LIST</WatchList.CreateButton>
              </>
            )}
          </WatchList.Wrapper>
        </>
      )}
    </WatchList>
  );
}
