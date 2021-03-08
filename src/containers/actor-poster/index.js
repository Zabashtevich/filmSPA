import React from "react";
import { useParams } from "react-router";
import { ActorPoster } from "../../components";

import { useFetch } from "./../../hooks";

export default function ActorPosterContainer() {
  const { slug } = useParams();
  const [data, loading] = useFetch("person", slug);

  console.log(data);

  return (
    <ActorPoster>
      <ActorPoster.Column>
        <ActorPoster.Poster />
        <ActorPoster.Row>
          <ActorPoster.Fieldname>Filmography:</ActorPoster.Fieldname>
          <ActorPoster.Fieldvalue></ActorPoster.Fieldvalue>
        </ActorPoster.Row>
        <ActorPoster.Row>
          <ActorPoster.Fieldname>Gender:</ActorPoster.Fieldname>
          <ActorPoster.Fieldvalue></ActorPoster.Fieldvalue>
        </ActorPoster.Row>
        <ActorPoster.Row>
          <ActorPoster.Fieldname>Birthdate:</ActorPoster.Fieldname>
          <ActorPoster.Fieldvalue></ActorPoster.Fieldvalue>
        </ActorPoster.Row>
        <ActorPoster.Row>
          <ActorPoster.Fieldname>Deathday:</ActorPoster.Fieldname>
          <ActorPoster.Fieldvalue></ActorPoster.Fieldvalue>
        </ActorPoster.Row>
        <ActorPoster.Row>
          <ActorPoster.Fieldname>Name:</ActorPoster.Fieldname>
          <ActorPoster.Fieldvalue></ActorPoster.Fieldvalue>
        </ActorPoster.Row>
        <ActorPoster.Row>
          <ActorPoster.Fieldname>Place of birth:</ActorPoster.Fieldname>
          <ActorPoster.Fieldvalue></ActorPoster.Fieldvalue>
        </ActorPoster.Row>
        <ActorPoster.Row>
          <ActorPoster.Fieldname>Known for:</ActorPoster.Fieldname>
          <ActorPoster.Fieldvalue></ActorPoster.Fieldvalue>
        </ActorPoster.Row>
      </ActorPoster.Column>
      <ActorPoster.Column>
        <ActorPoster.Title></ActorPoster.Title>
        <ActorPoster.Subtitle></ActorPoster.Subtitle>
        <ActorPoster.Biography></ActorPoster.Biography>
      </ActorPoster.Column>
    </ActorPoster>
  );
}
