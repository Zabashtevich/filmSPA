import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { ActorPoster } from "../../components";
import { useFetch } from "./../../hooks";
import { getKnownFor, splitDate } from "../../utils";
import { CreditsContainer, MovieListContainer } from "./..";
import { CreditsCompSkeleton } from "../../components/skeleton";

export default function ActorPosterContainer() {
  const { slug } = useParams();
  const [data, dataLoading] = useFetch("person", slug);

  return (
    <ActorPoster>
      <ActorPoster.Column type="poster">
        {!dataLoading && (
          <>
            <ActorPoster.Poster src={data?.profile_path} />
            <ActorPoster.Subtitle type="info">Information</ActorPoster.Subtitle>
            <ActorPoster.Row>
              <ActorPoster.Fieldname>Filmography:</ActorPoster.Fieldname>
              <ActorPoster.Fieldvalue>
                {data?.combined_credits.cast.length || 0}
              </ActorPoster.Fieldvalue>
            </ActorPoster.Row>
            <ActorPoster.Row>
              <ActorPoster.Fieldname>Gender:</ActorPoster.Fieldname>
              <ActorPoster.Fieldvalue>
                {data.gender === 1 ? "female" : "male"}
              </ActorPoster.Fieldvalue>
            </ActorPoster.Row>
            <ActorPoster.Row>
              <ActorPoster.Fieldname>Birthdate:</ActorPoster.Fieldname>
              <ActorPoster.Fieldvalue>
                {splitDate(data.birthday) || "unknown"}
              </ActorPoster.Fieldvalue>
            </ActorPoster.Row>
            {!!data.deathday && (
              <ActorPoster.Row>
                <ActorPoster.Fieldname>Deathday:</ActorPoster.Fieldname>
                <ActorPoster.Fieldvalue>{data.deathday}</ActorPoster.Fieldvalue>
              </ActorPoster.Row>
            )}
            <ActorPoster.Row>
              <ActorPoster.Fieldname>Name:</ActorPoster.Fieldname>
              <ActorPoster.Fieldvalue>{data.name}</ActorPoster.Fieldvalue>
            </ActorPoster.Row>
            <ActorPoster.Row>
              <ActorPoster.Fieldname>Place of birth:</ActorPoster.Fieldname>
              <ActorPoster.Fieldvalue>
                {data.place_of_birth || "unknown"}
              </ActorPoster.Fieldvalue>
            </ActorPoster.Row>
            <ActorPoster.Row>
              <ActorPoster.Fieldname>Known for:</ActorPoster.Fieldname>
              <ActorPoster.Fieldvalue>
                {data.known_for_department || "unknown"}
              </ActorPoster.Fieldvalue>
            </ActorPoster.Row>{" "}
          </>
        )}
      </ActorPoster.Column>
      <ActorPoster.Column type="content">
        {!dataLoading && (
          <>
            <ActorPoster.Title>{data.name}</ActorPoster.Title>
            <ActorPoster.Subtitle>Biography</ActorPoster.Subtitle>
            <ActorPoster.Biography>{data.biography}</ActorPoster.Biography>
            <ActorPoster.Subtitle>Known for</ActorPoster.Subtitle>
            <MovieListContainer
              list={getKnownFor(data?.combined_credits?.cast) || []}
            />
          </>
        )}
        <CreditsContainer
          list={data?.combined_credits.cast || []}
          listLoading={dataLoading}
        />
      </ActorPoster.Column>
    </ActorPoster>
  );
}
