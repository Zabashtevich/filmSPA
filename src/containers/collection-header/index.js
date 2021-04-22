import React, { useEffect, useState } from "react";

import { CollectionHeader } from "../../components";
import { getCollectionDetails, getMoneyFormat } from "../../utils";

export default function CollectionHeaderContainer({ data, dataLoading }) {
  const [{ revenue, loading }, setDetails] = useState({
    revenue: null,
    loading: true,
  });

  useEffect(() => {
    if (!dataLoading) {
      async function wrapper() {
        const response = await getCollectionDetails(data.parts);
        console.log(response);
      }
      wrapper();
    }
  }, [dataLoading, data]);

  return (
    <CollectionHeader>
      <CollectionHeader.Wallpaper slug={data?.backdrop_path} />
      <CollectionHeader.Gradient />
      <CollectionHeader.Container>
        <CollectionHeader.Poster slug={data?.poster_path} />
        <CollectionHeader.Info>
          <CollectionHeader.Title>
            {data?.title || data?.name}
          </CollectionHeader.Title>
          <CollectionHeader.Subtitle>Overview</CollectionHeader.Subtitle>
          <CollectionHeader.Subrow>{data?.overview}</CollectionHeader.Subrow>
          <CollectionHeader.Row>
            <CollectionHeader.Fieldname>
              Movie amount:
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
    </CollectionHeader>
  );
}
