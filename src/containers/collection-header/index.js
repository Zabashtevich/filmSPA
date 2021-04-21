import React from "react";

import { CollectionHeader } from "../../components";

export default function CollectionHeaderContainer() {
  return (
    <CollectionHeader>
      <CollectionHeader.Wallpaper />
      <CollectionHeader.Gradient />
      <CollectionHeader.Section>
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
      </CollectionHeader.Section>
    </CollectionHeader>
  );
}
