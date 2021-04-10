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

export default function ActorContainer() {
  const { slug } = useParams();

  const [data, dataLoading] = useFetch("person", slug);
  const [, setCredits] = useCreditsContext();

  useEffect(() => {
    if (!dataLoading) {
      setCredits({
        creditsLoading: false,
        array: sortMoviesByDate(data?.combined_credits?.cast) || [],
        type: "actor",
      });
    }
  }, [dataLoading]);

  return (
    <Actor>
      <Actor.Column>
        {dataLoading && <ActorColumnSkeleton />}
        {!dataLoading && <ActorPosterColumn data={data} />}
      </Actor.Column>
      <Actor.Content>
        {dataLoading && <ActorContentSkeleton />}
        {!dataLoading && <ActorContent data={data} />}
        <CreditsContainer />
      </Actor.Content>
    </Actor>
  );
}
