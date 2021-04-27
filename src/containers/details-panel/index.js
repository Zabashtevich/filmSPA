import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { DetailsPanel } from "./../../components";
import { MediaContainer } from "./../";
import MediaSkeleton, {
  DetailsCollectionSkeleton,
} from "../../components/skeleton";
import PanelRating from "./items/panel-rating";
import PanelCollection from "./items/panel-collection";

export default function DetailsPanelContainer({ data, dataLoading }) {
  const { userDataLoading, lists, profile, profileExist } = useSelector(
    (state) => state.userData,
  );

  const collection = data?.belongs_to_collection;

  const loading = dataLoading || userDataLoading;
  return (
    <DetailsPanel>
      <DetailsPanel.Section>
        <DetailsPanel.Title>Rating</DetailsPanel.Title>
        {!loading && (
          <PanelRating
            data={data}
            profileExist={profileExist}
            profile={profile}
            votes={lists.votes}
          />
        )}
      </DetailsPanel.Section>

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
    </DetailsPanel>
  );
}
