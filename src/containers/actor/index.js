import React from "react";
import { useParams } from "react-router";

import { useFetch } from "./../../hooks";
import { Actor } from "../../components";
import { ActorColumnSkeleton } from "./../../components/skeleton";
import ActorPosterColumn from "./items/poster";

export default function ActorContainer() {
  const { slug } = useParams();

  const [data, dataLoading] = useFetch("person", slug);
  console.log(data);
  return (
    <Actor>
      <Actor.Column>
        {dataLoading && <ActorColumnSkeleton />}
        {!dataLoading && <ActorPosterColumn data={data} />}
      </Actor.Column>
      <Actor.Content>
        {/* <Actor.Title>{data.name}</Actor.Title>
        <Actor.Subtitle>Overview</Actor.Subtitle>
        <Actor.Overview>{data.biography}</Actor.Overview> */}
      </Actor.Content>
    </Actor>
  );
}
