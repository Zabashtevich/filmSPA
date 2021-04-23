import React from "react";

import { CollectionParts } from "../../components";
import { getYearFromString } from "../../utils";

export default function CollectionPartsContainer({ loading, data }) {
  return (
    <CollectionParts>
      <CollectionParts.Container>
        <CollectionParts.List>
          {!loading && (
            <CollectionParts.Title>
              {data.parts.length} movies
            </CollectionParts.Title>
          )}
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
                  </CollectionParts.Wrapper>
                  <CollectionParts.Overview>
                    {item.overview}
                  </CollectionParts.Overview>
                </CollectionParts.Card>
              );
            })}
        </CollectionParts.List>
      </CollectionParts.Container>
    </CollectionParts>
  );
}
