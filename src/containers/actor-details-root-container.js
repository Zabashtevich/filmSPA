import React from "react";

import { useParams } from "react-router-dom";
import { DetailsHeader, PosterColumn } from "../components";
import useFetch from "../hooks/useFetchData";

export default function ActorDetailsRootContainer() {
  const location = useParams();

  const { list, loading } = useFetch(["person"], location.slug, [
    { append_to_response: "credits" },
  ]);

  console.log(list);

  return list ? (
    <DetailsHeader>
      <PosterColumn>
        <PosterColumn.Poster src={list.profile_path} />
      </PosterColumn>
    </DetailsHeader>
  ) : null;
}
