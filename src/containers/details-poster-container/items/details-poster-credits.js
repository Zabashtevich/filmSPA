import React from "react";

import { DetailsPoster } from "../../../components";

export default function DetailsPosterCredits({ data }) {
  return (
    <>
      <DetailsPoster.Subtitle>Cast:</DetailsPoster.Subtitle>
      {data.credits.cast.slice(0, 10).map(({ name, id }) => (
        <DetailsPoster.Link key={id} to={`/actor/${id}`}>
          {name}
        </DetailsPoster.Link>
      ))}
    </>
  );
}
