import React, { useEffect } from "react";
import { useParams } from "react-router";

import { useFetch } from "./../../hooks";
import { Actor } from "../../components";
import {
  ActorColumnSkeleton,
  ActorContentSkeleton,
} from "./../../components/skeleton";
import ActorPosterColumn from "./items/poster";
import ActorContent from "./items/content";
import { CreditsContainer } from "./../";
import { sortMoviesByDate } from "../../utils";
import { useCreditsContext } from "../../context";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function ActorContainer() {
  const { slug } = useParams();

  const [data, dataLoading] = useFetch({
    type: "person",
    target: slug,
    querries: true,
  });

  const [, setCredits] = useCreditsContext();

  useEffect(() => {
    if (!dataLoading) {
      setCredits({
        creditsLoading: false,
        array: sortMoviesByDate(data?.combined_credits?.cast) || [],
      });
    }
  }, [dataLoading]);

  return (
    <Actor>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={dataLoading} classNames="fade" timeout={500}>
          <Actor.Column>
            {dataLoading && <ActorColumnSkeleton />}
            {!dataLoading && <ActorPosterColumn data={data} />}
          </Actor.Column>
        </CSSTransition>
      </SwitchTransition>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={dataLoading} classNames="fade" timeout={500}>
          <Actor.Content>
            {dataLoading && <ActorContentSkeleton />}
            {!dataLoading && <ActorContent data={data} />}
            <CreditsContainer />
          </Actor.Content>
        </CSSTransition>
      </SwitchTransition>
    </Actor>
  );
}
