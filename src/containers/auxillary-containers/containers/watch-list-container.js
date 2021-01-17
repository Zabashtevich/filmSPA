import React from "react";

import { WatchList } from "../../../components";

import useFirestore from "./../../../hooks/useFirestore";

export default function WatchListContainer({ user }) {
  const [dataLoading, data] = useFirestore(user.displayName, "collection");
  return (
    <WatchList>
      {!dataLoading &&
        data.length > 0 &&
        data.map((item) => {
          return (
            <WatchList.Wrapper>
              <WatchList.ItemIcon />
              <WatchList.ItemName></WatchList.ItemName>
            </WatchList.Wrapper>
          );
        })}
      <WatchList.Wrapper>
        <WatchList.CreateIcon />
        <WatchList.ItemName>Create List</WatchList.ItemName>
      </WatchList.Wrapper>
    </WatchList>
  );
}
