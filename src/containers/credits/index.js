import React from "react";

import CreditsItem from "./items/credits-item";
import { Credits } from "../../components";

export default function CreditsContainer({ array, loading }) {
  return (
    <Credits>
      {array.map((item) => {
        <CreditsItem item={item} />;
      })}
    </Credits>
  );
}
