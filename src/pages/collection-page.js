import React from "react";
import { useParams } from "react-router";
import { useFetch } from "../hooks";

import { HeaderContainer, CollectionHeaderContainer } from "./../containers";

export default function CollectionPage() {
  const { slug } = useParams();
  const [data, dataLoading] = useFetch({ type: "collection", target: slug });
  return (
    <>
      <HeaderContainer />
      <CollectionHeaderContainer data={data} dataLoading={dataLoading} />
    </>
  );
}
