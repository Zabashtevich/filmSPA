import React from "react";
import { useParams } from "react-router";

import { getYearFromString } from "./../../utils";
import { useFetch } from "./../../hooks";
import { Actor } from "../../components";

export default function ActorContainer() {
  const { slug } = useParams();

  const [data, dataLoading] = useFetch("person", slug);
  console.log(data);
  return (
    !dataLoading && (
      <Actor>
        <Actor.Column>
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
            <Actor.Fieldvalue>
              {data.place_of_birth || "unknown"}
            </Actor.Fieldvalue>
          </Actor.Row>
          <Actor.Row>
            <Actor.Fieldname>Known for:</Actor.Fieldname>
            <Actor.Fieldvalue>
              {data.known_for_department || "unknown"}
            </Actor.Fieldvalue>
          </Actor.Row>
        </Actor.Column>
        <Actor.Content>
          <Actor.Title>{data.name}</Actor.Title>
          <Actor.Subtitle>Overview</Actor.Subtitle>
          <Actor.Overview>{data.biography}</Actor.Overview>
        </Actor.Content>
      </Actor>
    )
  );
}
