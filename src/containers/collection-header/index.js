import React, { useEffect, useState } from "react";

import { CollectionHeader } from "../../components";
import { getCollectionDetails, getMoneyFormat } from "../../utils";

export default function CollectionHeaderContainer({ data, dataLoading }) {
  const [{ revenue, cast, crew, loading }, setDetails] = useState({
    revenue: null,
    cast: null,
    crew: null,
    loading: true,
  });

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

  console.log(data);

  return (
    <CollectionHeader slug={data?.backdrop_path}>
      <CollectionHeader.Inner>
        <CollectionHeader.Container>
          <CollectionHeader.Poster slug={data?.poster_path} />
          <CollectionHeader.Info>
            <CollectionHeader.Title>
              {data?.title || data?.name}
            </CollectionHeader.Title>
            <CollectionHeader.Subtitle>Overview</CollectionHeader.Subtitle>
            <CollectionHeader.Overview>
              {data?.overview}
            </CollectionHeader.Overview>
            <CollectionHeader.Row>
              <CollectionHeader.Fieldname>
                Movies amount:
              </CollectionHeader.Fieldname>
              <CollectionHeader.Fieldvalue>
                {data?.parts.length}
              </CollectionHeader.Fieldvalue>
            </CollectionHeader.Row>
            <CollectionHeader.Row>
              <CollectionHeader.Fieldname>Revenue:</CollectionHeader.Fieldname>
              <CollectionHeader.Fieldvalue>
                {!loading && getMoneyFormat(revenue)}
              </CollectionHeader.Fieldvalue>
            </CollectionHeader.Row>
          </CollectionHeader.Info>
        </CollectionHeader.Container>
      </CollectionHeader.Inner>
    </CollectionHeader>
  );
}
