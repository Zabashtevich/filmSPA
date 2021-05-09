import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { CollectionHeader } from "../../components";
// import { CollectionHeaderSkeleton } from "../../components/skeleton";
import { getMoneyFormat } from "../../utils";

export default function CollectionHeaderContainer({ data, loading, details }) {
  return (
    <CollectionHeader
      slug={data?.backdrop_path}
      data-testid="collection-header-thumbnail"
    >
      <CollectionHeader.Inner>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition key={loading} classNames="fade" timeout={500}>
            <CollectionHeader.Container>
              {/* {loading && <CollectionHeaderSkeleton />} */}
              {!loading && (
                <>
                  <CollectionHeader.Poster
                    slug={data?.poster_path}
                    data-testid="collection-header-poster"
                  />
                  <CollectionHeader.Info>
                    <CollectionHeader.Title>
                      {data?.title || data?.name}
                    </CollectionHeader.Title>
                    <CollectionHeader.Subtitle>
                      Overview
                    </CollectionHeader.Subtitle>
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
                      <CollectionHeader.Fieldname>
                        Revenue:
                      </CollectionHeader.Fieldname>
                      <CollectionHeader.Fieldvalue>
                        {!loading && getMoneyFormat(details.revenue)}
                      </CollectionHeader.Fieldvalue>
                    </CollectionHeader.Row>
                  </CollectionHeader.Info>
                </>
              )}
            </CollectionHeader.Container>
          </CSSTransition>
        </SwitchTransition>
      </CollectionHeader.Inner>
    </CollectionHeader>
  );
}
