import React, { useEffect } from "react";
import { useParams } from "react-router";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useSelector } from "react-redux";

import ActorSkeletonColumn from "./skeleton/actor-skeleton-column";
import { useFetch } from "./../../hooks";
import { Actor } from "../../components";
import ActorPosterColumn from "./items/poster";
import ActorContent from "./items/content";
import { CreditsContainer } from "./../";
import { sortMoviesByDate } from "../../utils";
import { useCreditsContext } from "../../context";
import ActorSkeletonContent from "./skeleton/actor-skeleton-content";

export default function ActorContainer() {
  const { userDataLoading } = useSelector((state) => state.userData);
  const { slug } = useParams();

  const [data, dataLoading] = useFetch({
    type: "person",
    target: slug,
    querries: true,
  });

  const [, setCredits] = useCreditsContext();

  useEffect(() => {
    if (!dataLoading && !userDataLoading) {
      setCredits({
        loading: false,
        items: sortMoviesByDate(data?.combined_credits?.cast) || [],
      });
    }
  }, [dataLoading, userDataLoading]);

  return (
    <Actor>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={dataLoading} classNames="fade" timeout={500}>
          <Actor.Column>
            {dataLoading && <ActorSkeletonColumn />}
            {!dataLoading && <ActorPosterColumn data={data} />}
          </Actor.Column>
        </CSSTransition>
      </SwitchTransition>

      <CSSTransition in={!dataLoading} classNames="fade" timeout={500}>
        <Actor.Content>
          {dataLoading && <ActorSkeletonContent />}
          {!dataLoading && <ActorContent data={data} />}
          <CreditsContainer />
        </Actor.Content>
      </CSSTransition>
    </Actor>
  );
}
