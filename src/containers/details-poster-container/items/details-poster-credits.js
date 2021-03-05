import React from "react";

import { DetailsPoster } from "../../../components";

export default function DetailsPosterCredits({ data }) {
  return data.credits.cast.slice(0, 10).map(({ name, id }) => (
    <DetailsPoster.Link key={id} to={`/actor/${id}`}>
      {name}
    </DetailsPoster.Link>
  ));
}
