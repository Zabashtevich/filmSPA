import React from "react";

import { CollectionHeader } from "../../components";

export default function CollectionHeaderContainer({ data, dataLoading }) {
  console.log(data);
  return (
    <CollectionHeader>
      <CollectionHeader.Wallpaper />
      <CollectionHeader.Gradient />
      <CollectionHeader.Container>
        <CollectionHeader.Poster />
        <CollectionHeader.Info>
          <CollectionHeader.Title></CollectionHeader.Title>
          <CollectionHeader.Subrow></CollectionHeader.Subrow>
          <CollectionHeader.Subtitle></CollectionHeader.Subtitle>
          <CollectionHeader.Subrow></CollectionHeader.Subrow>
          <CollectionHeader.Row>
            <CollectionHeader.Fieldname></CollectionHeader.Fieldname>
            <CollectionHeader.Fieldvalue></CollectionHeader.Fieldvalue>
          </CollectionHeader.Row>
          <CollectionHeader.Row>
            <CollectionHeader.Fieldname></CollectionHeader.Fieldname>
            <CollectionHeader.Fieldvalue></CollectionHeader.Fieldvalue>
          </CollectionHeader.Row>
        </CollectionHeader.Info>
      </CollectionHeader.Container>
    </CollectionHeader>
  );
}
