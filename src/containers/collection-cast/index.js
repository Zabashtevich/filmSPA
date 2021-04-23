import React from "react";

import { CollectionCast } from "../../components";

export default function CollectionCastContainer({ loading, details }) {
  return (
    <CollectionCast>
      <CollectionCast.Container>
        <CollectionCast.Title>Actor list:</CollectionCast.Title>
        <CollectionCast.List>
          {!loading &&
            details.cast.slice(1, 15).map((item) => {
              return (
                <CollectionCast.Card key={item.id}>
                  <CollectionCast.Poster slug={item?.profile_path} />
                  <CollectionCast.Info>
                    <CollectionCast.Name>{item.name}</CollectionCast.Name>
                    <CollectionCast.Role>{item.character}</CollectionCast.Role>
                  </CollectionCast.Info>
                </CollectionCast.Card>
              );
            })}
        </CollectionCast.List>
      </CollectionCast.Container>
      <CollectionCast.Container>
        <CollectionCast.Title>Actor list:</CollectionCast.Title>
        <CollectionCast.List>
          {!loading &&
            details.crew.slice(1, 15).map((item) => {
              console.log(item);
              return (
                <CollectionCast.Card key={item.id}>
                  <CollectionCast.Poster slug={item?.profile_path} />
                  <CollectionCast.Info>
                    <CollectionCast.Name>{item.name}</CollectionCast.Name>
                    <CollectionCast.Role>{item.department}</CollectionCast.Role>
                  </CollectionCast.Info>
                </CollectionCast.Card>
              );
            })}
        </CollectionCast.List>
      </CollectionCast.Container>
    </CollectionCast>
  );
}
