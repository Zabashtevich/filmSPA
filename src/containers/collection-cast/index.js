import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { CollectionCast } from "../../components";
import { CollectionCastSkeleton } from "../../components/skeleton";
import { range } from "../../utils";

export default function CollectionCastContainer({ loading, details }) {
  return (
    <CollectionCast>
      <CollectionCast.Container>
        <CollectionCast.Title>Actor list:</CollectionCast.Title>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition key={loading} classNames="fade" timeout={500}>
            <CollectionCast.List>
              {loading &&
                range(1, 15).map((item) => (
                  <CollectionCastSkeleton key={item} />
                ))}
              {!loading &&
                details.cast.slice(0, 15).map((item) => {
                  return (
                    <CollectionCast.Card
                      key={item.id}
                      data-testid="collection-cast-actor"
                    >
                      <CollectionCast.Poster
                        slug={item?.profile_path}
                        data-testid="actor-poster"
                      />
                      <CollectionCast.Info>
                        <CollectionCast.Name>{item.name}</CollectionCast.Name>
                        <CollectionCast.Role>
                          {item.character}
                        </CollectionCast.Role>
                      </CollectionCast.Info>
                    </CollectionCast.Card>
                  );
                })}
            </CollectionCast.List>
          </CSSTransition>
        </SwitchTransition>
      </CollectionCast.Container>
      <CollectionCast.Container>
        <CollectionCast.Title>Crew list:</CollectionCast.Title>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition key={loading} classNames="fade" timeout={500}>
            <CollectionCast.List>
              {loading &&
                range(1, 15).map((item) => (
                  <CollectionCastSkeleton key={item} />
                ))}
              {!loading &&
                details.crew.slice(0, 15).map((item) => {
                  return (
                    <CollectionCast.Card
                      key={item.id}
                      data-testid="collection-cast-crew"
                    >
                      <CollectionCast.Poster
                        slug={item?.profile_path}
                        data-testid="crew-poster"
                      />
                      <CollectionCast.Info>
                        <CollectionCast.Name>{item.name}</CollectionCast.Name>
                        <CollectionCast.Role>
                          {item.department}
                        </CollectionCast.Role>
                      </CollectionCast.Info>
                    </CollectionCast.Card>
                  );
                })}
            </CollectionCast.List>
          </CSSTransition>
        </SwitchTransition>
      </CollectionCast.Container>
    </CollectionCast>
  );
}
