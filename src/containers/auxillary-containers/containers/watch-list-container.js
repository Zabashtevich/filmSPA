import React from "react";

import { WatchList } from "../../../components";

import useFirestore from "./../../../hooks/useFirestore";

export default function WatchListContainer({ user }) {
  const [dataLoading, data] = useFirestore(user.displayName, "collection");
  return (
    <WatchList>
      <WatchList.Wrapper>
        <WatchList.CreateIcon />
      </WatchList.Wrapper>
    </WatchList>
  );
}
