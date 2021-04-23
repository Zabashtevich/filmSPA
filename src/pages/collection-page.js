import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetch } from "../hooks";
import { getCollectionDetails } from "../utils";

import {
  HeaderContainer,
  CollectionHeaderContainer,
  CollectionCastContainer,
  CollectionPartsContainer,
  FooterContainer,
} from "./../containers";

export default function CollectionPage() {
  const [details, setDetails] = useState({
    cast: null,
    crew: null,
    revenue: null,
    loading: true,
  });
  const { slug } = useParams();
  const [data, dataLoading] = useFetch({ type: "collection", target: slug });

  useEffect(() => {
    if (!dataLoading) {
      async function asyncWrapper() {
        const details = await getCollectionDetails(data.parts);
        setDetails({
          ...details,
          loading: false,
        });
      }
      asyncWrapper();
    }
  }, [dataLoading, data]);

  return (
    <>
      <HeaderContainer />
      <CollectionHeaderContainer
        data={data}
        loading={dataLoading || details.loading}
        details={details}
      />
      <CollectionCastContainer loading={details.loading} details={details} />
      <CollectionPartsContainer loading={dataLoading} data={data} />
      <FooterContainer />
    </>
  );
}
