import React, { useState } from "react";

import { BodyMain, Slider, Tab } from "../components";
import Data from "./data.json";

export default function BodyMainContainer() {
  const [sliderIndex, setSliderIndex] = useState(1);

  return (
    <BodyMain>
      <BodyMain.Section>
        <Slider
          setSliderIndex={setSliderIndex}
          sliderIndex={sliderIndex}
          slidesLength={Data.length}
        >
          <Slider.Body data={Data[sliderIndex]} />
          <Slider.Dots
            data={Data}
            sliderIndex={sliderIndex}
            setSliderIndex={setSliderIndex}
          />
        </Slider>
      </BodyMain.Section>
      <BodyMain.Section container>
        <Tab>
          <Tab.Selector>
            <Tab.Anchor color>Day</Tab.Anchor>
            <Tab.Anchor>Week</Tab.Anchor>
          </Tab.Selector>
        </Tab>
      </BodyMain.Section>
    </BodyMain>
  );
}
