import React from "react";

import { ActorPoster } from "../../../components";
import { getYearFromString } from "../../../utils";

export default function ActorPosterRows({ data }) {
  return (
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
          {getYearFromString(data.birthday) || "unknown"}
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
      </ActorPoster.Row>
    </>
  );
}
