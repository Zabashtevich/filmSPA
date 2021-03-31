import React from "react";
import { useParams } from "react-router";

import { useFetch } from "./../../hooks";
import { Actor } from "../../components";
import {
  ActorColumnSkeleton,
  ActorContentSkeleton,
} from "./../../components/skeleton";
import ActorPosterColumn from "./items/poster";
import ActorContent from "./items/content";

export default function ActorContainer() {
  const { slug } = useParams();

  const [data, dataLoading] = useFetch("person", slug);

  return (
    <Actor>
      <Actor.Column>
        {dataLoading && <ActorColumnSkeleton />}
        {!dataLoading && <ActorPosterColumn data={data} />}
      </Actor.Column>
      <Actor.Content>
        {dataLoading && <ActorContentSkeleton />}
        {!dataLoading && <ActorContent data={data} />}
      </Actor.Content>
    </Actor>
  );
}
