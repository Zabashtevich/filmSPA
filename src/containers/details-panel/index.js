import React from "react";

import { DetailsPanel } from "./../../components";
import { MediaContainer, ReviewContainer } from "./../";
import MediaSkeleton, {
  DetailsCollectionSkeleton,
} from "../../components/skeleton";
import PanelRating from "./items/panel-rating";
import PanelCollection from "./items/panel-collection";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function DetailsPanelContainer({ data, loading }) {
  const collection = data?.belongs_to_collection;

  return (
    <DetailsPanel>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={loading} classNames="fade" timeout={500}>
          <DetailsPanel.Section>
            {loading && <MediaSkeleton />}
            {!loading && <MediaContainer data={data} />}
          </DetailsPanel.Section>
        </CSSTransition>
      </SwitchTransition>

      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={loading} classNames="fade" timeout={500}>
          <DetailsPanel.Section>
            {loading && <DetailsCollectionSkeleton />}
            {!loading && !!collection && (
              <PanelCollection collection={collection} />
            )}
          </DetailsPanel.Section>
        </CSSTransition>
      </SwitchTransition>

      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={loading} classNames="fade" timeout={500}>
          <DetailsPanel.Section>
            <DetailsPanel.Title>Rating</DetailsPanel.Title>
            {!loading && <PanelRating data={data} />}
          </DetailsPanel.Section>
        </CSSTransition>
      </SwitchTransition>
    </DetailsPanel>
  );
}
