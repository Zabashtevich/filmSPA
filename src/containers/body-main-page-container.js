import React from "react";

import { BodyMain, Slider } from "../components";

export default function BodyMainContainer() {
  return (
    <BodyMain>
      <BodyMain.Section>
        <Slider>
          <Slider.Body />
          <Slider.Dots />
        </Slider>
      </BodyMain.Section>
    </BodyMain>
  );
}
