import React from "react";

import { CollectionParts } from "../../components";
import { getYearFromString } from "../../utils";

export default function CollectionPartsContainer({ loading, data }) {
  return (
    <CollectionParts>
      <CollectionParts.Container>
        <CollectionParts.Title>Collection movies</CollectionParts.Title>
        <CollectionParts.List>
          {!loading &&
            data.parts.map((item) => {
              return (
                <CollectionParts.Card key={item.id}>
                  <CollectionParts.Poster slug={item.poster_path} />
                  <CollectionParts.Wrapper>
                    <CollectionParts.Subtitle>
                      {item.title}
                    </CollectionParts.Subtitle>
                    <CollectionParts.Date>
                      {getYearFromString(item.release_date)}
                    </CollectionParts.Date>
                    <CollectionParts.Overview>
                      {item.overview}
                    </CollectionParts.Overview>
                  </CollectionParts.Wrapper>
                </CollectionParts.Card>
              );
            })}
        </CollectionParts.List>
      </CollectionParts.Container>
    </CollectionParts>
  );
}
