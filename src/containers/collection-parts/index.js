import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { CollectionParts } from "../../components";
import { range } from "../../utils";
import PartSkeleton from "./skeleton/part-skeleton";

export default function CollectionPartsContainer({ loading, data }) {
  return (
    <CollectionParts>
      <CollectionParts.Title>Collection movies</CollectionParts.Title>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition classNames="fade" timeout={500} key={loading}>
          <CollectionParts.Container>
            <CollectionParts.List>
              {loading &&
                range(1, 3).map((item) => <PartSkeleton key={item} />)}
              {!loading &&
                data.parts.map((item) => {
                  return (
                    <CollectionParts.Card key={item.id}>
                      <CollectionParts.Poster
                        slug={item.poster_path}
                        data-testid="collection-parts-poster"
                      />
                      <CollectionParts.Wrapper>
                        <CollectionParts.Subtitle
                          to={`/details/movie/${item.id}`}
                        >
                          {item.title}
                        </CollectionParts.Subtitle>
                        <CollectionParts.Date>
                          {new Date(item.release_date).getFullYear()}
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
        </CSSTransition>
      </SwitchTransition>
    </CollectionParts>
  );
}
