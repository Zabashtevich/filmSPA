import React from "react";

import { DetailsPoster } from "../../../components";
import { getPersonRole, getMoneyFormat } from "../../../utils";

export default function DetailsPosterRows({ data, direction }) {
  return (
    <>
      <DetailsPoster.Title>{data.title || data.name}</DetailsPoster.Title>
      <DetailsPoster.Overview>{data.overview}</DetailsPoster.Overview>
      <DetailsPoster.Subtitle>About {direction}</DetailsPoster.Subtitle>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Year:</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>
          {new Date(data.release_date).getFullYear() || "unknown"}
        </DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Language</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>
          {data.spoken_languages.map((item) => item.name).join(", ")}
        </DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Genres</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>
          {data.genres.map((item) => item.name).join(", ")}
        </DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Tagline:</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>{data.tagline}</DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Director:</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>
          {getPersonRole(data?.credits?.crew || [], "Director")}
        </DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Story:</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>
          {getPersonRole(data?.credits?.crew || [], "Story")}
        </DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Producer:</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>
          {getPersonRole(data?.credits?.crew || [], "Producer")}
        </DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Designer:</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>
          {getPersonRole(data?.credits?.crew || [], "Production Design")}
        </DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Composer:</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>
          {getPersonRole(data?.credits?.crew || [], "Original Music Composer")}
        </DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Editor:</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>
          {getPersonRole(data?.credits?.crew || [], "Editor")}
        </DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Budget:</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>
          {getMoneyFormat(data.budget || null)}
        </DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Revenue:</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>
          {getMoneyFormat(data.revenue || null)}
        </DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
      <DetailsPoster.Row>
        <DetailsPoster.Fieldname>Runtime:</DetailsPoster.Fieldname>
        <DetailsPoster.Fieldvalue>{data.runtime}</DetailsPoster.Fieldvalue>
      </DetailsPoster.Row>
    </>
  );
}
