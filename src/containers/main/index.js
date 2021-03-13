import React from "react";

import { Main } from "../../components";
import { PopularContainer } from "..";

export default function MainContainer() {
  return (
    <Main>
      <Main.Section>
        <PopularContainer type="tv" />
      </Main.Section>
      <Main.Section>
        <PopularContainer type="movie" />
      </Main.Section>
      <Main.Section>
        <PopularContainer type="person" />
      </Main.Section>
    </Main>
  );
}
