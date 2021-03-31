import React from "react";

import { Actor } from "../../../components";
import { getYearFromString } from "../../../utils";

export default function ActorPosterColumn({ data }) {
  return (
    <Actor.Wrapper>
      <Actor.Poster slug={data.profile_path} />
      <Actor.Subtitle>Personal Information</Actor.Subtitle>
      <Actor.Row>
        <Actor.Fieldname>Filmography:</Actor.Fieldname>
        <Actor.Fieldvalue>
          {data?.combined_credits.cast.length || 0}
        </Actor.Fieldvalue>
      </Actor.Row>
      <Actor.Row>
        <Actor.Fieldname>Gender:</Actor.Fieldname>
        <Actor.Fieldvalue>
          {data.gender === 1 ? "Female" : "Male"}
        </Actor.Fieldvalue>
      </Actor.Row>
      <Actor.Row>
        <Actor.Fieldname>Birthdate:</Actor.Fieldname>
        <Actor.Fieldvalue>
          {getYearFromString(data.birthday) || "unknown"}
        </Actor.Fieldvalue>
      </Actor.Row>
      {!!data.deathday && (
        <Actor.Row>
          <Actor.Fieldname>Deathday:</Actor.Fieldname>
          <Actor.Fieldvalue>{data.deathday}</Actor.Fieldvalue>
        </Actor.Row>
      )}
      <Actor.Row>
        <Actor.Fieldname>Place of birth:</Actor.Fieldname>
        <Actor.Fieldvalue>{data.place_of_birth || "unknown"}</Actor.Fieldvalue>
      </Actor.Row>
      <Actor.Row>
        <Actor.Fieldname>Known for:</Actor.Fieldname>
        <Actor.Fieldvalue>
          {data.known_for_department || "unknown"}
        </Actor.Fieldvalue>
      </Actor.Row>
    </Actor.Wrapper>
  );
}
